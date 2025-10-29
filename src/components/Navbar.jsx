import { FiDownload, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FaRegBookmark } from 'react-icons/fa';
import { VscHistory } from 'react-icons/vsc';
import { useState } from 'react';
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 right-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 lg:px-16 py-3 text-white font-vazir backdrop-blur-md bg-gradient-to-r from-[#0B0B13]/95 via-[#0F0F19]/85 to-[#140028]/60"
        dir="rtl"
      >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl cursor-pointer hover:text-[#a688ff] transition z-50"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img
            src={logo}
            alt="PureFlix"
            className="w-8 h-7 sm:w-[46px] sm:h-[41px] object-contain pl-1 sm:pl-2"
          />
          <span className="text-lg sm:text-2xl lg:text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#7f56da] to-[#c46bff] font-bold whitespace-nowrap">
            پورپلفلیکس
          </span>
        </div>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-[41px] text-sm xl:text-[16px]">
          {["خانه", "دسته‌بندی‌ها", "خرید کوین", "فن کلاب", "چالش"].map(
            (item, i) => (
              <li
                key={i}
                className="cursor-pointer transition-colors duration-300 hover:text-[#a688ff] whitespace-nowrap"
              >
                {item}
              </li>
            )
          )}
        </ul>

        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          <div className="flex items-center gap-3 lg:gap-5 text-xl lg:text-[26px] cursor-pointer">
            <FiSearch 
              className="hover:text-[#a688ff] transition" 
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <FaRegBookmark className="hover:text-[#a688ff] transition" />
            <VscHistory className="hover:text-[#a688ff] transition" />
          </div>

          <button className="border border-gray-500 rounded-lg px-3 lg:px-4 py-[6px] text-sm lg:text-[18px] hover:bg-gray-700/30 transition cursor-pointer whitespace-nowrap">
            ورود
          </button>

          <button className="bg-[#8B5CF6] hover:bg-[#b078ff] text-white rounded-lg px-3 lg:px-4 py-[6px] text-sm lg:text-[18px] flex items-center gap-2 transition cursor-pointer whitespace-nowrap">
            دانلود <FiDownload className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <FiSearch 
            className="text-xl cursor-pointer hover:text-[#a688ff] transition" 
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <FaRegBookmark className="text-xl cursor-pointer hover:text-[#a688ff] transition" />
          <VscHistory className="text-xl cursor-pointer hover:text-[#a688ff] transition" />
        </div>
      </nav>

      <div
        className={`fixed top-[60px] right-0 w-full bg-[#0f0823]/98 backdrop-blur-lg border-b border-[#7f56da]/30 z-40 transform transition-all duration-300 ease-in-out ${
          searchOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6" dir="rtl">
          <div className="relative">
            <input
              type="text"
              placeholder="جستجوی درام، بازیگر یا ژانر..."
              className="w-full bg-[#1a1a2e] text-white placeholder-gray-400 rounded-xl px-6 py-4 pr-12 text-lg border border-[#7f56da]/20 focus:border-[#7f56da] focus:outline-none transition-colors"
              autoFocus
            />
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-[#a688ff]" />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
            >
              <FiX className="text-2xl" />
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-400">جستجوهای پرطرفدار:</span>
            {["اکشن", "عاشقانه", "کمدی", "درام کره‌ای"].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#7f56da]/20 hover:bg-[#7f56da]/40 rounded-full text-sm cursor-pointer transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {searchOpen && (
        <div
          className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-30"
          onClick={() => setSearchOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0f0823] border-l border-[#7f56da]/30 shadow-2xl md:hidden z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 pt-20 space-y-6">
          <ul className="flex flex-col gap-4 text-lg border-b border-gray-700 pb-6">
            {["خانه", "دسته‌بندی‌ها", "خرید کوین", "فن کلاب", "چالش"].map(
              (item, i) => (
                <li
                  key={i}
                  className="cursor-pointer transition-colors duration-300 hover:text-[#a688ff] text-right py-2 hover:pr-2 hover:bg-[#7f56da]/10 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </li>
              )
            )}
          </ul>

          <div className="flex flex-col gap-3">
            <button className="border border-gray-500 rounded-lg px-4 py-3 text-base hover:bg-gray-700/30 transition cursor-pointer w-full">
              ورود
            </button>
            <button className="bg-[#8B5CF6] hover:bg-[#b078ff] text-white rounded-lg px-4 py-3 text-base flex items-center justify-center gap-2 transition cursor-pointer w-full">
              دانلود اپلیکیشن <FiDownload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-30"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}