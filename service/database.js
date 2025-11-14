const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('missionary');
const userCollection = db.collection('user');
const timelineCollection = db.collection('timeline');
const savedEventsCollection = db.collection('savedEvents');

