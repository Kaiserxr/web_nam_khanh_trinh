import React from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import PortfolioAchievements from "./_components/portfolio-achievements";

const MomentsPage: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        title="Moments"
        lede="Big and small, the ones that matter."
      />
      <PortfolioAchievements />
    </PageShell>
  );
};

export default MomentsPage;
