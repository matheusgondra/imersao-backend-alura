import multer from "multer";
import fs from "node:fs/promises";

fs.access("uploads")
	.catch(() => fs.mkdir("uploads"))
	.catch(() => console.log("Diretório uploads já existe"));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});
const upload = multer({ dest: "./uploads", storage });
const singleUpload = upload.single("image");

export { singleUpload };