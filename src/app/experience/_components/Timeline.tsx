import React from "react";
import type { Experience } from "@/data/experience";
import TimelineNode from "./TimelineNode";

const Timeline: React.FC<{ experiences: Experience[] }> = ({ experiences }) => {
  if (experiences.length === 0) {
    return (
      <p className="text-dark-grey">
        Roles will appear here once they are added to{" "}
        <code className="text-off-black">src/data/experience.ts</code>.
      </p>
    );
  }

  return (
    <ol className="relative">
      {experiences.map((experience, index) => (
        <TimelineNode
          key={`${experience.title}-${experience.date}`}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </ol>
  );
};

export default Timeline;
