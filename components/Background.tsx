"use client";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-3xl opacity-20 top-20 left-20"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-3xl opacity-20 bottom-20 right-20"></div>

    </div>
  );
}
