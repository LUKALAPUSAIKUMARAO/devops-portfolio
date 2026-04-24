"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* gradient glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-20 right-0"
        animate={{ x: [0, -200, 0], y: [0, -100, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

    </div>
  );
}
