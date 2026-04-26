"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // total intro duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <motion.h1
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[80px] md:text-[120px] lg:text-[140px] font-extrabold text-red-500"
        style={{
          textShadow: "0 0 60px rgba(255,0,0,0.9), 0 0 120px rgba(255,0,0,0.6)",
        }}
      >
        SAI KUMAR
      </motion.h1>
    </motion.div>
  );
}
