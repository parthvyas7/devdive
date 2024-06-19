import process from 'node:process';
import { MongoClient } from "mongodb";
import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

const db = client.db("devdive");
const coll = db.collection("posts");

app.use(cors());
app.use(express.json());

app.get('/posts', async (req, res) => {
  const allPosts = await coll.find().toArray();
  res.send(allPosts)
})

app.post('/posts', async (req, res) => {
  const post = req.body;
  res.send(post);
  const result = await coll.insertOne(post);
  res.json(result.ops[0]);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})