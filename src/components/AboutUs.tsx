import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="w-full py-24 px-6 md:px-16 bg-gray-100"
    >
     <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }} className="bg-white w-full max-w-6xl mx-auto rounded-2xl shadow-lg border-l-4 border-[#004aad] p-6 md:p-10" >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          {t("about")}
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-600 text-center">
          {t("aboutSubtitle")}
        </p>
      </motion.div>
    </section>
  );
}