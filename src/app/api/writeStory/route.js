import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    // تهيئة Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `
Write a creative and engaging story based on the following prompt: "${prompt}"
`;

    const result = await model.generateContent(fullPrompt);
    const responseText = await result.response.text();

    return NextResponse.json({
      success: true,
      story: responseText.trim(),
      prompt,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate story" },
      { status: 500 }
    );
  }
}
