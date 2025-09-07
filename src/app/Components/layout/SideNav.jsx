"use client";
import { FaStarOfLife } from "react-icons/fa";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  Book,
  SquarePen,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function SideNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/ai", label: "Dashboard", icon: House },
    { href: "/ai/writeArticle", label: "Write Article", icon: SquarePen },
    { href: "/ai/blogTitles", label: "Blog Titles", icon: Hash },
    { href: "/ai/generateImages", label: "Generate Images", icon: Image },
    { href: "/ai/removeBackground", label: "Remove Background", icon: Eraser },
    { href: "/ai/writeStory", label: "Write Story", icon: Book },
    { href: "/ai/writeResearch", label: "Write Research", icon: FileText },
    { href: "/ai/community", label: "Community", icon: Users },
  ];

  return (
    <>
      {/* النافبار فوق */}

      <button
        className="sm:hidden p-2 fixed top-2 right-5 z-999"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* السايدبار */}
      <div
        className={`w-64 bg-white border-r border-gray-200 flex flex-col justify-between items-center mt-[9%] md:mt-[0] md:h-[92vh] xl:h-[92.7vh] fixed sm:static top-0 bottom-0 z-10 transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* محتوى فوق */}
        <div className="my-7 w-full flex-1">
          {/* Links */}
          <div className="px-6 mt-6 text-sm text-gray-600 font-medium flex flex-col gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2.5 flex items-center gap-3 rounded transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
