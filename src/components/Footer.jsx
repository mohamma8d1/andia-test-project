import { Play, ArrowLeft } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0F0B1A] text-white font-vazir" dir="rtl">
      <div className="relative w-[95%] sm:w-[90%] md:w-[85%] mx-auto mt-8 sm:mt-10 rounded-2xl sm:rounded-[18px] 
                      bg-gradient-to-br from-[#201B2E]/95 to-[#171320]/90 
                      border border-[#2C2640]/70 backdrop-blur-lg
                      shadow-[0_0_25px_rgba(139,92,246,0.25),0_0_80px_rgba(139,92,246,0.15)]
                      flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 
                      px-6 sm:px-10 md:px-16 py-6 sm:py-8 transition-all duration-500
                      hover:shadow-[0_0_40px_rgba(139,92,246,0.35),0_0_100px_rgba(139,92,246,0.2)]">

        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white tracking-tight text-center md:text-right">
          همین الان شروع کن!
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
          <button className="relative bg-[#8B5CF6] hover:bg-[#7C3AED] 
                             text-white px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center gap-2 
                             transition-all duration-300 shadow-lg 
                             hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] cursor-pointer w-full sm:w-auto text-sm sm:text-base">
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
            تماشای اولین اپیزود رایگان
          </button>

          <button className="relative bg-[#2E2A39] hover:bg-[#3A3548] 
                             text-white px-4 sm:px-6 py-2 rounded-lg transition-all duration-300 
                             shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer w-full sm:w-auto text-sm sm:text-base">
            نصب اپلیکیشن
          </button>
        </div>

        <div className="absolute inset-0 rounded-2xl sm:rounded-[18px] blur-3xl opacity-20 
                        bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-transparent -z-10"></div>
      </div>

      <div className="px-6 sm:px-10 md:px-20 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 border-t border-[#262233] mt-10 sm:mt-12 text-right">
        
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <img
              src={logo}
              alt="PureFlix"
              className="w-10 h-9 sm:w-[46px] sm:h-[41px] object-contain"
            />
          </div>
          <p className="text-white text-sm sm:text-base leading-relaxed mb-3">
            شرکت ما با ارائه محصولات با کیفیت و نوآورانه، به دنبال ایجاد تجربه‌ای بی‌نظیر برای مشتریان است.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mb-2">۵۷ هئول ایساف، استیشن رود، گاردین، انگلستان</p>
          <p className="text-xs sm:text-sm text-gray-400 mb-4">ایمیل: info@example.com</p>
          
          <div className="flex justify-start gap-4 mt-2">
            <a href="#" className="hover:text-[#8B5CF6] transition text-lg sm:text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#8B5CF6] transition text-lg sm:text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-[#8B5CF6] transition text-lg sm:text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#8B5CF6] transition text-lg sm:text-xl">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-center gap-2 text-gray-300">
          <h4 className="font-semibold text-sm sm:text-base mb-1 text-white hover:text-[#8B5CF6] transition cursor-pointer">
            پشتیبانی
          </h4>
          <span className="text-xs sm:text-sm text-gray-400 hover:text-[#8B5CF6] cursor-pointer transition">
            تماس با ما
          </span>
          <span className="text-xs sm:text-sm text-gray-400 hover:text-[#8B5CF6] cursor-pointer transition">
            سؤالات متداول
          </span>
        </div>

        <div className="flex flex-col items-start sm:items-center gap-2 text-gray-300">
          <h4 className="font-semibold text-sm sm:text-base mb-1 text-white hover:text-[#8B5CF6] transition cursor-pointer">
            قوانین
          </h4>
          <span className="text-xs sm:text-sm text-gray-400 hover:text-[#8B5CF6] cursor-pointer transition">
            حریم خصوصی
          </span>
          <span className="text-xs sm:text-sm text-gray-400 hover:text-[#8B5CF6] cursor-pointer transition">
            شرایط استفاده
          </span>
        </div>

        <div className="text-right">
          <h4 className="font-semibold text-sm sm:text-base mb-2 text-white">عضویت در خبرنامه</h4>
          <p className="text-xs sm:text-sm text-gray-400 mb-4">
            از آخرین رویداده‌ها، وبینارها و تازه‌های هیجان‌انگیز باخبر شوید.
          </p>
          <div className="flex items-center bg-[#1A1625] rounded-full overflow-hidden border border-[#8B5CF6]/50">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="bg-transparent flex-1 text-right px-4 py-2 text-xs sm:text-sm text-white outline-none placeholder:text-gray-500"
            />
            <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] px-3 sm:px-4 py-2 rounded-full transition cursor-pointer">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}