const WORDS = [
  "تم إنتاج أكثر من 71 محتوى إبداعي",
  "تم تصوير أكثر من 100 مقطع احترافي",
  "تم إدارة أكثر من 10 حسابات بنجاح",
  "أكثر من 50 حملة تسويقية ناجحه",
  "مشاهدات أعلى لعملائنا بنسبة %150"
];

export default function Aboutword() {
  const row = [...WORDS].map((item, i) => (
    <span key={i} className="flex items-center gap-6 whitespace-nowrap">
      <h2 className="text-3xl md:text-5xl text-yellow-50 ">
        {item}
      </h2>
      <h1 className="text-white/30 text-6xl">•</h1>
    </span>
  ));

  return (
    <div className="bg-[#45A7AA] overflow-hidden py-10 space-y-8">

      {/* Row 1 */}
      <div className="marquee" dir="ltr">
        <div className="marquee-track">
          {row}
        </div>
      </div>

      {/* Row 2 reverse */}
      <div className="marquee" dir="ltr">
        <div className="marquee-track reverse">
          {row}
        </div>
      </div>

    </div>
  );
}