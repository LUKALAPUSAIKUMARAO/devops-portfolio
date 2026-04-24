"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Sai Kumar
        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg max-w-xl">
          DevOps Engineer specializing in AWS, Kubernetes, and scalable infrastructure.
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold">About</h2>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          I design and automate cloud infrastructure, implement CI/CD pipelines,
          and build scalable systems using modern DevOps tools.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center">Projects</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-gray-700 rounded-xl backdrop-blur">
            <h3 className="text-xl font-semibold">Kubernetes Deployment</h3>
            <p className="text-gray-400 mt-3">
              Production-grade deployment using Helm, ArgoCD, and EKS.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-gray-700 rounded-xl backdrop-blur">
            <h3 className="text-xl font-semibold">CI/CD Pipeline</h3>
            <p className="text-gray-400 mt-3">
              Automated build and deployment workflows using GitHub Actions.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-gray-700 rounded-xl backdrop-blur">
            <h3 className="text-xl font-semibold">Dockerized App</h3>
            <p className="text-gray-400 mt-3">
              Containerized application for scalability and portability.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-gray-400 mt-4">
          saikumar@example.com
        </p>
      </section>

    </main>
  );
}
