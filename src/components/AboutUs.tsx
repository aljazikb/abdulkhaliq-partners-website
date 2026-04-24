import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 px-20 bg-[#ffffffaf] text-gray-800">
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl shadow-lg border-l-4 border-[#004aad] p-8"
            >
                <h1 className="text-4xl mb-6 text-center">
                    {t("about")}
                </h1>

                <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
                    {t("aboutSubtitle")}
                </p>
            </motion.div>
        </section>
    );
}