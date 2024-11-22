import cors from "cors";

const options = {
	origin: "*",
	optionsSuccessStatus: 200
};

export const corsMiddleware = cors(options);