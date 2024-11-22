import "dotenv/config";

const getEnv = (envName) => {
	if (!process.env[envName]) {
		throw new Error(`Environment variable ${envName} is missing.`);
	}

	return process.env[envName];
}

export const env = {
	port: process.env.PORT || 3000,
	databaseUrl: getEnv("DATABASE_URL"),
	geminiKey: getEnv("GEMINI_API_KEY"),
};