"use client";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {

  // ================= STATE =================
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  // ================= HANDLE INPUT =================
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SEND EMAIL =================
  const sendEmail = (e: any) => {
    e.preventDefault();

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
        alert("Message sent successfully 🚀");

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
        alert("Failed to send message ❌");
      });
  };

  // ================= UI =================
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">

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
          <div className="flex items-center gap-4 p-5 border border-gray-800 rounded-xl mb-4 bg-gray-900/40">
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
          <div className="flex items-center gap-4 p-5 border border-gray-800 rounded-xl bg-gray-900/40">
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
        <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/40">

          <form onSubmit={sendEmail} className="space-y-5">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="your@email.com"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            />

            <input
              name="reason"
              value={form.reason}
              onChange={handleChange}
              type="text"
              placeholder="Reason"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message..."
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-medium"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
