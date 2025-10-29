import { useState, useRef } from "react";
import grootImg from "../assets/Grot.png";
import johnwickImg from "../assets/johnwick.png";
import archerImg from "../assets/Archer.png";
import hesperosImg from "../assets/Hesperos.png";

import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import {
  Play,
  Pause,
  MoreVertical,
  Star,
} from "lucide-react";

export default function MovieSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // Movies data
  const movies = [
    { title: "I Am Groot", rating: 7.8, tag: "انیمیشن", image: grootImg, views: "۲۰۴K" },
    { title: "Hesperos", rating: 8.2, tag: "علمی‌تخیلی", image: hesperosImg, views: "۱۵۱K" },
    { title: "John Wick", rating: 9.0, tag: "اکشن", image: johnwickImg, views: "۳۰۸K" },
    { title: "Archer", rating: 8.5, tag: "ماجراجویی", image: archerImg, views: "۹۷۰" },
  ];

  // state arrays for cards
  const [likedArr, setLikedArr] = useState(() => movies.map(() => false));
  const [bookmarkedArr, setBookmarkedArr] = useState(() => movies.map(() => false));
  const [expandedArr, setExpandedArr] = useState(() => movies.map(() => false));

  // Player states
  const [playerLiked, setPlayerLiked] = useState(false);
  const [playerBookmarked, setPlayerBookmarked] = useState(false);
  const [playerShowFullText, setPlayerShowFullText] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleLikeCard = (idx) => {
    setLikedArr((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const toggleBookmarkCard = (idx) => {
    setBookmarkedArr((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const toggleExpandCard = (idx) => {
    setExpandedArr((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 px-4 sm:px-8 lg:px-16 py-6 gap-6 text-white font-vazir" dir="ltr">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {movies.map((movie, i) => (
          <div
            key={i}
            className="relative w-full max-w-[332px] mx-auto h-[450px] sm:h-[536px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute top-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{movie.rating}</span>
            </div>

            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{movie.views}</span>
            </div>

            <div className="absolute bottom-0 right-0 w-full p-4 text-right bg-gradient-to-t from-black/90 via-black/50 to-transparent
                            opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-base sm:text-lg font-semibold mb-1">{movie.title}</h3>

              <p className={`text-xs sm:text-sm text-gray-300 mb-3 transition-all duration-300 overflow-hidden ${expandedArr[i] ? "max-h-[200px]" : "max-h-[38px]"}`}>
                {expandedArr[i]
                  ? `${movie.tag} • توضیحات مفصل‌تر درباره فیلم. این متن وقتی باز شد کامل نمایش داده می‌شود و می‌توان اطلاعات بیشتری قرار داد.`
                  : `${movie.tag} • توضیح کوتاه فیلم...`}
                <span
                  onClick={() => toggleExpandCard(i)}
                  className="text-[#8B5CF6] cursor-pointer pr-2"
                >
                  {expandedArr[i] ? "کمتر" : "بیشتر"}
                </span>
              </p>

              <div className="flex justify-end items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2">
                  <button onClick={() => toggleLikeCard(i)} aria-label="like">
                    {likedArr[i] ? (
                      <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 transition-colors" />
                    ) : (
                      <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5 hover:text-pink-400 cursor-pointer" />
                    )}
                  </button>
                  <button onClick={() => toggleBookmarkCard(i)} aria-label="bookmark">
                    {bookmarkedArr[i] ? (
                      <BsBookmarkFill className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 transition-colors" />
                    ) : (
                      <BsBookmark className="w-4 h-4 sm:w-5 sm:h-5 hover:text-purple-400 cursor-pointer" />
                    )}
                  </button>
                </div>

                <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium text-white transition-colors">
                  شروع تماشا
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-[530px] h-auto sm:h-[500px] lg:h-auto xl:h-auto mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black">

        <div className="absolute inset-0 bg-[url('https://i.ibb.co/nbD3XWW/bokeh.jpg')] bg-cover bg-center blur-xl opacity-70"></div>

        <video
          ref={videoRef}
          className="w-full h-full object-cover relative z-10"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          loop
        />  

        <div className="absolute inset-0 z-20 flex flex-col justify-between">

          <div className="flex justify-between items-start p-3 sm:p-4">
            <button className="bg-black/40 hover:bg-black/60 p-1.5 sm:p-2 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="bg-gray-300/70 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">رایگان</span>
          </div>

          <div className="flex justify-center items-center">
            <button onClick={togglePlay} className="bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-full hover:bg-black/60 transition">
              {playing ? <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> : <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />}
            </button>
          </div>

          <div className="relative bg-gradient-to-t from-black via-black/60 to-transparent p-4 sm:p-5">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex flex-col items-center gap-3 sm:gap-4 text-white mt-2">
                <button onClick={() => setPlayerBookmarked(!playerBookmarked)} aria-label="bookmark">
                  {playerBookmarked ? (
                    <BsBookmarkFill className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 transition-colors" />
                  ) : (
                    <BsBookmark className="w-5 h-5 sm:w-6 sm:h-6 hover:text-purple-400 cursor-pointer" />
                  )}
                </button>

                <button onClick={() => setPlayerLiked(!playerLiked)} aria-label="like">
                  {playerLiked ? (
                    <FaHeart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 transition-colors" />
                  ) : (
                    <FaRegHeart className="w-5 h-5 sm:w-6 sm:h-6 hover:text-pink-400 cursor-pointer" />
                  )}
                </button>

                <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6 hover:text-gray-300 cursor-pointer" />
              </div>

              <div className="flex-1 text-right">
                <h2 className="text-base sm:text-lg font-bold mb-1">امید گمشده</h2>

                <div className="flex items-center justify-end text-xs text-gray-300 mb-2 gap-2">
                  <span className="bg-gray-700/40 px-2 py-1 rounded-md text-[10px] sm:text-xs">عاشقانه</span>
                  <span className="text-gray-400 text-[10px] sm:text-xs">جیکوب برند</span>
                  <img src="https://i.pravatar.cc/24" alt="avatar" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover" />
                </div>

                <p className={`text-xs sm:text-sm text-gray-300 leading-snug transition-[max-height] duration-300 overflow-hidden ${playerShowFullText ? "max-h-[200px]" : "max-h-[42px]"}`}>
                  {playerShowFullText
                    ? "این فیلم به گونه‌ای طراحی شده است که همه چیز را دگرگون می‌کند و تحولی شگرف و عمیق در دنیای احساسات انسان پدید می‌آورد. کارگردان با نگاهی ظریف و شاعرانه به مفاهیم عشق و امید پرداخته است."
                    : "این فیلم به گونه‌ای طراحی شده است که همه چیز را دگرگون می‌کند و تحولی شگرف و عمیق..."}
                  <span onClick={() => setPlayerShowFullText(!playerShowFullText)} className="text-[#8B5CF6] cursor-pointer pr-2">
                    {playerShowFullText ? "کمتر" : "بیشتر"}
                  </span>
                </p>

                <div className="flex justify-end items-center mt-3 sm:mt-4 text-gray-300 text-xs sm:text-sm text-right gap-2">
                  <span>قسمت ۱ / ۵۹</span>
                  <RiStackFill className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}