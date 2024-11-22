import { getAllPosts } from "../models/postModel.js";

export class ListAllPostController {
	async handle(req, res) {
		const posts = await getAllPosts();
		return res.status(200).json(posts);
	}
}