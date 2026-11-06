import React from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import Timeline from "./_components/Timeline";
import { experiences } from "@/data/experience";

const ExperiencePage: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        title="Experience"
        lede="Research, leadership, publications and competition work, newest first."
      />
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <Timeline experiences={experiences} />
      </div>
    </PageShell>
  );
};

export default ExperiencePage;
