import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const servicesMeta = [
  { key: "webDevelopment" },
  { key: "uiUxDesign" },
  { key: "mobileApps" },
];

function ServiceCard({
  service, i, }: {
    service: { title: string; description: string };
    i: number;
  }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover="hover"
      className="group relative flex flex-col gap-6 p-8 rounded-2xl cursor-default overflow-hidden min-h-[380px]"
      style={{
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(249,115,22,0.2)",
      }}
    >

      {/* Divider */}
      <motion.div
        className="h-1 w-14 rounded-full"
        style={{ background: "#f97316" }}
        variants={{ hover: { width: "100%" } }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Text */}
      <div className="flex flex-col gap-4 flex-1">
        <h3 className="text-2xl font-bold text-white leading-snug drop-shadow-lg">
          {service.title}
        </h3>
        <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          {service.description}
        </p>
      </div>

    </motion.div>
  );
}

export default function Services() {
  const { t } = useTranslation();

  const services = servicesMeta.map((s) => ({
    ...s,
    title: t(`${s.key}Title`),
    description: t(`${s.key}Description`),
  }));

  return (
    <section id="services" className="py-24 px-6 md:px-16 min-h-screen bg-[#45A7AA] ">
      {/* Section header */}
      <motion.div
        className="max-w-6xl mx-auto mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-130 rounded-full" style={{ background: "#f97316" }} />
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-[#FF6D12] whitespace-nowrap drop-shadow-lg">
            {t("services")}
          </h2>
          <div className="h-px w-130 rounded-full" style={{ background: "#f97316" }} />
        </div>

      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.key} service={service} i={i} />
        ))}
      </div>
    </section>
  );
}