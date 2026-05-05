import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full py-24 px-6 md:px-16 bg-blue-600">
      <div className="w-full max-w-6xl mx-auto p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">

        <h1 className="text-5xl md:text-7xl font-black text-orange-500 md:w-1/2 leading-tight">
          {t("about")}
        </h1>

        <p className="text-xl md:text-3xl leading-relaxed text-white/90 md:w-1/2 font-medium">
          {t("aboutSubtitle")}
        </p>

      </div>
    </section>
  );
}