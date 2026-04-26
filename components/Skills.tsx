"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const devops = [
  { skill: "AWS", value: 90 },
  { skill: "Docker", value: 85 },
  { skill: "K8s", value: 80 },
  { skill: "Terraform", value: 75 },
  { skill: "GitHub", value: 85 },
  { skill: "Jenkins", value: 70 },
];

const backend = [
  { skill: "Python", value: 85 },
  { skill: "Node", value: 80 },
  { skill: "Shell", value: 75 },
  { skill: "SQL", value: 70 },
];

const cloud = [
  { skill: "EC2", value: 90 },
  { skill: "S3", value: 85 },
  { skill: "IAM", value: 80 },
  { skill: "CW", value: 75 },
];

/* ================= BADGE ================= */

type BadgeProps = { level: string };
function Badge({ level }: BadgeProps) {
  const styles =
    level === "EXPERT"
      ? "bg-red-500/10 text-red-400 border border-red-500/30"
      : level === "ADVANCED"
      ? "bg-gray-800 text-gray-300 border border-gray-700"
      : "bg-transparent text-gray-500 border border-gray-800";

  return (
    <span className={`text-[10px] px-2 py-[2px] rounded-md font-medium tracking-wide ${styles}`}>
      {level}
    </span>
  );
}

/* ================= CARD ================= */

type SkillItem = { name: string; level: string };
type CardProps = { title: string; data: any[]; list: SkillItem[]; delay: number };
function Card({ title, data, list, delay }: CardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-800 to-transparent hover:from-red-500/50 hover:to-transparent transition duration-500 h-full"
    >
      {/* INNER */}
      <div className="relative bg-black/80 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-md h-full flex flex-col z-10">
        
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* TITLE */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-red-600 rounded-full"></div>
            <h3 className="text-lg font-bold text-gray-100 tracking-wide">
              {title}
            </h3>
          </div>

          {/* CHART */}
          <div className="h-32 -ml-2 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="#333" strokeDasharray="3 3" />
                <PolarAngleAxis
                  tick={{ fontSize: 9, fill: "#6b7280" }}
                  dataKey="skill"
                />
                <Radar
                  dataKey="value"
                  stroke="#ef4444"
                  strokeWidth={1.5}
                  fill="#ef4444"
                  fillOpacity={0.15}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* LIST */}
          <div className="mt-auto space-y-3">
            {list.map((item: SkillItem, i: number) => (
              <div
                key={i}
                className="flex justify-between items-center text-sm text-gray-400 group-hover:text-gray-300 transition"
              >
                <span className="font-medium">{item.name}</span>
                <Badge level={item.level} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= MAIN ================= */

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-3">
          Toolchain
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">
          Engineering Stack
        </h3>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Deep technical proficiency across cloud providers, containerization platforms, and infrastructure automation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <Card
          delay={0}
          title="Cloud & DevOps"
          data={devops}
          list={[
            { name: "AWS", level: "ADVANCED" },
            { name: "Docker", level: "EXPERT" },
            { name: "Kubernetes", level: "ADVANCED" },
            { name: "Terraform", level: "PROFICIENT" },
            { name: "GitHub Actions", level: "EXPERT" },
            { name: "Jenkins", level: "ADVANCED" },
          ]}
        />

        <Card
          delay={0.1}
          title="Backend & Scripting"
          data={backend}
          list={[
            { name: "Python", level: "ADVANCED" },
            { name: "Node.js", level: "ADVANCED" },
            { name: "Shell", level: "PROFICIENT" },
            { name: "SQL", level: "ADVANCED" },
          ]}
        />

        <Card
          delay={0.2}
          title="AWS Services"
          data={cloud}
          list={[
            { name: "EC2", level: "ADVANCED" },
            { name: "S3", level: "ADVANCED" },
            { name: "IAM", level: "ADVANCED" },
            { name: "CloudWatch", level: "PROFICIENT" },
          ]}
        />
      </div>

    </section>
  );
}
