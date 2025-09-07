import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { prompt, style } = await req.json();

    const fullPrompt = `${prompt}, ${style}`; // دمج البرومبت مع الستايل

    const result = await client.images.generate({
      model: "gpt-image-1", // موديل الصور من OpenAI
      prompt: fullPrompt,
      size: "1024x1024",
    });

    return NextResponse.json({
      url: result.data[0].url, // رابط الصورة المولدة
      prompt,
      style,
    });
  } catch (error) {
    console.error("OpenAI error:", error);
    return NextResponse.json(
      { error: error.message || "Image generation failed" },
      { status: 500 }
    );
  }
}
