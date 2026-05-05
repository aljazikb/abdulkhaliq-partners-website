import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "motion/react";

const STRIP_ITEMS = [
  "تصوير",
  "مونتاج",
  "تصميم جرافيك",
  "كتابة محتوى",
  "ادارة وسائل التواصل",

];


export default function Herosection() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const stripContent = [...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS]
    .map((item, i) => (
      <span key={i} className="flex items-center gap-4 font-bold">
        <span className="text-4xl">{item}</span>
        <span className="text-white/50 text-3xl">◆</span>
      </span>
    ));

  return (
    <section className="relative h-screen flex items-start justify-center text-center overflow-hidden pt-24">

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-600 pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6 text-white flex flex-col items-center gap-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-yellow-50">
          {t("heroTitle")}
        </h1>

        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          {t("heroButton")}
        </motion.a>
      </motion.div>

      {/* Diagonal Ticker Strip */}
      <div
        className="absolute bottom-60 left-1/2 t w-[150%] z-20 overflow-hidden"
        style={{
          transform: "translateX(-50%) rotate(7deg)",
        }}
      >
        <div className="bg-white/30 py-9 min-h-[60px] flex items-center">
        </div>
      </div>
   
      <div
        className="absolute  bottom-40 left-1/2 w-[150%] z-20 overflow-hidden"
        style={{
          transform: "translateX(-50%) rotate(-7deg)",
        }}
      >
        <div className="bg-orange-500 py-9 flex whitespace-nowrap items-center">
          <motion.div
            className="flex gap-4 text-yellow-50 font-black text-sm md:text-base tracking-widest uppercase"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {stripContent}
          </motion.div>
        </div>
      </div>


    </section >
  );
}