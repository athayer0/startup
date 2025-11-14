const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const app = express();
const authCookieName = 'token';

let users = [];
const userSavedEvents = {};
const userTimelines = {};

// Initialize Gemini client
const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('userName', req.body.userName)) {
    return res.status(409).send({ msg: 'Existing user' });
  }
  const user = await createUser(req.body.userName, req.body.password);
  setAuthCookie(res, user.token);
  res.send({ userName: user.userName });
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('userName', req.body.userName);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    user.token = uuid.v4();
    setAuthCookie(res, user.token);
    return res.send({ userName: user.userName });
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) delete user.token;
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.get('/user/me', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    res.send({
      userName: user.userName,
      missionStartDate: user.missionStartDate || null,
      missionEndDate: user.missionEndDate || null
    });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

apiRouter.post('/user/mission-dates', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    user.missionStartDate = req.body.startDate;
    user.missionEndDate = req.body.endDate;
    res.send({
      userName: user.userName,
      missionStartDate: user.missionStartDate,
      missionEndDate: user.missionEndDate
    });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

apiRouter.get('/timeline', verifyAuth, (req, res) => {
  const userName = req.user.userName;
  const timeline = userTimelines[userName];
  
  if (timeline) {
    res.json({ events: timeline });
  } else {
    res.status(404).json({ events: [] });
  }
});

apiRouter.post('/timeline/generate', verifyAuth, async (req, res) => {
  const { startDate, endDate } = req.body;
  const userName = req.user.userName;

  try {
    const prompt = `Generate a timeline of 8–12 significant real events that occurred between ${startDate} and ${endDate}. Include events from categories: World News, Pop Culture, Sports, Movies, Music, Memes, and Tech.

    Return ONLY a valid JSON array with this exact structure (no markdown, no extra text):
    [
      {
        "date": "MMM DD, YYYY",
        "category": "Category Name",
        "description": "Brief one–sentence description of the event"
      }
    ]`;

    // Use Gemini generateContent
    const response = await gemini.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ],
      temperature: 0.7,
      maxTokens: 1500
    });

    const content = response.text.trim();

    // Remove markdown code blocks if present
    const jsonString = content.replace(/```json\n?|\n?```/g, '').trim();
    const events = JSON.parse(jsonString);

    const eventsWithMetadata = events.map((event, index) => ({
      id: Date.now() + index,
      ...event,
      savedBy: Math.floor(Math.random() * 50) + 1,
      isSaved: false
    }));

    userTimelines[userName] = eventsWithMetadata;

    res.json({ events: eventsWithMetadata });
  } catch (error) {
    console.error('Error generating timeline with Gemini:', error);
    res.status(500).json({ error: 'Failed to generate timeline' });
  }
});

apiRouter.get('/saved-events', verifyAuth, (req, res) => {
  const userName = req.user.userName;
  const savedEvents = userSavedEvents[userName] || [];
  res.json({ savedEvents });
});

apiRouter.post('/saved-events', verifyAuth, (req, res) => {
  const userName = req.user.userName;
  const { event } = req.body;

  if (!userSavedEvents[userName]) {
    userSavedEvents[userName] = [];
  }

  const isAlreadySaved = userSavedEvents[userName].some(e => e.id === event.id);

  if (!isAlreadySaved) {
    userSavedEvents[userName].push({ ...event, isSaved: true });
  }
  res.json({ message: 'Event saved successfully' });
});

apiRouter.delete('/saved-events/:eventId', verifyAuth, (req, res) => {
  const userName = req.user.userName;
  const { eventId } = req.params;

  if (userSavedEvents[userName]) {
    userSavedEvents[userName] = userSavedEvents[userName].filter(
      event => event.id !== parseInt(eventId)
    );
  }
  res.json({ message: 'Event removed successfully' });
});

app.use(function(err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(userName, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    userName,
    password: passwordHash,
    token: uuid.v4(),
    missionStartDate: null,
    missionEndDate: null
  };
  users.push(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;
  return users.find(u => u[field] === value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
