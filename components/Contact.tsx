"use client";

import { FaEnvelope, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {

  // ================= STATE =================
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ================= HANDLE INPUT =================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SEND EMAIL =================
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_ha8pple",     // ✅ your service ID
        "template_f0m8mv8",    // ✅ your template ID
        {
          name: form.name,
          email: form.email,
          reason: form.reason,
          message: form.message,
        },
        "dp1pcbkbO-q-WmKMI"    // ✅ your public key
      )
      .then(() => {
        alert("Transmission successful. I will respond shortly. 🚀");

        // reset form
        setForm({
          name: "",
          email: "",
          reason: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Transmission failed. Please try again. ❌");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // ================= UI =================
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-gray-900 mt-12">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-3">
          Initiate Contact
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">
          Transmission Start
        </h3>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Ready to build the next generation of cloud infrastructure and DevOps systems? Let’s connect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-bold text-white mb-6">
            Digital Footprint
          </h4>

          {/* EMAIL */}
          <a href="mailto:lukalapusaikumar1@gmail.com" className="group block mb-4">
            <div className="flex items-center gap-4 p-5 border border-gray-800 rounded-xl bg-gray-900/40 hover:bg-gray-800/60 hover:border-gray-600 transition duration-300">
              <div className="w-12 h-12 bg-black border border-gray-800 rounded-full flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:text-red-400 transition">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-gray-300 group-hover:text-white transition">
                  lukalapusaikumar1@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/in/l-saikumar/" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="flex items-center gap-4 p-5 border border-gray-800 rounded-xl bg-gray-900/40 hover:bg-gray-800/60 hover:border-gray-600 transition duration-300">
              <div className="w-12 h-12 bg-black border border-gray-800 rounded-full flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:text-red-400 transition">
                <FaLinkedin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-gray-300 group-hover:text-white transition">
                  l-saikumar
                </p>
              </div>
            </div>
          </a>

        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-red-600/20 to-transparent blur-sm"></div>
          
          <div className="relative border border-gray-800 rounded-2xl p-6 md:p-8 bg-gray-900/80 backdrop-blur-md">
            <form onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-black border border-gray-800 text-white rounded-lg focus:outline-none focus:border-red-500 transition placeholder:text-gray-600"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full p-4 bg-black border border-gray-800 text-white rounded-lg focus:outline-none focus:border-red-500 transition placeholder:text-gray-600"
                />
              </div>

              <input
                name="reason"
                value={form.reason}
                onChange={handleChange}
                type="text"
                placeholder="Subject / Reason"
                className="w-full p-4 bg-black border border-gray-800 text-white rounded-lg focus:outline-none focus:border-red-500 transition placeholder:text-gray-600"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="How can we collaborate?"
                required
                className="w-full p-4 bg-black border border-gray-800 text-white rounded-lg focus:outline-none focus:border-red-500 transition placeholder:text-gray-600 resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-lg font-bold tracking-wide transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"} <FaPaperPlane />
              </button>

            </form>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
