import { useTranslation } from "react-i18next";


export default function Herosection() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-[#ff914d] text-zinc-300 py-20 overflow-hidden">
      <video
        src="/src/assets/hero-video.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0"
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
          Get Started
        </a>
      </div>
    </div>
  );
}