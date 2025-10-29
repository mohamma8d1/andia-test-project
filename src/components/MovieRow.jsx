import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }) {
  return (
    <div className="mb-12 ">
      <div className="flex justify-between items-center mb-4 px-2 flex-row-reverse ">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <button className="text-sm text-purple-400 hover:text-purple-300">مشاهده همه</button>
      </div>

      <div className="flex gap-4 justify-between overflow-x-auto scrollbar-hide px-2 pt-5">
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
}
