import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

async function run() {
  try {

    const database = client.db("devdive");
    const posts = database.collection("posts");

    const allPosts = await posts.find({}).toArray();

    console.log(allPosts)

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
