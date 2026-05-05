import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import IMG_4402 from "../assets/IMG_4402.png";

import IMG_4403 from "../assets/IMG_4403.png";

import IMG_4401 from "../assets/IMG_4401.png";

import IMG_4404 from "../assets/IMG_4404.png";

const VIDEOS = [
  { id: 1, src:"https://www.youtube.com/embed/WeQ_212A8Vw?autoplay=1&mute=1&controls=1&loop=1&playlist=WeQ_212A8Vw", thumb: IMG_4402, label: "تصوير منتج", category: "product" },
  { id: 2, src:"https://www.youtube.com/embed/9LmHohun6OE?autoplay=1&mute=1&controls=1&loop=1&playlist=9LmHohun6OE", thumb: IMG_4403, label: "تصوير عقاري", category: "reel" },
  { id: 3, src: "https://www.youtube.com/embed/joFvOimjsqg?autoplay=1&mute=1&controls=1&loop=1&playlist=joFvOimjsqg", thumb: IMG_4401, label: "محتوى مطعم", category: "food" },
  { id: 4, src: "https://www.youtube.com/embed/FwWtqkIa2jQ?autoplay=1&mute=1&controls=1&loop=1&playlist=FwWtqkIa2jQ", thumb: IMG_4404, label: "تصوير عقاري", category: "real-estate" },
];


// ── Phone mockup card ─────────────────────────────────────────────────────────
function PhoneCard({ video, index, onClick }: { video: typeof VIDEOS[0]; index: number; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center gap-3 cursor-pointer"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Phone frame */}
      <motion.div
        whileHover={{ scale: 1.04, y: -6 }}
        transition={{ duration: 0.3 }}
        className="relative"
        style={{ width: 180, height: 360 }}
      >
        {/* Outer shell */}
        <div
          className="absolute inset-0 rounded-[2.5rem] z-10 pointer-events-none"
          style={{
            background: "linear-gradient(145deg, #2a2a2a, #111)",
            boxShadow: "0 0 0 2px #333, 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        />
        {/* Screen bezel */}
        <div
          className="absolute inset-[6px] rounded-[2rem] overflow-hidden z-20 bg-black"
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-xl z-30" />
          {/* Video */}
          <video
            ref={videoRef}
            src={video.src}
            poster={video.thumb}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Play hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="w-10 h-10 rounded-full bg-orange-500/80 flex items-center justify-center">
              <span className="text-white text-sm ml-0.5">▶</span>
            </div>
          </div>
          {/* Label on screen */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <span className="text-white text-xs font-bold bg-orange-500/90 px-3 py-1 rounded-full">
              {video.label}
            </span>
          </div>
        </div>
        {/* Side buttons */}
        <div className="absolute -right-[3px] top-16 w-[3px] h-8 bg-[#333] rounded-r-sm" />
        <div className="absolute -left-[3px] top-12 w-[3px] h-6 bg-[#333] rounded-l-sm" />
        <div className="absolute -left-[3px] top-20 w-[3px] h-10 bg-[#333] rounded-l-sm" />
      </motion.div>
    </motion.div>
  );
}

// ── Lightbox fullscreen player ────────────────────────────────────────────────
function Lightbox({ video, onClose }: { video: typeof VIDEOS[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative flex flex-col items-center gap-4"
          onClick={(e) => e.stopPropagation()}
          style={{ width: "min(360px, 90vw)" }}
        >
          {/* Phone mockup fullscreen */}
          <div
            className="relative w-full rounded-[3rem] overflow-hidden"
            style={{
              aspectRatio: "9/16",
              background: "#000",
              boxShadow: "0 0 0 3px #333, 0 40px 80px rgba(0,0,0,0.8)",
            }}
          >
            <iframe
              src={video.src}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            //className="w-full h-full object-cover"
            />
          </div>
          {/* Label */}
          <span className="text-white font-bold text-lg">{video.label}</span>
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-lg hover:bg-orange-400 transition"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Portfolio() {
  const { t } = useTranslation();
  const [active, setActive] = useState<typeof VIDEOS[0] | null>(null);

  return (
    <section
      id="portfolio"
      className="py-24 px-6 md:px-16 min-h-screen bg-blue-600 overflow-hidden"
    >

      {/* Header */}
      <motion.div

        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 rounded-full bg-orange-500 opacity-40" />
          <h2 className="text-4xl md:text-5xl font-black text-orange-500 whitespace-nowrap">
            {t("portfolio") ?? "أعمالنا"}
          </h2>
          <div className="h-px flex-1 rounded-full bg-orange-500 opacity-40" />
        </div>
        <p className="text-center text-white/60 text-base mt-2">
          {t("portfolioSubtitle") ?? "اضغط على أي فيديو لمشاهدته كاملاً"}
        </p>
      </motion.div>

      {/* Phone grid */}
      <div className="max-w-6xl mx-auto">
        {/* Row 1 — phones staggered high/low for visual interest */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {VIDEOS.map((video, i) => (
            <div
              key={video.id}
              style={{ marginTop: i % 2 === 1 ? 40 : 0 }}
            >
              <PhoneCard
                video={video}
                index={i}
                onClick={() => setActive(video)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && <Lightbox video={active} onClose={() => setActive(null)} />}
    </section>
  );
}