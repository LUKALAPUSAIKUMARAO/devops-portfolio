"use client";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          TRANSMISSION <span className="text-red-500">START.</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Ready to build the next generation of cloud infrastructure and DevOps systems? Let’s connect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Digital Footprint
          </h3>

          {/* EMAIL */}
          <div className="flex items-center gap-4 p-5 border border-gray-800 rounded-xl mb-4 bg-gray-900/40 backdrop-blur">
            <FaEnvelope className="text-red-500 text-xl" />
            <div>
              <p className="text-xs text-gray-400">EMAIL ME</p>
              <a
                href="mailto:lukalapusaikumar1@gmail.com"
                className="text-white hover:text-red-500 transition"
              >
                lukalapusaikumar1@gmail.com
              </a>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="flex items-center gap-4 p-5 border border-gray-800 rounded-xl bg-gray-900/40 backdrop-blur">
            <FaLinkedin className="text-red-500 text-xl" />
            <div>
              <p className="text-xs text-gray-400">LINKEDIN</p>
              <a
                href="https://www.linkedin.com/in/l-saikumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition"
              >
                l-saikumar
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/40 backdrop-blur">

          <form className="space-y-5">

            <div>
              <label className="text-sm text-gray-400">NAME</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">EMAIL</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">REASON</label>
              <input
                type="text"
                placeholder="Job Opportunity / Project / Collaboration"
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">MESSAGE</label>
              <textarea
                rows={4}
                placeholder="Briefly describe your idea..."
                className="w-full mt-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-medium transition"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
