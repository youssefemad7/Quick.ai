"use client";
import { Sparkles } from "lucide-react";
import { useState } from "react";

function Page() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt) return;

    try {
      const res = await fetch("/api/writeStory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.story) {
        setStory(data.story);
      } else {
        alert(data.error || "Failed to generate story");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex-1 bg-[#F4F7FB]">
      <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
        >
          {/* Title */}
          <div className="flex items-center gap-3">
            <Sparkles className="text-[#4A7AFF]" />
            <h1 className="text-xl font-semibold">Write a Story</h1>
          </div>

          {/* Prompt */}
          <p className="mt-6 text-sm font-medium">Enter story prompt</p>
          <textarea
            rows="4"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your story idea here..."
            required
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
          >
            <Sparkles />
            Generate Story
          </button>
        </form>

        {/* Generated Story */}
        <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
          <div className="flex items-center gap-3">
            <Sparkles className="text-[#417DF6]" />
            <h1 className="text-xl font-semibold">Generated Story</h1>
          </div>

          <div className="flex-1 mt-4">
            {story ? (
              <>
                <p className="text-gray-700 whitespace-pre-wrap text-[2rem] mb-5">
                  {prompt}
                </p>
                <p className="text-gray-700 whitespace-pre-wrap">{story}</p>
              </>
            ) : (
              <p className="text-sm text-gray-400">
                Enter a prompt and click &quot;Generate Story&quot; to get
                started
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
