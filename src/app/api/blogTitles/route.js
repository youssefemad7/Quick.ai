import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { title, category } = await req.json();

    if (!title) {
      return NextResponse.json(
        { success: false, error: "Title (keyword) is required" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
Find the perfect, catchy ${title} for your blog posts with our AI-powered generator in the category "${category}".
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    // split by new lines
    const titles = response
      .split("\n")
      .map((t) => t.replace(/^\d+[\).\s-]*/, "").trim())
      .filter(Boolean);

    return NextResponse.json({
      success: true,
      titles,
      category,
      keyword: title,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate titles" },
      { status: 500 }
    );
  }
}
