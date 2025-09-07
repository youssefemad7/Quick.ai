"use client";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Page() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const Styles = [
    "Realistic",
    "Ghibli style",
    "Anime style",
    "Cartoon style",
    "Fantasy style",
    "3D style",
    "Portrait style",
  ];
  // داخل كومبوننتك React (client)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedImage(null);

    try {
      const res = await fetch("/api/generateImages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, style }),
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setGeneratedImage({ url: data.url, prompt, style });
      } else {
        console.error("Generation error:", data);
        alert("لم يتم توليد الصورة: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("حدث خطأ أثناء الاتصال بالسيرفر.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-[#F4F7FB]">
      <div className="p-6 flex items-start flex-wrap gap-4 text-slate-700">
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#00AD25]">
              <Sparkles className="w-6 h-6" />
            </span>
            <h1 className="text-xl font-semibold">AI Image Generator</h1>
          </div>

          {/* input prompt */}
          <p className="mt-6 text-sm font-medium">Describe Your Image</p>
          <textarea
            rows="4"
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
            placeholder="Describe what you want to see in the image.."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />

          {/* style selector */}
          <p className="mt-4 text-sm font-medium">Style</p>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 flex-wrap">
            {Styles.map((s) => (
              <span
                key={s}
                onClick={() => setStyle(s)}
                className={`text-xs text-center px-4 py-1 border rounded-full cursor-pointer ${
                  style === s
                    ? "bg-green-50 text-green-700 border-green-500"
                    : "text-gray-500 border-gray-300"
                }`}
              >
                {s}
              </span>
            ))}
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
          >
            <ImageIcon className="w-5 h-5" />
            Generate Image
          </button>
        </form>

        {/* result box */}
        <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-5 h-5 text-[#00AD25]" />
            <h1 className="text-xl font-semibold">Generated image</h1>
          </div>

          <div className="flex-1 flex justify-center items-center">
            {generatedImage ? (
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={generatedImage.url}
                  alt="Generated"
                  width={300}
                  height={300}
                  className="rounded-lg border border-gray-200 max-h-72 object-cover"
                />
                <p className="text-sm text-gray-600">
                  <strong>Prompt:</strong> {generatedImage.prompt}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Style:</strong> {generatedImage.style}
                </p>
              </div>
            ) : (
              <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                <ImageIcon className="w-9 h-9" />
                <p>Enter a topic and click “Generate image” to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
