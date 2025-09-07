import Link from "next/link";
import SideNav from "../Components/layout/SideNav";
import { FaStarOfLife } from "react-icons/fa";

export default function AiLayout({ children }) {
  return (
    <div>
      <nav className="w-full h-14 px-8 flex items-center justify-between border-b border-gray-200 bg-white fixed top-0 left-0 z-50">
        <div className="flex items-center relative">
          <FaStarOfLife className="text-[#5044E5]" size={30} />
          <Link
            href="/"
            className="text-[#5044E5] text-[2rem] ms-[10px] font-bold"
          >
            Quick.ai
          </Link>
        </div>

        {/* زرار فتح/غلق القائمة - يظهر بس على الشاشات الصغيرة */}
      </nav>
      <div className="flex pt-14">
        <aside className=" border-r border-gray-200">
          <SideNav />
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-[92vh] xl:h-[92.8vh] ">
          <main className="flex-1  bg-[#F4F7FB]">{children}</main>
        </div>
      </div>
    </div>
  );
}
