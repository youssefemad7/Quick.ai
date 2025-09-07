"use client";
import { Sparkles } from "lucide-react";
import { useState } from "react";

function SearchPage() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);
    setResults("");

    try {
      const res = await fetch("/api/writeResearch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.research) {
        // هنا الاسم الجديد
        setResults(data.research);
      } else {
        alert(data.error || "Failed to get research results");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
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
          <div className="flex items-center gap-3">
            <Sparkles className="text-[#4A7AFF]" />
            <h1 className="text-xl font-semibold">Write a Research</h1>
          </div>

          <p className="mt-6 text-sm font-medium">Enter search query</p>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your query here..."
            required
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-50"
          >
            <Sparkles />
            {loading ? "Searching..." : "Research"}
          </button>
        </form>

        {/* Results */}
        <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
          <div className="flex items-center gap-3">
            <Sparkles className="text-[#417DF6]" />
            <h1 className="text-xl font-semibold">Search Results</h1>
          </div>

          <div className="flex-1 mt-4">
            {results ? (
              <div className="text-gray-700 whitespace-pre-wrap">{results}</div>
            ) : loading ? (
              <p className="text-sm text-gray-400">Searching...</p>
            ) : (
              <p className="text-sm text-gray-400">
                Enter a query and click "Research" to get results
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
