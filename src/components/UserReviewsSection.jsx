export default function UserReviewsSection() {
  const reviews = [
    "!تو مسیر دانشگاه همیشه یک اپیزود می‌بینم – کوتاه و هیجان‌انگیز",
    ".قسمت‌ها کوتاهن ولی قلاب می‌اندازن، نمی‌تونم ادامه ندم",
    ".مثل رمان تصویریه، اما روی موبایل و خیلی سریع",
  ];

  return (
    <div className="bg-[#0F0B1A] px-10 py-16 font-[Vazirmatn] text-white text-right">
      <h2 className="text-4xl font-extrabold mb-10">نظر کاربران</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((text, i) => (
          <div
            key={i}
            className="bg-[#1A1625] text-gray-200 rounded-xl p-6 text-sm leading-relaxed 
                       shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] "
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
