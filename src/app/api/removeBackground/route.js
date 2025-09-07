// app/api/removeBg/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const newFormData = new FormData();
    newFormData.append("image_file", file);

    const res = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": process.env.REMOVE_BG_API_KEY,
      },
      body: newFormData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Remove.bg error:", errorText);
      return NextResponse.json(
        { error: "Failed to process image", details: errorText },
        { status: 500 }
      );
    }

    const buffer = await res.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    return NextResponse.json({
      image: `data:image/png;base64,${base64Image}`,
    });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}
