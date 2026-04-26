"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">

            {/* IMAGE */}
            <img
              src="/profile.jpg"
              alt="Sai Kumar"
              className="w-64 h-64 rounded-full object-cover border border-gray-700 relative z-10"
            />

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full blur-2xl bg-red-500/10"></div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold">
            ENGINEERING <span className="text-red-500">IMPACT.</span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-400 mt-4">
            Beyond the code: Strategic leadership, architectural foresight, and measurable business value.
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mt-6 leading-relaxed">
            I am <span className="font-semibold">Sai Kumar</span>. Building scalable cloud infrastructure and DevOps systems.
            Expert in AWS, Kubernetes, CI/CD pipelines, and automation. Focused on building production-ready, secure, and highly available systems.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mt-6">

            <span className="px-4 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg">
              📍 Hyderabad, India
            </span>

            <span className="px-4 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg">
              ⚙️ AWS · Kubernetes · CI/CD
            </span>

            <span className="px-4 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg">
              🚀 DevOps · Cloud · Automation
            </span>

          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex items-center gap-4 flex-wrap">

            {/* PRIMARY BUTTON */}
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-medium transition"
            >
              Collaborate Now
            </button>

            {/* ICONS */}
            <div className="flex gap-3">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/l-saikumar/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-3 border border-gray-700 rounded-full hover:bg-gray-800 transition"
              >
                <FaLinkedin />
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/LUKALAPUSAIKUMARAO"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-3 border border-gray-700 rounded-full hover:bg-gray-800 transition"
              >
                <FaGithub />
              </a>

              {/* EMAIL */}
              <a
                href="lukalapusaikumar1@gmail.com"
                title="Email"
                className="p-3 border border-gray-700 rounded-full hover:bg-gray-800 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
