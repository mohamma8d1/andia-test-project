import { Clapperboard, ExternalLink } from "lucide-react";

export default function GenreSelectSection() {
  const genres = [
    {
      title: "اکشن و ماجراجویی",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "راز و معما",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "عاشقانه",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="bg-[#0F0B1A] px-10 py-14 font-[Vazirmatn] text-white text-right">
      <h2 className="text-4xl font-bold mb-8">قصه ات را انتخاب کن</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {genres.map((genre, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-6 2-[423px] h-[304px] flex flex-col justify-between 
              bg-gradient-to-tr ${genre.color} cursor-pointer transition-all duration-300 
              hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]`}
          >
            <Clapperboard className="w-12 h-12 opacity-70" />

            <div className="flex justify-between items-center flex-row-reverse">
              <span className="text-sm font-medium">{genre.title}</span>
              <button className="flex items-center gap-1 text-xs text-white bg-black/20 hover:bg-black/30 transition-all px-3 py-1 rounded-md">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
