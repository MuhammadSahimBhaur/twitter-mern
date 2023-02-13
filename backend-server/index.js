import {MongoClient, ServerApiVersion}  from 'mongodb';
import express  from 'express';
import fs from 'fs/promises';

const keys = JSON.parse(await fs.readFile('./keys.json'));

const client = new MongoClient(keys.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const app = express();
app.listen(3000, () => console.log("Server is running"));