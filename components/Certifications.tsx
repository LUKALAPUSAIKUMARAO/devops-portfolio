"use client";

import { motion } from "framer-motion";
import { FaAws, FaGoogle, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    icon: <FaAws className="text-[#FF9900] group-hover:text-white transition duration-500" size={50} />,
    verifyUrl: "https://www.credly.com/badges/7a6d25f8-9bcb-49ce-8968-4019aa88ec4a/linked_in_profile",
    accent: "from-[#FF9900]/20 to-transparent",
    glow: "rgba(255, 153, 0, 0.3)"
  },
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    icon: <FaGoogle className="text-[#4285F4] group-hover:text-white transition duration-500" size={40} />,
    verifyUrl: "https://www.credly.com/badges/04ace113-060d-4579-8e60-7d140e2f2e2d/linked_in_profile",
    accent: "from-[#4285F4]/20 to-transparent",
    glow: "rgba(66, 133, 244, 0.3)"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mb-20 text-center"
      >
        <h2 className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-3">
          Verified Credentials
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">
          Certifications
        </h3>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {certifications.map((cert, i) => (
          <motion.a
            href={cert.verifyUrl}
            target="_blank"
            rel="noreferrer"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            className="group relative w-full md:w-[400px] rounded-3xl block overflow-hidden bg-black border border-gray-800 hover:border-gray-600 transition-all duration-500"
          >
            {/* Animated Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${cert.accent} opacity-0 group-hover:opacity-100 transition duration-700`}></div>
            
            {/* Top scanning line effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500/0 group-hover:bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.8)] opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-[200px] transition-all duration-[1.5s] ease-in-out pointer-events-none"></div>

            <div className="relative p-8 h-full flex flex-col items-center text-center z-10">
              {/* Icon Container with Glow */}
              <div 
                className="w-24 h-24 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl"
                style={{
                  boxShadow: `0 0 30px ${cert.glow}`,
                }}
              >
                {cert.icon}
              </div>

              <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-red-100 transition duration-500">
                {cert.title}
              </h4>
              <p className="text-gray-400 font-medium mb-6 uppercase tracking-wider text-sm">
                {cert.issuer}
              </p>

              <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-red-500 group-hover:text-red-400 transition">
                View on Credly <FaExternalLinkAlt size={12} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
