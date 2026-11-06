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
                  className="mb-2 mr-2 rounded-full bg-light-grey px-2.5 py-1 text-xs font-medium text-off-black"
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
