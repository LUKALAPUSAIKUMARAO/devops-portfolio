"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100]"
      animate={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(220, 38, 38, 0.1), transparent 80%)`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0 }}
    />
  );
}
