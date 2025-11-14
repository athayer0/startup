const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('missionary');
const userCollection = db.collection('user');
const timelineCollection = db.collection('timeline');
const savedEventsCollection = db.collection('savedEvents');

// Test the connection
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connected to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

// User functions
function getUser(userName) {
  return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne(
    { userName: user.userName }, 
    { $set: user }
  );
}

// Timeline functions
async function getTimeline(userName) {
  return timelineCollection.findOne({ userName: userName });
}

async function saveTimeline(userName, events) {
  await timelineCollection.updateOne(
    { userName: userName },
    { $set: { userName: userName, events: events, updatedAt: new Date() } },
    { upsert: true }
  );
}

// Saved events functions
async function getSavedEvents(userName) {
  const result = await savedEventsCollection.findOne({ userName: userName });
  return result ? result.events : [];
}

async function addSavedEvent(userName, event) {
  await savedEventsCollection.updateOne(
    { userName: userName },
    { $push: { events: event } },
    { upsert: true }
  );
}

async function removeSavedEvent(userName, eventId) {
  await savedEventsCollection.updateOne(
    { userName: userName },
    { $pull: { events: { id: eventId } } }
  );
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  getTimeline,
  saveTimeline,
  getSavedEvents,
  addSavedEvent,
  removeSavedEvent,
};