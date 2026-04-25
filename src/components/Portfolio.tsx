import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const categories = ["all", "photos", "videos", "socialMedia", "designs"] as const;
type Category = (typeof categories)[number];

const projects = [
  { id: 1, category: "photos", image: "../assets/MAVNT.png", titleKey: "project1Title" },
  { id: 2, category: "videos", image: "../assets/MAVNT.png", titleKey: "project2Title" },
  { id: 3, category: "socialMedia", image: "../assets/MAVNT.png", titleKey: "project3Title" },
  { id: 4, category: "designs", image: "../assets/MAVNT.png", titleKey: "project4Title" },
  { id: 5, category: "photos", image: "../assets/MAVNT.png", titleKey: "project5Title" },
  { id: 6, category: "videos", image: "../assets/MAVNT.png", titleKey: "project6Title" },
  { id: 7, category: "socialMedia", image: "../assets/MAVNT.png", titleKey: "project7Title" },
  { id: 8, category: "designs", image: "../assets/MAVNT.png", titleKey: "project8Title" },
  { id: 9, category: "photos", image: "../assets/MAVNT.png", titleKey: "project9Title" },
];

export default function Portfolio() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-20 px-6 bg-white min-h-screen">
      {/* Header */}
      <motion.h2
        className="text-3xl font-bold text-center mb-2 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("portfolio")}
      </motion.h2>

      <motion.p
        className="text-center text-gray-500 mb-10 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("portfolioDescription")}
      </motion.p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              active === cat
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl overflow-hidden shadow-md bg-gray-100 cursor-pointer group"
            >
              <div className="relative w-full h-60">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-lg">{t(project.titleKey)}</p>
                </div>
              </div>

              {/* Category badge */}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  {t(project.category)}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}