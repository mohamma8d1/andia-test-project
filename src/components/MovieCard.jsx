import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Star } from "lucide-react";

export default function MovieCard({ movie }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div
      className="relative w-[140px] h-[280px] sm:w-[160px] sm:h-[320px] md:w-[180px] md:h-[360px] lg:w-[198.67px] lg:h-[398px] rounded-xl overflow-hidden shadow-md
      cursor-pointer group transition-all duration-300 transform hover:-translate-y-2
      hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] shrink-0"
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
        <span>{movie.rating}</span>
      </div>

      <div
        className="absolute bottom-0 right-0 w-full p-2 sm:p-3 text-right bg-gradient-to-t
        from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 
        translate-y-3 group-hover:translate-y-0 transition-all duration-300"
      >
        <h3 className="text-xs sm:text-sm font-semibold mb-1">{movie.title}</h3>
        <p className="text-[10px] sm:text-xs text-gray-300 mb-2 leading-tight">
          {movie.tag} • {movie.description || "توضیح کوتاه فیلم در چند خط برای معرفی."}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button onClick={() => setLiked(!liked)}>
              {liked ? (
                <FaHeart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 transition-colors" />
              ) : (
                <FaRegHeart className="w-3 h-3 sm:w-4 sm:h-4 hover:text-pink-400" />
              )}
            </button>
            <button onClick={() => setBookmarked(!bookmarked)}>
              {bookmarked ? (
                <BsBookmarkFill className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 transition-colors" />
              ) : (
                <BsBookmark className="w-3 h-3 sm:w-4 sm:h-4 hover:text-purple-400" />
              )}
            </button>
          </div>

          <button
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium text-white
            translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            شروع تماشا
          </button>
        </div>
      </div>
    </div>
  );
}