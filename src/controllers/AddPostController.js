import { addPost } from "../models/postModel.js";

export class AddPostController {
	async handle(req, res) {
		const newPost = req.body;

		try {
			const createdPost = await addPost(newPost);
			return res.status(201).json(createdPost);
		} catch (error) {
			console.error(error.message);
			return res.status(500).json({ error: "Internal server error" });
		}
	}
}