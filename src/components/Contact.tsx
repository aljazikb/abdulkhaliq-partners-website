

export default function Contact() {
  return (
    <section
      className="bg-blue-600 min-h-[480px] flex flex-col items-center justify-center py-20 px-8 text-center"
      dir="rtl"
      id="contact"
      style={{ fontFamily: "Tajawal, sans-serif" }}
    >
      <span className="text-[#25D366] text-xs font-black tracking-[3px] uppercase mb-7">
        تواصل معنا
      </span>

      <h2 className="text-white text-6xl font-black leading-tight mb-1">
        مستعدــون  للتعاون
      </h2>
      <h2 className="text-[#25D366] text-6xl font-black leading-tight mb-8 flex items-center gap-4">
          معك 
        <span className="inline-block -rotate-12">↗</span>
      </h2>

      <p className="text-white/40 text-base leading-loose max-w-md mb-14">
        أنا دائماً مستعد لمشاريع جديدة وتعاونات مثمرة.<br />
        سواء كان لديك فكرة أو استفسار — تواصل معي مباشرة.
      </p>

      
      <a
        href="https://wa.me/966571373899"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#25D366] text-white text-lg font-black px-10 py-5 rounded-full hover:opacity-90 hover:-translate-y-1 transition-all"
      >
        تحدث معنا على واتساب
      </a>

      <div className="flex gap-10 mt-16">
        {[
          { label: "رد سريع" },
          { label: "أفكار جريئة" },
          { label: "نتائج حقيقية" },
        ].map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/4 flex items-center justify-center">
              <span className="text-white/40 text-lg">✦</span>
            </div>
            <span className="text-white/30 text-xs">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}