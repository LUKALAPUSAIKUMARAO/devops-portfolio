"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer, FaCodeBranch, FaDocker } from "react-icons/fa";

const projects = [
  {
    id: "k8s-migration",
    title: "Global Kubernetes Migration",
    category: "Infrastructure Architecture",
    icon: <FaServer className="text-red-500" size={24} />,
    description: "Migrated a monolithic application handling 50k+ requests/min to a highly-available Kubernetes cluster. Implemented HPA, cluster autoscaler, and multi-AZ deployments for maximum resilience.",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Reduced", value: "35%" },
      { label: "Latency", value: "-40%" }
    ],
    techStack: ["Kubernetes", "AWS EKS", "Terraform", "Helm", "Prometheus"],
    github: "#",
    live: "#"
  },
  {
    id: "gitops-cicd",
    title: "Zero-Downtime GitOps Pipeline",
    category: "CI/CD Automation",
    icon: <FaCodeBranch className="text-red-500" size={24} />,
    description: "Architected an end-to-end GitOps deployment pipeline using GitHub Actions and ArgoCD. Introduced canary releases, automated rollback mechanisms, and integrated security scanning.",
    metrics: [
      { label: "Deploy Time", value: "< 3m" },
      { label: "Fail Rate", value: "0.1%" },
      { label: "Deploys/Day", value: "20+" }
    ],
    techStack: ["GitHub Actions", "ArgoCD", "SonarQube", "Trivy"],
    github: "#",
    live: "#"
  },
  {
    id: "microservices",
    title: "Serverless Event-Driven Architecture",
    category: "Cloud Native",
    icon: <FaDocker className="text-red-500" size={24} />,
    description: "Designed a serverless data ingestion pipeline handling millions of events daily. Utilized AWS Lambda, EventBridge, and DynamoDB to process streaming data with sub-second latency.",
    metrics: [
      { label: "Events/Day", value: "10M+" },
      { label: "Scaling", value: "Auto" },
      { label: "Avg Latency", value: "45ms" }
    ],
    techStack: ["AWS Lambda", "DynamoDB", "EventBridge", "Node.js"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-3">
          Case Studies
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">
          Technical Projects
        </h3>
        <p className="text-gray-400 mt-4 max-w-2xl">
          Deep dives into complex infrastructure problems, my architectural solutions, and the measurable business impact.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative grid lg:grid-cols-12 gap-8 items-center bg-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-8 hover:bg-gray-900/60 transition duration-500 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-red-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Content Side */}
            <div className="lg:col-span-7 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-black rounded-lg border border-gray-800">
                  {project.icon}
                </div>
                <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
                  {project.category}
                </span>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 group-hover:text-white transition">
                {project.title}
              </h4>
              
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, j) => (
                  <span key={j} className="px-3 py-1 bg-black border border-gray-800 text-gray-300 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition">
                  <FaGithub /> Source
                </a>
                <a href={project.live} className="flex items-center gap-2 px-4 py-2 border border-gray-700 text-white font-medium rounded-lg hover:border-gray-500 transition">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>

            {/* Metrics Side */}
            <div className="lg:col-span-5 relative z-10 w-full h-full">
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6 h-full flex flex-col justify-center gap-6">
                <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-3">
                  Business Impact
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  {project.metrics.map((metric, j) => (
                    <div key={j} className="flex flex-col sm:items-center lg:items-start">
                      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {metric.value}
                      </span>
                      <span className="text-sm text-gray-500">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
