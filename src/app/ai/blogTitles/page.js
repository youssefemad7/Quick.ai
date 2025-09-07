"use client";
import { Hash, Sparkles, SquarePen } from "lucide-react";
import { useState } from "react";

function Page() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [articles, setArticles] = useState([]); // بدل article
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setArticles([]);

    try {
      const res = await fetch("/api/blogTitles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, category }),
      });

      const data = await res.json();
      if (data.success) {
        setArticles(data.titles);
      } else {
        setArticles(["⚠️ Error generating titles"]);
      }
    } catch (err) {
      console.error("Error:", err);
      setArticles(["⚠️ Something went wrong"]);
    } finally {
      setLoading(false);
    }
  };

  const Categories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];

  return (
    <div className="flex-1 bg-[#F4F7FB]">
      <div className="p-6 flex items-start flex-wrap gap-4 text-slate-700">
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl p-4 bg-white rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#8E37EB] ">
              <Sparkles />
            </span>
            <h1 className="text-2xl font-semibold">AI Title Generator</h1>
          </div>

          {/* topic input */}
          <p className="mt-6 text-md font-medium">Keyword</p>
          <input
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
            placeholder="The future of artificial intelligence is..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* category selector */}
          <p className="mt-4 text-md font-medium">Category</p>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 flex-wrap md:max-w-9/11 text-center">
            {Categories.map((cat) => (
              <span
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-sm px-4 py-1 border rounded-full cursor-pointer ${
                  category === cat
                    ? "bg-purple-50 text-[#8E37EB] border-[#8E37EB]"
                    : "text-gray-500 border-gray-300"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-md rounded-lg cursor-pointer"
          >
            <span>
              <SquarePen />
            </span>
            {loading ? "Generating..." : "Generate titles"}
          </button>
        </form>

        {/* result box */}
        <div className="w-full max-w-xl p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto">
          <div className="flex items-center gap-3">
            <span className="text-[#8E37EB]">
              <Hash />
            </span>
            <h1 className="text-2xl font-semibold">Generated titles</h1>
          </div>

          <div className="flex-1 flex flex-col justify-start items-start text-sm text-gray-600 mt-4 gap-2">
            {articles.length > 0 ? (
              articles.map((t, i) => (
                <p key={i} className="text-gray-700">
                  {i + 1}. {t}
                </p>
              ))
            ) : (
              <p className="text-gray-400 self-center mt-10">
                <span className="flex justify-center items-center mb-2 ">
                  <Hash size={40} />
                </span>
                Enter a topic and click “Generate title” to get started
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
