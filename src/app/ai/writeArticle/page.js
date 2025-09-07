"use client";
import { Sparkles, SquarePen } from "lucide-react";
import { useState } from "react";

function Page() {
  const [topic, setTopic] = useState("");
  const [length, setLength] = useState("Short (500-800 words)");
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/writeArticle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, length }),
      });

      const data = await res.json();

      if (data.success) {
        setArticle(data.article);
      } else {
        setArticle({
          topic,
          length,
          content: "⚠️ Error generating article.",
        });
      }
    } catch (error) {
      console.error("Request failed:", error);
      setArticle({
        topic,
        length,
        content: "⚠️ Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  const lengths = [
    "Short (500-800 words)",
    "Medium (800-1200 words)",
    "Long (1200+ words)",
  ];

  return (
    <div className="flex-1 bg-[#F4F7FB]">
      <div className=" p-6 flex items-start flex-wrap gap-4 text-slate-700">
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl p-4 bg-white rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#4A7AFF] ">
              <Sparkles />
            </span>
            <h1 className="text-2xl font-semibold">Article Configuration</h1>
          </div>

          {/* topic input */}
          <p className="mt-6 text-md font-medium">Article Topic</p>
          <input
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
            placeholder="The future of artificial intelligence is..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />

          {/* length selector */}
          <p className="mt-4 text-md font-medium">Article Length</p>
          <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
            {lengths.map((len) => (
              <span
                key={len}
                onClick={() => setLength(len)}
                className={`text-sm px-4 py-1 border rounded-full cursor-pointer ${
                  length === len
                    ? "bg-blue-50 text-blue-700 border-blue-400"
                    : "text-gray-500 border-gray-300"
                }`}
              >
                {len}
              </span>
            ))}
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-md rounded-lg cursor-pointer"
          >
            <span className="">
              <SquarePen />
            </span>
            {loading ? "Generating..." : "Generate article"}
          </button>
        </form>

        {/* result box */}
        <div className="w-full max-w-xl p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
          <div className="flex items-center gap-3">
            <span className="text-[#4A7AFF]">
              <SquarePen />
            </span>
            <h1 className="text-2xl font-semibold">Generated Article</h1>
          </div>

          <div className="flex-1 flex justify-center items-center text-sm text-gray-600">
            {article ? (
              <div className="flex flex-col gap-4">
                <p>
                  <strong>Topic:</strong> {article.topic}
                </p>
                <p>
                  <strong>Length:</strong> {article.length}
                </p>
                <p className="text-gray-500">{article.content}</p>
              </div>
            ) : (
              <p className="text-gray-400">
                <span className="flex justify-center items-center mb-2 ">
                  <SquarePen size={40} />
                </span>
                Enter a topic and click “Generate article” to get started
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
