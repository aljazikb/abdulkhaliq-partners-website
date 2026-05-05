const WORDS = [
  "نصنع محتوى يبيع",
  "نحوّل الأفكار لنتائج",
  "نبني حضورك الرقمي",
  "نرفع قيمة البراند",
];

export default function Aboutword() {
  const row = [...WORDS, ...WORDS].map((item, i) => (
    <span key={i} className="flex items-center gap-6 whitespace-nowrap">
      <h2 className="text-3xl md:text-5xl text-white/70 font-bold">
        {item}
      </h2>
      <span className="text-white/30 text-3xl">•</span>
    </span>
  ));

  return (
    <div className="bg-blue-600 overflow-hidden py-10 space-y-8">

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