"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

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

function Badge({ level }: any) {
  const styles =
    level === "EXPERT"
      ? "bg-red-500/10 text-red-400 border border-red-500/40"
      : level === "ADVANCED"
      ? "bg-white/5 text-gray-300 border border-gray-700"
      : "bg-gray-800/60 text-gray-500 border border-gray-700";

  return (
    <span className={`text-[10px] px-2 py-[2px] rounded-md ${styles}`}>
      {level}
    </span>
  );
}

/* ================= CARD ================= */

function Card({ title, data, list }: any) {
  return (
    <div className="group relative p-[1px] rounded-xl bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 hover:from-red-500 hover:via-purple-500 hover:to-blue-500 transition duration-300 h-full">

      {/* INNER */}
      <div className="relative bg-[#0b0b0b] border border-gray-800 rounded-xl p-4 backdrop-blur group-hover:border-transparent transition duration-300 h-full flex flex-col">

        {/* FIXED GLOW (NO OVERFLOW) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5 rounded-xl"></div>

        <div className="relative z-10 flex flex-col h-full">

          {/* TITLE */}
          <h3 className="text-sm font-semibold mb-3 border-l-2 border-red-500 pl-2 text-gray-200">
            {title}
          </h3>

          {/* CHART */}
          <div className="h-28">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="#222" />
                <PolarAngleAxis
                  tick={{ fontSize: 8, fill: "#9ca3af" }}
                  dataKey="skill"
                />
                <Radar
                  dataKey="value"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.35}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* LIST (ALIGNED BOTTOM) */}
          <div className="mt-4 space-y-2 mt-auto">
            {list.map((item: any, i: number) => (
              <div
                key={i}
                className="flex justify-between items-center text-xs text-gray-300"
              >
                <span>{item.name}</span>
                <Badge level={item.level} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */

export default function Skills() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">

      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        ENGINEERING STACK
      </h2>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">

        <Card
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
