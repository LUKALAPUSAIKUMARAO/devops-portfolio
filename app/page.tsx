"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Hi, I'm Sai 👋
        </motion.h1>

        <p className="mt-4 text-gray-400 text-lg">
          DevOps Engineer | AWS | Kubernetes | CI/CD
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          I build scalable infrastructure, automate deployments,
          and work with cloud-native technologies like Kubernetes,
          Docker, and CI/CD pipelines.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-10">
        <h2 className="text-3xl font-bold text-center">Projects</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="p-6 border border-gray-700 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">EKS Deployment</h3>
            <p className="text-gray-400 mt-2">
              Deployed microservices using Kubernetes + Helm + ArgoCD
            </p>
          </div>

          <div className="p-6 border border-gray-700 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">CI/CD Pipeline</h3>
            <p className="text-gray-400 mt-2">
              Automated build and deployment using GitHub Actions
            </p>
          </div>

          <div className="p-6 border border-gray-700 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Dockerized App</h3>
            <p className="text-gray-400 mt-2">
              Containerized full-stack application for scalability
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-gray-400 mt-4">
          saikumar@example.com
        </p>
      </section>

    </main>
  );
}
