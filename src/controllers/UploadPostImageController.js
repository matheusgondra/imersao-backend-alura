import fs from "node:fs";
import { addPost } from "../models/postModel.js";

export class UploadPostImageController {
	async handle(req, res) {
		try {
			const newPost = {
				description: "",
				imgUrl: req.file.originalName,
				alt: ""
			};
			const createdPost = await addPost(newPost);
			const updatedImage = `uploads/${createdPost._id}.png`;
			fs.renameSync(req.file.path, updatedImage);

			res.status(201).json({ message: "File uploaded successfully", id: createdPost._id });
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ error: "Internal server error" });
		}
	}
}