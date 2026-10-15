import React, { createContext, useContext, useState, useCallback } from "react";
import { projectsData } from "@/data/projectData";

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsContextType {
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  clearSkills: () => void;
  filteredProjects: any[];
  skillCategories: SkillCategory[];
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

// Base categories with their known skills
// Any skill not listed here will go to "Other Skills"
// prettier-ignore
const BASE_CATEGORIES = {
  "Top Skills": ["Python", "JavaScript", "AWS", "Docker", "PostgreSQL"],
  "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "C#", "SQL", "Shell"],
  "Web & Mobile Development": ["React.js", "Next.js", "Vue.js", "Node.js", "Express.js", "Django", "FastAPI", "Flask", "REST APIs", "GraphQL", "HTML", "CSS", "Tailwind CSS", "Redux", "React Native", "Mobile App Development", "Axios", "Vite.js", "NGINX", ".NET", "Streamlit", "Figma"],
  "AI & Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "LLM Fine-tuning", "Prompt Engineering", "Machine Learning Pipeline", "OpenAI API", "OpenAI Assistant API", "LangChain", "Hugging Face", "GPT-4", "Google Gemini", "Large Language Model (LLM)", "NLP", "Snowflake Arctic Large Language Model (LLM)", "ML/LLM provider APIs", "AI Filtering", "K-NN", "LDA", "LeNet5", "Logistic Regression", "PCA", "SVM", "GPT-4o", "Langchain", "matplotlib", "sklearn", "Deep Learning", "Keras", "Pandas", "Numpy"],
  "Data Systems & DevOps & Infrastructure": ["AWS", "AWS S3", "Azure", "Azure Virtual Network", "Docker", "Kubernetes", "CI/CD", "Git", "Git/GitHub", "GitHub Actions", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Snowflake", "Database Design", "Query Optimization", "Data Modeling", "Relational DBSM", "SSL/TLS", "Linux", "Pandas"],
  "System Design": ["Microservices Architecture", "Distributed Systems", "System Architecture", "API Design", "Scalable Systems", "High Availability Design", "Object-Oriented Programming", "OOP"],
  "Development Practices": ["Agile Development", "Scrum (Agile)", "Test-Driven Development", "Code Review", "Technical Documentation", "Performance Optimization", "Security Best Practices", "Security", "open-source"],
  "Development Tools": ["Visual Studio", "Git/Github", "Xcode", "Android Emulator"]
};

export const SkillsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Extract all unique skills from projects and categorize them
  const skillCategories = React.useMemo(() => {
    const allProjects = [
      ...projectsData.impactfulDeployments,
      ...projectsData.personalCreations,
      ...projectsData.academicEndeavors,
      ...projectsData.experience,
    ];

    // Create a Set of all skills used in projects
    const usedSkillsSet = new Set<string>();
    allProjects.forEach((project) => {
      project.techStack.forEach((skill: string) => usedSkillsSet.add(skill));
    });

    // Create a map to track which skills have been categorized
    const categorizedSkills = new Set<string>();

    // First, categorize known skills
    const categories = Object.entries(BASE_CATEGORIES)
      .map(([name, skills]) => {
        const matchedSkills = skills.filter((skill) =>
          usedSkillsSet.has(skill)
        );
        matchedSkills.forEach((skill) => categorizedSkills.add(skill));
        return {
          name,
          skills: matchedSkills.sort(),
        };
      })
      .filter((category) => category.skills.length > 0);

    // Find uncategorized skills
    const otherSkills = Array.from(usedSkillsSet)
      .filter((skill) => !categorizedSkills.has(skill))
      .sort();

    // Add "Other Skills" category if there are any uncategorized skills
    if (otherSkills.length > 0) {
      categories.push({
        name: "Other Skills",
        skills: otherSkills,
      });
    }

    return categories;
  }, []);

  // Filter projects based on selected skills
  const filteredProjects = React.useMemo(() => {
    if (selectedSkills.length === 0) return [];

    const allProjects = [
      ...projectsData.impactfulDeployments,
      ...projectsData.personalCreations,
      ...projectsData.academicEndeavors,
      ...projectsData.experience,
    ];

    return allProjects.filter((project) =>
      selectedSkills.every((skill) => project.techStack.includes(skill))
    );
  }, [selectedSkills]);

  const toggleSkill = useCallback((skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }, []);

  const clearSkills = useCallback(() => {
    setSelectedSkills([]);
  }, []);

  return (
    <SkillsContext.Provider
      value={{
        selectedSkills,
        toggleSkill,
        clearSkills,
        filteredProjects,
        skillCategories,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

export const useSkills = () => {
  const context = useContext(SkillsContext);
  if (!context) {
    throw new Error("useSkills must be used within a SkillsProvider");
  }
  return context;
};
