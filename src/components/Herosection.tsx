import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "motion/react";


const STRIP_ITEMS = [
  "photography",
  "editing",
  "graphicDesign",
  "contentWriting",
  "socialMedia",
];

export default function Herosection() {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const stripContent = [...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS]
    .map((item, i) => (
      <span key={i} className="flex items-center gap-4 font-bold">
        <span className="text-4xl">{t(item)}</span>
        <span className="text-white/50 text-3xl">◆</span>
      </span>
    ));

  return (
    <section className="bg-[#45A7AA] relative h-screen flex items-start justify-center text-center overflow-hidden pt-2">

      {/* Overlay */}
      <motion.div
        style={{ opacity }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-6"

      >
        
        <h1 className="text-yellow-50 text-6xl md:text-7xl font-black leading-tight mb-10">
          <span className="">{t("heroTitle")}</span>
          <br />
          <span className="">{t("heroSubtitle")}</span>

        
      
  <span className="relative inline-block">
    {t("heroButton")}

    <svg
      viewBox="0 0 200 100"
      className="absolute left-0 top-1/2 w-[130%] h-[160%] -translate-x-[10%] -translate-y-1/2  scale-140 pointer-events-none"
    >
      <path
        d="M10,40 Q60,10 140,30 Q190,50 150,75 Q90,95 30,70 Q0,50 10,40"
        fill="none"
        stroke="#f97316"
        strokeWidth="4"
        strokeLinecap="round"
        className="sketch"
      />
    </svg>
  </span>
  </h1>

{/*
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          {t("heroButton")}
        </motion.a>
        */}
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
        <div className="bg-[#FF6D12] py-9 flex whitespace-nowrap items-center">
          <motion.div
            className="flex gap-4 text-yellow-50 font-black text-sm md:text-base tracking-widest uppercase"
            animate={{ x: isRTL ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
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