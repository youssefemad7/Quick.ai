"use client";
import { Sparkles, Eraser } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Page() {
  const [file, setFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/removeBackground", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.image) {
        setProcessedImage(data.image);
      } else {
        alert("Error: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Remove.bg error:", error);
      return NextResponse.json(
        { error: error.message || "Background removal failed" },
        { status: 500 }
      );
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
            <span className="text-[#FF4938]">
              <Sparkles className="w-6 h-6" />
            </span>
            <h1 className="text-xl font-semibold">Background Removal</h1>
          </div>

          {/* upload input */}
          <p className="mt-6 text-sm font-medium">Upload image</p>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <p className="text-xs text-gray-500 font-light mt-1">
            Supports JPG, PNG, and other image formats
          </p>

          {/* button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
          >
            <Eraser className="w-5 h-5" />
            Remove background
          </button>
        </form>

        {/* result box */}
        <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
          <div className="flex items-center gap-3">
            <Eraser className="w-5 h-5 text-[#FF4938]" />
            <h1 className="text-xl font-semibold">Processed Image</h1>
          </div>

          <div className="flex-1 flex justify-center items-center">
            {processedImage ? (
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={processedImage}
                  alt="Processed"
                  width={300}
                  height={300}
                  className="rounded-lg border border-gray-200 max-h-72 object-cover"
                />
                <p className="text-sm text-gray-600">
                  Background removed successfully
                </p>
              </div>
            ) : (
              <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
                <Eraser className="w-9 h-9" />
                <p>
                  Upload an image and click "Remove Background" to get started
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
