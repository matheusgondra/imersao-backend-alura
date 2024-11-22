import fs from "node:fs";
import { GeminiService } from "../services/index.js";
import { updatePost } from "../models/postModel.js";

export class UpdatePostController {
	#service = new GeminiService();

	async handle(req, res) {
		const { id } = req.params;
		const { alt } = req.body;
		const imgUrl = `http://localhost:3000/${id}.png`;

		try {

			const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
			const description = await this.#service.generateDescription(imageBuffer);

			const post = {
				imgUrl,
				alt,
				description
			};

			const updatedPost = await updatePost(id, post);
			return res.status(201).json(updatedPost);
		} catch (error) {
			console.error(error.message);
			return res.status(500).json({ error: "Internal server error" });
		}
	}
}