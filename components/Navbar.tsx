"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#" className="flex items-center gap-2 group z-50">
          <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-lg font-bold text-lg shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] transition duration-300">
            S
          </div>
          <span className="font-bold text-lg text-white tracking-wide">
            Sai <span className="text-gray-400">Kumar</span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-red-400 transition">{link.name}</a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 text-gray-300 hover:text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 overflow-hidden z-40"
          >
            {links.map((link, index) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={link.name} 
                href={link.href} 
                onClick={toggleMenu}
                className="text-2xl font-bold text-gray-300 hover:text-red-400 transition"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
