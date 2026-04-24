"use client";

import { motion } from "framer-motion";
import Background from "@/components/background";

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">

      <Background />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Sai Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 text-lg max-w-xl"
        >
          DevOps Engineer building scalable systems with AWS, Kubernetes & CI/CD
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center">Projects</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {["Kubernetes", "CI/CD", "Docker"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-6 border border-gray-700 rounded-xl backdrop-blur bg-white/5"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-gray-400 mt-3">
                Production-ready implementation with modern DevOps tools.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-gray-400 mt-4">saikumar@example.com</p>
      </section>

    </main>
  );
}
