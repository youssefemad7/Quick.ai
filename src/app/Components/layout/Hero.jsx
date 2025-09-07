import Link from "next/link";
import Trustedbrands from "../ui/Trustedbrands";
import Image from "next/image";

function HeroSection() {
  return (
    <div>
      <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center pt-20 min-h-screen  text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-[6rem] font-semibold mx-auto leading-[1.2]">
          Create amazing content <br></br>with
          <span className="text-[#5044E5]"> AI tools</span>
        </h1>
        <p className="text-[20px] mt-4 mb-5 max-w-xs sm:max-w-lg 2xl:max-w-3xl m-auto max-sm:text-xs text-gray-600">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
          <Link href="/ai" className="w-fit">
            <button className="bg-[#5044E5] text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer">
              Start creating now
            </button>
          </Link>
          <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer ">
            Watch demo
          </button>
        </div>
        <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600 font-medium">
          <Image
            className="h-8"
            alt=""
            src="/user_group-0QXdEEwx.png"
            width={100}
            height={50}
          />
          Trusted by 10k+ people
        </div>
        <Trustedbrands />
      </div>
    </div>
  );
}

export default HeroSection;
