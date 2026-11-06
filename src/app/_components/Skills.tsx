import React from "react";
import cv from "@/data/cv.json";

// Reads the "Technical Skills" lines from cv.json, written as
// "Category: item, item, item", so the CV and the home page never disagree.
type Group = { label: string; items: string[] };

function technicalSkills(): Group[] {
  const lines =
    cv.sections
      .flatMap((s) => s.subsections)
      .find((sub) => sub.title === "Technical Skills")?.content ?? [];

  return lines
    .map((line) => {
      const i = line.indexOf(":");
      if (i === -1) return null;
      return {
        label: line.slice(0, i).trim(),
        items: line
          .slice(i + 1)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };
    })
    .filter((g): g is Group => g !== null && g.items.length > 0);
}

const Skills: React.FC = () => {
  const groups = technicalSkills();
  if (groups.length === 0) return null;

  return (
    <section
      aria-labelledby="skills"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <h2
          id="skills"
          className="text-3xl font-bold tracking-tight text-off-black sm:text-4xl"
        >
          Skills
        </h2>

        <dl className="divide-y divide-light-grey border-y border-light-grey">
          {groups.map((group) => (
            <div
              key={group.label}
              className="grid gap-x-8 gap-y-1 py-4 md:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <dt className="text-sm font-medium text-off-black">
                {group.label}
              </dt>
              <dd className="leading-relaxed text-dark-grey">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
