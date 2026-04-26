"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-[14vw] sm:text-[60px] md:text-[100px] lg:text-[130px] font-extrabold text-red-600 tracking-widest uppercase"
        style={{
          textShadow: "0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.3)",
        }}
      >
        SAIKUMAR
      </motion.h1>
    </motion.div>
  );
}
