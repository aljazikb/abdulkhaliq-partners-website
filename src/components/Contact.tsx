import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { motion } from "motion/react"

export default function Contact() {
  return (
    <section
      className="bg-[#45A7AA] min-h-[480px] flex flex-col items-center justify-center py-20 px-8 text-center"
      dir="rtl"
      id="contact">

      <h2 className="text-yellow-50 text-6xl leading-tight mb-1">
        جــاهــز تـكســر الــروتـيـن؟
      </h2>


      <a
        href="https://wa.me/966571373899"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block mt-10"
      >

        <h2 className="text-[#25D366] text-6xl leading-tight flex items-center gap-4 relative drop-shadow-lg">
          خلـنـا نـبـدأ
        </h2>


        {/* Sketch circle */}
        <svg
          viewBox="0 0 200 80"
          className="absolute left-1/2 top-1/2 w-[140%] h-[160%] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-130"
        >
          <path
            d="M10,40 Q50,5 120,15 Q180,30 170,55 Q140,75 90,70 Q40,65 10,40"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            className="sketch"
          />
        </svg>
      
      
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bg-green-500 -top-12 -right-5  w-14 h-14 rounded-2xl rotate-12 flex items-center justify-center shadow-xl border-4 border-[#45A7AA]"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-white text-3xl"
        />
      </motion.div>
      </a>


    </section>
  );
}