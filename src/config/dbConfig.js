import { MongoClient } from "mongodb";

export async function connectDatabase(databaseUrl) {
	let mongoClient;

	try {
		mongoClient = new MongoClient(databaseUrl);

		console.log("Connecting to the database...");
		await mongoClient.connect();
		console.log("Connected to the database!");

		return mongoClient;
	} catch (error) {
		console.log("erro: ", error);
		process.exit(1);
	}
}