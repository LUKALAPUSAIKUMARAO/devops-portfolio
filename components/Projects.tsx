"use client";

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center">
        PROJECTS
      </h2>

      <div className="mt-16 grid md:grid-cols-3 gap-10">

        {[
          { title: "Kubernetes", desc: "Production-grade container orchestration." },
          { title: "CI/CD", desc: "Automated pipelines with GitHub Actions." },
          { title: "Docker", desc: "Containerized scalable applications." },
        ].map((item, i) => (

          <div
            key={i}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 hover:from-red-500 hover:via-purple-500 hover:to-blue-500 transition duration-500"
          >

            {/* INNER CARD */}
            <div className="relative h-full p-6 rounded-2xl bg-black border border-gray-800 group-hover:border-transparent transition duration-500">

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-gray-400 mt-3">
                  {item.desc}
                </p>
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
