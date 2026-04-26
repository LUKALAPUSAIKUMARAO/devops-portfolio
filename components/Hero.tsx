"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black text-white">

      {/* 🔴 BACKGROUND FADED TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[80px] md:text-[180px] font-bold text-white/5 text-center leading-none blur-[1px]">
          BUILD SCALE DEPLOY
        </h1>
      </div>

      {/* 🟢 MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <p className="text-red-500 mb-4 tracking-widest text-sm">
          FEATURED PROJECT
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          DEVOPS <span className="text-red-500">ENGINEER.</span>
        </motion.h1>

        <p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto">
          Building scalable cloud infrastructure using AWS, Kubernetes, CI/CD pipelines and automation.
        </p>

        {/* 🔘 BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            Visit Projects
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-xl backdrop-blur hover:border-white transition">
            More Info
          </button>

        </div>

      </div>

    </section>
  );
}
