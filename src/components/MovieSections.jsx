import { useState } from "react";
import MovieRow from "./MovieRow";
import grootImg from "../assets/Grot.png";
import hesperosImg from "../assets/Hesperos.png";
import johnwickImg from "../assets/johnwick.png";
import archerImg from "../assets/Archer.png";
import smicodys from "../assets/smicodys.png";
import jackryan from "../assets/jackryan.png";
import moesofcosm from "../assets/moesofcosm.png";
import spiderman from "../assets/spiderman.png";

export default function MovieSections() {
  const movies = [
    { title: "I Am Groot", rating: 7.8, tag: "انیمیشن", image: grootImg },
    { title: "Hesperos", rating: 8.2, tag: "علمی‌تخیلی", image: hesperosImg },
    { title: "John Wick", rating: 9.0, tag: "اکشن", image: johnwickImg },
    { title: "Smicodys", rating: 8.5, tag: "درام", image: smicodys },
    { title: "Archer", rating: 8.5, tag: "ماجراجویی", image: archerImg },
    { title: "Jack Ryan", rating: 8.5, tag: "هیجان‌انگیز", image: jackryan },
    { title: "Moes of Cosm", rating: 8.5, tag: "فانتزی", image: moesofcosm },
    { title: "Spiderman", rating: 8.5, tag: "اکشن", image: spiderman },
  ];

  const genres = ["جدیدترین‌ها", "پربازدید", "معمایی", "جنایی", "انیمیشن", "اکشن", "درام", "فانتزی"];
  const [visibleSections, setVisibleSections] = useState(4);

  const showMore = () => {
    if (visibleSections < genres.length) {
      setVisibleSections(visibleSections + 1);
    }
  };

  return (
    <div className="bg-[#0F0B1A] min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 font-vazir text-white transition-all duration-500">

      {genres.slice(0, visibleSections).map((genre, index) => (
        <MovieRow key={index} title={genre} movies={movies} />
      ))}

      {visibleSections < genres.length && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={showMore}
            className="bg-[#8B5CF6] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#7C3AED] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            بیشتر
          </button>
        </div>
      )}
    </div>
  );
}