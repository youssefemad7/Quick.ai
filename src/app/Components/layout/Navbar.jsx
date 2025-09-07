import Link from "next/link";
import { FaStarOfLife } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between pt-[1%] fixed z-5 w-full backdrop-blur-3xl py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
        <div className="flex items-center relative ">
          <FaStarOfLife className="text-[#5044E5] " size={30} />
          <h1 className="text-[#5044E5]  text-[2rem] ms-[10px]">Quick.ai</h1>
        </div>
        <div className="relative md:right-[5%] sm:w-[150px]">
          <Link href="/ai">
            <button className="text-[white] text-[1rem] bg-[#5044E5] w-[150px] md:w-[200px] h-[50px] border-none rounded-full ">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
