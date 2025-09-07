import {
  Book,
  Eraser,
  FileText,
  Hash,
  Image,
  NotebookText,
  Scissors,
  Search,
  SquarePen,
} from "lucide-react";
import Link from "next/link";
import { FaResearchgate } from "react-icons/fa";

function Powerful() {
  return (
    <div className="d-flex">
      <div className="text-center">
        <h1 className="text-[3rem] font-bold">Powerful AI Tools</h1>
        <p className="text-gray-500 max-w-lg mx-auto pb-5">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>
      <div className=" w-[70%] max-w-auto mt-10 relative left-[15%] flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3">
        <Link href="/ai/writeArticle">
          <div className=" p-8 m-4 max-w-auto rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400">
              <SquarePen className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold">
              AI Article Writer
            </h3>
            <p className="text-gray-400 text-md font-medium max-w-[95%]">
              Generate high-quality, engaging articles on any topic with our AI
              writing technology.
            </p>
          </div>
        </Link>
        <Link href="/ai/blogTitles">
          <div className="p-8 m-4 max-w-auto rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <Hash className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold">
              Blog Title Generator
            </h3>
            <p className="text-gray-400 text-md font-medium max-w-[95%]">
              Find the perfect, catchy title for your blog posts with our
              AI-powered title generator.
            </p>
          </div>
        </Link>
        <Link href="/ai/generateImages">
          <div className="p-8 m-4 max-w-auto rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-400">
              <Image className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold">
              AI Image Generation
            </h3>
            <p className="text-gray-400 text-md font-medium max-w-[95%]">
              Create stunning visuals with our AI image generation tool,
              Experience the power of AI
            </p>
          </div>
        </Link>
        <Link href="/ai/removeBackground">
          <div className="p-8 m-4  max-w-auto rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
              <Eraser className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold">
              Background Removal
            </h3>
            <p className="text-gray-400 text-md font-medium max-w-[95%]">
              Effortlessly remove all backgrounds from your images with our
              AI-driven tool.
            </p>
          </div>
        </Link>
        <Link href="/ai/writeStory">
          <div className="p-8 m-4 max-w-auto rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500">
              <Book className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold">Write Story</h3>
            <p className="text-gray-400 text-md font-medium max-w-[95%]">
              Generate creative and engaging stories based on your prompts with
              our AI story writer.
            </p>
          </div>
        </Link>
        <Link href="/ai/writeResearch">
          <div className="p-8 m-4 max-w-auto rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500">
              <NotebookText className="w-7 h-7 text-white" />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold">Write Research</h3>
            <p className="text-gray-400 text-md font-medium max-w-[95%]">
              Analyze and summarize research documents with our AI-powered tool
              for efficient insights.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Powerful;
