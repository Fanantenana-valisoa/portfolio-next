import React from "react";

const SkillCard = ({ title, items }) => {
  return (
    <div className="bg-[#121212] border border-green-500/30 rounded-xl p-5
                    hover:shadow-green-500/20 hover:shadow-lg
                    transition duration-300">
      <h3 className="text-green-400 font-semibold text-lg mb-3">
        {title}
      </h3>
      <ul className="space-y-2 text-sm text-[#ADB7BE]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsTabsContent = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <SkillCard
        title="Frontend"
        items={[
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "JavaScript (ES6+)",
          "React.js",
          "Next.js",
          "Framer Motion",
        ]}
      />

      <SkillCard
        title="Backend"
        items={[
          "Node.js",
          "PHP",
          "REST API",
          "MySQL",
          "PostgreSQL",
          "phpMyAdmin",
        ]}
      />

      <SkillCard
        title="Tools & Systems"
        items={[
          "Git & GitHub",
          "Vercel",
          "Linux (Ubuntu / Kali)",
          "Windows",
          "VS Code",
        ]}
      />
    </div>
  );
};

export default SkillsTabsContent;
