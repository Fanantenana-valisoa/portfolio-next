"use client";
import React from "react";

const skills = [
  {
    title: "Frontend",
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    color: "text-green-400",
    border: "border-green-500/30",
    items: [
      "Node.js",
      "PHP",
      "Java (basic)",
      "REST API",
      "Form Validation",
      "Email Services",
    ],
  },
  {
    title: "Mobile",
    color: "text-purple-400",
    border: "border-purple-500/30",
    items: [
      "React Native",
      "Expo",
      "Expo Router",
      "Android (basic)",
    ],
  },
  {
    title: "Tools & Systems",
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    items: [
      "Git & GitHub",
      "Vercel",
      "Linux (Ubuntu / Kali)",
      "Windows",
      "MySQL",
      "phpMyAdmin",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-[#0d0d0d]">
      <h2 className="text-center text-4xl font-bold text-white mb-14">
        Technical <span className="text-cyan-400">Expertise</span>
      </h2>

      <div className="container mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${skill.border} bg-[#121212]/80 p-6
              backdrop-blur-md shadow-lg hover:shadow-cyan-500/20
              transition duration-300`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${skill.color}`}
              >
                {skill.title}
              </h3>

              <ul className="space-y-2 text-gray-300 text-sm">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
