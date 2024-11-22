import { ObjectId } from "mongodb";
import { connectDatabase, env } from "../config/index.js";

const conn = await connectDatabase(env.databaseUrl);

export async function getAllPosts() {
	const db = conn.db("imersao-instabytes");
	const collection = db.collection("posts");
	return await collection.find().toArray();
}

export async function addPost(newPost) {
	const db = conn.db("imersao-instabytes");
	const collection = db.collection("posts");
	const { insertedId } = await collection.insertOne(newPost);
	const createdPost = await collection.findOne({ _id: insertedId });
	return createdPost;
}

export async function updatePost(id, postData) {
	const db = conn.db("imersao-instabytes");
	const collection = db.collection("posts");
	const objId = ObjectId.createFromHexString(id);
	await collection.updateOne({ _id: new ObjectId(objId) }, { $set: postData });
	const updatedPost = await collection.findOne({ _id: objId });
	return updatedPost;
}