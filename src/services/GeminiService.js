import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../config/index.js";

const genAI = new GoogleGenerativeAI(env.geminiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export class GeminiService {
	async generateDescription(imageBuffer) {
		const prompt = "Gere uma descrição em português do brasil para a seguinte imagem. Me responda apenas com a descrição da imagem e nada a mais";

		try {
			const image = {
				inlineData: {
					data: imageBuffer.toString("base64"),
					mimeType: "image/png",
				},
			};

			const res = await model.generateContent([prompt, image]);
			return res.response.text() || "Alt-text não disponível.";
		} catch (erro) {
			console.error("Erro ao obter alt-text:", erro.message, erro);
			throw new Error("Erro ao obter o alt-text do Gemini.");
		}
	}
}