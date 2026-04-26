"use client";

import { useState } from "react";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Spotlight from "@/components/spotlight";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      <Spotlight />

      <main className="bg-black text-white min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
