"use client";

import React from "react";

interface TechStackSectionProps {
  techStacks: { category: string; technologies: string[] }[];
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ techStacks }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-off-black mb-4">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {techStacks.map((stack, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-dark-grey">
              {stack.category}
            </h3>
            <ul className="mt-2 flex flex-wrap">
              {stack.technologies.map((tech, i) => (
                <li
                  key={i}
                  className="bg-white/10 text-off-black text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
