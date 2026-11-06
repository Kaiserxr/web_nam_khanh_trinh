"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PageShell, PageHeader, Band } from "@/components/PageShell";
import { focusRing } from "@/components/SocialLinks";
import ImpactfulDeploymentCard from "./_components/FeaturedCard";
import PersonalCreationCard from "./_components/PersonalCard";
import AcademicEndeavorCard from "./_components/AcademicCard";
import { projectsData } from "@/data/projectData";
import { SkillsProvider } from "@/contexts/SkillsContext";
import SkillsExplorer from "./_components/SkillsExplorer";

const linkClass = `group inline-flex items-center gap-2 rounded-sm text-sm font-medium text-off-black ${focusRing}`;
const Arrow = () => (
  <ArrowRightIcon
    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
    aria-hidden="true"
  />
);

const PortfolioPage: React.FC = () => {
  const { impactfulDeployments, personalCreations, academicEndeavors } =
    projectsData;
  const total =
    impactfulDeployments.length +
    personalCreations.length +
    academicEndeavors.length;

  // Shown until projects are added to src/data/projects.json
  if (total === 0) {
    return (
      <PageShell>
        <PageHeader
          title="Portfolio"
          lede="Detailed project write-ups: what I built, how it works, and what I learned."
        />
        <Band label="Projects coming soon" id="portfolio-empty" className="pt-14">
          <p className="max-w-[60ch] text-lg leading-relaxed text-dark-grey">
            I&apos;m working on new projects. Check back soon, or see my CV for
            past work. In the meantime, my research, publication and
            competition projects are summarised on the home page.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/#selected-work" className={linkClass}>
              Selected work
              <Arrow />
            </Link>
            <Link href="/experience" className={linkClass}>
              Experience
              <Arrow />
            </Link>
            <Link href="/cv" className={linkClass}>
              CV &amp; Resume
              <Arrow />
            </Link>
          </div>
        </Band>
      </PageShell>
    );
  }

  const groups = [
    {
      id: "featured-projects",
      title: "Featured Projects",
      lede: "Real-world projects deployed as products with real users.",
      items: impactfulDeployments,
      Card: ImpactfulDeploymentCard,
      grid: "sm:grid-cols-2",
    },
    {
      id: "personal-projects",
      title: "Personal Projects",
      lede: "Projects built for fun, learning, and experimentation.",
      items: personalCreations,
      Card: PersonalCreationCard,
      grid: "sm:grid-cols-2 lg:grid-cols-3",
    },
    {
      id: "academic-projects",
      title: "Academic Projects",
      lede: "Projects from my courses, where I've applied theory to practical problems.",
      items: academicEndeavors,
      Card: AcademicEndeavorCard,
      grid: "sm:grid-cols-2 lg:grid-cols-3",
    },
  ].filter((g) => g.items.length > 0);

  return (
    <SkillsProvider>
      <PageShell>
        <PageHeader
          title="Portfolio"
          lede="Detailed project write-ups: what I built, how it works, and what I learned."
        />

        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-off-black sm:text-3xl">
            Explore projects by skill
          </h2>
          <p className="mt-2 max-w-[60ch] text-dark-grey">
            Select one or more skills to see the projects that use them.
          </p>
          <div className="mt-8">
            <SkillsExplorer />
          </div>
        </div>

        {groups.map(({ id, title, lede, items, Card, grid }) => (
          <section
            key={id}
            aria-labelledby={id}
            className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8"
          >
            <h2
              id={id}
              className="text-2xl font-bold tracking-tight text-off-black sm:text-3xl"
            >
              {title}
            </h2>
            <p className="mt-2 max-w-[60ch] text-dark-grey">{lede}</p>
            <div className={`mt-8 grid grid-cols-1 gap-8 ${grid}`}>
              {items.map((project) => (
                <Card key={project.title} project={project} />
              ))}
            </div>
          </section>
        ))}
      </PageShell>
    </SkillsProvider>
  );
};

export default PortfolioPage;
