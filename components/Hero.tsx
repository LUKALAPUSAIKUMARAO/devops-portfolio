"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">

      {/* Premium Background Grid */}
      <div className="absolute inset-0 bg-dot-white/[0.05] flex items-center justify-center">
        {/* Radial gradient for the fade effect */}
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* 🔴 BACKGROUND FADED TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[10vw] font-bold text-white/[0.02] text-center leading-none tracking-tighter">
          BUILD. SCALE. DEPLOY.
        </h1>
      </div>

      {/* 🟢 MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-gray-300 text-xs font-medium tracking-wide mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          SAI KUMAR • SENIOR CLOUD ENGINEER
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6"
        >
          DEVOPS <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">ENGINEER.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Architecting resilient, highly-available cloud infrastructure. 
          Expert in Kubernetes, CI/CD automation, and AWS cloud-native patterns.
        </motion.p>

        {/* 🔘 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 bg-red-600 text-white rounded-lg font-medium transition-all hover:bg-red-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Architecture
            </span>
          </button>

          <button 
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-transparent border border-gray-700 text-gray-300 rounded-lg font-medium transition-all hover:border-gray-400 hover:text-white backdrop-blur-sm"
          >
            About Me
          </button>

        </motion.div>

      </div>

    </section>
  );
}
