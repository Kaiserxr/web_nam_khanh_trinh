"use client";

import React from "react";
import { PageShell } from "@/components/PageShell";
import ProjectHeader from "./_components/ProjectHeader";
import TechStackSection from "./_components/TechStackSection";
import TableOfContents from "./_components/TableOfContents";
import ContentSection from "./_components/ContentSection";

const ProjectPage: React.FC = () => {
  // Template for a detailed project page. To add another, copy this folder
  // (e.g. to /portfolio/my-app) and set "link" in projects.json to match.
  const projectData = {
    title: "Project Name",
    subtitle: "A one-paragraph summary of what this project is and who it is for.",
    videoUrl: "", // e.g. a YouTube embed link; leave "" to show the image instead
    heroImageUrl: "/placeholder.svg",
    websiteLink: "",
    techStacks: [
      {
        category: "Front-End",
        technologies: ["Technology 1", "Technology 2"],
      },
      {
        category: "Back-End",
        technologies: ["Technology 1", "Technology 2"],
      },
    ],
    contentSections: [
      {
        id: "features",
        title: "Features",
        subtitle: "",
        content: ["Feature one.", "Feature two."],
        imageUrl: "",
      },
      {
        id: "overview",
        title: "Overview",
        subtitle: "A high-level view of how it works",
        content: ["Explain the architecture or how the project works."],
        imageUrl: "/placeholder.svg",
      },
    ],
  };

  const sections = projectData.contentSections.map((section) => section.title);

  return (
    <PageShell>
        <ProjectHeader
          title={projectData.title}
          subtitle={projectData.subtitle}
          videoUrl={projectData.videoUrl}
          heroImageUrl={projectData.heroImageUrl}
          websiteLink={projectData.websiteLink}
        />
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row">
          <div className="w-full md:w-3/4">
            <TechStackSection techStacks={projectData.techStacks} />
            {projectData.contentSections.map((section) => (
              <ContentSection
                key={section.id}
                id={section.id}
                title={section.title}
                subtitle={section.subtitle}
                content={section.content}
                imageUrl={section.imageUrl}
              />
            ))}
          </div>
          {sections.length > 0 && (
            <aside className="w-full md:w-1/4 md:pl-8 mt-8 md:mt-0">
              <TableOfContents sections={sections} />
            </aside>
          )}
        </div>
    </PageShell>
  );
};

export default ProjectPage;
