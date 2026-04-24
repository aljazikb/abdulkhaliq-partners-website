import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const servicesMeta = [
  { key: "webDevelopment", icon: "🌐", color: "border-blue-500", accent: "bg-blue-50" },
  { key: "uiUxDesign",     icon: "🎨", color: "border-violet-500", accent: "bg-violet-50" },
  { key: "mobileApps",     icon: "📱", color: "border-emerald-500", accent: "bg-emerald-50" },
  { key: "cloudSolutions", icon: "☁️", color: "border-sky-500", accent: "bg-sky-50" },
  { key: "seoMarketing",   icon: "📈", color: "border-orange-500", accent: "bg-orange-50" },
  { key: "aiIntegration",  icon: "🤖", color: "border-pink-500", accent: "bg-pink-50" },
];

function ServiceCard({
  service,
  i,
}: {
  service: { title: string; description: string; icon: string; color: string; accent: string };
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`bg-white rounded-2xl shadow-sm border-l-4 ${service.color} p-6 flex items-start gap-5 cursor-default min-h-[300px]`}
    >
      <div className={`text-3xl w-12 h-12 flex items-center justify-center rounded-xl ${service.accent} flex-shrink-0`}>
        {service.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useTranslation();

  // Build the services array here where t() is valid
  const services = servicesMeta.map((s) => ({
    ...s,
    title: t(`${s.key}Title`),
    description: t(`${s.key}Description`),
  }));

  return (
    <section id="services" className="py-20 px-6 bg-gray-100 min-h-screen">
      <motion.h2
        className="text-3xl font-bold text-center mb-2 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("services")}
      </motion.h2>

      <motion.p
        className="text-center text-gray-500 mb-12 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t("servicesDescription")}
      </motion.p>

      <div className="max-w-2xl max-h-6xl mx-auto flex flex-col gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.key} service={service} i={i} />
        ))}
      </div>
    </section>
  );
}