"use client";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-red-500 font-bold text-xl">SAI</h1>

        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-red-600 px-4 py-2 rounded-lg">
          Hire Me
        </button>

      </div>
    </div>
  );
}
