"use client";

import { useState } from "react";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      <main className="bg-black text-white">

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </main>
    </>
  );
}
