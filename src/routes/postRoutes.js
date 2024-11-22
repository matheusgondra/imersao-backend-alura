import { AddPostController, ListAllPostController, UploadPostImageController, UpdatePostController } from "../controllers/index.js";
import { singleUpload } from "../middlewares/upload.js";
import { adaptRoute } from "./adaptRoute.js";

export const postRoutes = (app) => {
	app
		.get("/posts", adaptRoute(ListAllPostController))
		.post("/posts", adaptRoute(AddPostController))
		.post("/upload", singleUpload, adaptRoute(UploadPostImageController))
		.put("/posts/:id", adaptRoute(UpdatePostController));
}
