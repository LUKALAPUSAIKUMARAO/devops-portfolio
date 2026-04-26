"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE / VISUAL */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          {/* PROFILE IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square w-72 md:w-80 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
              <Image
                src="/profile.jpg"
                alt="Sai Kumar"
                width={320}
                height={320}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-bold text-lg">Sai Kumar</p>
                <p className="text-red-400 text-sm">Cloud Native Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-3">
            System Reliability & Scale
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-100 leading-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Impact.</span>
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I build scalable, secure, and automated cloud infrastructure. 
            By treating <strong className="text-gray-200 font-semibold">Infrastructure as Code</strong>, I eliminate manual bottlenecks and enable engineering teams to ship faster with confidence.
          </p>

          {/* IMPACT METRICS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="border border-gray-800 bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white mb-1">99.99%</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Uptime Target</p>
            </div>
            <div className="border border-gray-800 bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white mb-1">50+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Pipelines Built</p>
            </div>
            <div className="border border-gray-800 bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm sm:col-span-1 col-span-2">
              <p className="text-2xl font-bold text-white mb-1">IaC</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Automation First</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
            >
              Collaborate
            </button>
            <a
              href="#"
              className="px-6 py-3 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-medium transition flex items-center gap-2"
            >
              <FaDownload /> Resume
            </a>

            <div className="flex gap-2 ml-auto">
              <a href="https://www.linkedin.com/in/l-saikumar/" target="_blank" rel="noreferrer" className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/LUKALAPUSAIKUMARAO" target="_blank" rel="noreferrer" className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition">
                <FaGithub size={20} />
              </a>
              <a href="mailto:lukalapusaikumar1@gmail.com" className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
