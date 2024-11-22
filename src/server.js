import express from "express";
import { corsMiddleware, env } from "./config/index.js";
import { routes } from "./routes/index.js";

const app = express();

app.use(corsMiddleware)
app.use(express.json());
app.use(express.static("uploads"));

routes(app);

app.listen(env.port, console.log(`Server is running in http://localhost:${env.port}`));