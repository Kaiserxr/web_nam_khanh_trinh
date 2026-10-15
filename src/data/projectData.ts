import raw from "./projects.json";

// Typed wrapper around projects.json so the lists can be empty.
export type Project = {
  title: string;
  description: string;
  techStack: string[];
  [key: string]: any;
};

export const projectsData = raw as Record<
  "impactfulDeployments" | "personalCreations" | "academicEndeavors" | "experience",
  Project[]
>;
