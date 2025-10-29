import React from "react";
import heroImage from "../assets/batman-bg.png";
import { FaPlay } from 'react-icons/fa';

export default function Showcase() {
  return (
    <div className="m-0 p-0 w-full min-h-screen font-vazir bg-[#0f0823] overflow-x-hidden">
      <div
        className="w-full min-h-screen h-screen bg-cover bg-center bg-no-repeat relative flex items-end md:items-center justify-center sm:justify-end text-white px-4 sm:px-6 pb-20 md:pb-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0823] via-[#0f0823]/50 to-transparent md:hidden"></div>
        
        <div className="relative z-10 text-right sm:px-[8vw] max-w-4xl w-full">
          <h1 className="mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 sm:mb-4">
            هر قسمت
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#C5A4FF] mb-4 sm:mb-6">
            !کمتر از یک دقیقه
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-[32px] text-white leading-relaxed sm:leading-[1.8] mb-8 sm:mb-8">
            وارد دنیای درام‌های عمودی شوید؛ تماشا رایگان، ادامه با تبلیغ یا کوین
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start sm:justify-end">
            <button className="bg-transparent text-white border border-[#aaa] rounded-[10px] px-5 sm:px-[22px] py-3 sm:py-[10px] cursor-pointer text-base sm:text-xl lg:text-2xl font-vazir hover:bg-white/10 transition-all duration-300 w-full sm:w-auto order-2 sm:order-1">
              نصب اپلیکیشن
            </button>
            <button className="bg-[#9b5cff] text-white border-none rounded-[10px] px-5 sm:px-[22px] py-3 sm:py-[10px] cursor-pointer text-base sm:text-xl lg:text-2xl transition-all duration-300 gap-2 sm:gap-[7px] flex items-center justify-center font-vazir hover:bg-[#b078ff] w-full sm:w-auto order-1 sm:order-2">
              تماشای اولین اپیزود رایگان
              <FaPlay className="text-sm sm:text-base lg:text-[19px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}