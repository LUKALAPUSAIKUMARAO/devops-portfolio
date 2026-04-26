"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-lg text-red-500">Sai Kumar</h1>

        <div className="flex gap-6 text-sm">

          <a href="#about" className="hover:text-red-500 transition">
            About
          </a>

          <a href="#skills" className="hover:text-red-500 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-red-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-red-500 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}
