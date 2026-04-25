import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "motion/react";
import hero from "../assets/hero-video.mp4";

export default function Herosection() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  return (
    <motion.div style={{ filter }} className="relative bg-[#ff914d] text-zinc-300 py-20 overflow-hidden">
      <video
        src={hero}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
       
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0 pointer-events-none"
      ></video>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t("heroTitle")}
        </h1>
        <p className="text-lg md:text-xl mb-8">
          {t("heroSubtitle")}
        </p>
        <a
          href="#"
          className="bg-white text-[#004aad] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
         {t("heroButton")}
        </a>
      </div>
    </motion.div>
  );
}