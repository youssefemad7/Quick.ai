import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { topic, length } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate high-quality, engaging articles on ${topic} with our AI writing technology with length ${length}.`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return NextResponse.json({
      success: true,
      article: {
        topic,
        length,
        content: response,
      },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate article" },
      { status: 500 }
    );
  }
}
