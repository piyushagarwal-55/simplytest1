import { motion } from "framer-motion";
import { SparklesCore } from "./ui/Sparkles";

export default function HeroFlash() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B0B0B] text-white flex flex-col items-center justify-center px-8 py-32 font-sans overflow-hidden">
      
     
      <SparklesCore
        background="#0B0B0B"
        particleColor="#FFD700"
        particleDensity={80}
        minSize={0.5}
        maxSize={1.2}
        className="absolute inset-0 z-0"
      />

      
     <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="z-10 text-lg md:text-xl text-gray-400 flex gap-12 mb-12 uppercase tracking-wide"
>
  <div className="flex items-center gap-3">
    <span className="h-3 w-3 rounded-full bg-green-500 inline-block" />
    Projects Shipping Weekly
  </div>
  <div className="flex items-center gap-3">
    <span className="text-yellow-400">★</span>
    100% Builder Retention Rate
  </div>
</motion.div>

<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.1 }}
  className="z-10 text-center text-7xl sm:text-8xl md:text-9xl font-bold leading-tight bg-gradient-to-br from-[#F5F5F5] via-[#D4AF37] to-[#A9A9A9] bg-clip-text text-transparent drop-shadow-xl animate-gradient"
>
  Stop Selling
  <br className="md:hidden" />
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 1 }}
    className="block text-transparent bg-clip-text bg-gradient-to-br from-[#FFD700] via-[#C0C0C0] to-[#D4AF37]"
  >
    Forgettable Brands
  </motion.span>
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 1 }}
  className="z-10 text-center text-2xl sm:text-3xl text-gray-400 mt-12 max-w-3xl"
>
  You’ve got the <span className="text-[#FFD700] font-semibold">skills</span>, the{" "}
  <span className="text-[#FFD700] font-semibold">vision</span>, and the{" "}
  <span className="text-red-500 font-semibold">impatience</span> to scale.
</motion.p>

<motion.p
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1, duration: 1 }}
  className="z-10 italic text-xl sm:text-2xl text-center mt-6 text-gray-500"
>
  Let’s build you a <span className="text-green-400 font-semibold">psychological brand</span> that actually converts.
</motion.p>

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2, duration: 0.8 }}
  className="z-10 flex flex-wrap justify-center gap-9 mt-16"
>
  {[
    { label: "🎯 Positioning That Sells", border: "#D4AF37" },
    { label: "📐 Design With Depth", border: "#C0C0C0" },
    { label: "🚀 Launch-Ready Systems", border: "#FFD700" },
  ].map((tag, i) => (
    <span
      key={i}
      className={`px-9 py-4 bg-[#1E1E1E] border border-[${tag.border}] rounded-full text-lg font-medium tracking-wide shadow-md text-[#F5F5F5]`}
    >
      {tag.label}
    </span>
  ))}
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.4, duration: 0.8 }}
  className="z-10 flex flex-col sm:flex-row gap-6 sm:gap-9 mt-16"
>
  <button className="glow-button px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-[#0B0B0B] text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#C0C0C0] shadow-2xl hover:scale-105 transition-transform whitespace-nowrap">
    Explore SimplyBetter
  </button>
  <button className="px-8 sm:px-12 py-4 sm:py-6 rounded-2xl border border-[#555] text-gray-300 text-xl sm:text-2xl hover:bg-[#1A1A1A] transition-all font-semibold whitespace-nowrap">
    View Case Studies
  </button>
</motion.div>

    </div>
  );
}