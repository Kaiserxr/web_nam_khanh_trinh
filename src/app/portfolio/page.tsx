"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ImpactfulDeploymentCard from "./_components/FeaturedCard";
import PersonalCreationCard from "./_components/PersonalCard";
import AcademicEndeavorCard from "./_components/AcademicCard";
import { projectsData } from "@/data/projectData";
import { SkillsProvider } from '@/contexts/SkillsContext';
import SkillsExplorer from './_components/SkillsExplorer';

const PortfolioPage: React.FC = () => {
  const impactfulDeployments = projectsData.impactfulDeployments;
  const personalCreations = projectsData.personalCreations;
  const academicEndeavors = projectsData.academicEndeavors;

  // Shown until you add a project to src/data/projects.json
  if (
    impactfulDeployments.length +
      personalCreations.length +
      academicEndeavors.length ===
    0
  ) {
    return (
      <div className="min-h-screen bg-page flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-off-black mb-4 mt-8">
              Portfolio
            </h2>
            <div className="w-full h-1 bg-highlight-orange mb-16"></div>
            <motion.div
              className="bg-off-white rounded-lg p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-off-black mb-4">
                Projects coming soon
              </h3>
              <p className="text-dark-grey">
                I&apos;m working on new projects. Check back soon, or see my{" "}
                <a href="/cv" className="text-highlight-orange hover:underline">
                  CV
                </a>{" "}
                for past work.
              </p>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <SkillsProvider>
      <div className="min-h-screen bg-page flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-off-black mb-4 mt-8">
              Portfolio
            </h2>
            <div className="w-full h-1 bg-highlight-orange mb-16"></div>

            {/* Skills Explorer Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl font-bold text-off-black mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                Explore Projects by Skills
              </motion.h2>
              <motion.p
                className="text-dark-grey mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                Filter projects by technologies to find exactly what you&apos;re looking for. Select multiple skills to see projects that combine them.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <SkillsExplorer />
              </motion.div>
            </motion.div>

            {/* Featured Projects Section */}
            <motion.h2
              className="text-3xl font-bold text-off-black mb-4 mt-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="text-dark-grey mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              Real-world projects deployed as products with real users.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
            >
              {impactfulDeployments.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 1.0 + index * 0.2,
                  }}
                >
                  <ImpactfulDeploymentCard project={project} />
                </motion.div>
              ))}
            </motion.div>

            {/* Personal Projects Section */}
            <motion.h2
              className="text-3xl font-bold text-off-black mb-4 mt-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            >
              Personal Projects
            </motion.h2>
            <motion.p
              className="text-dark-grey mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
            >
              Projects built for fun, learning, and experimentation.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 2.0 }}
            >
              {personalCreations.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 2.2 + index * 0.2,
                  }}
                >
                  <PersonalCreationCard project={project} />
                </motion.div>
              ))}
            </motion.div>

            {/* Academic Projects Section */}
            <motion.h2
              className="text-3xl font-bold text-off-black mb-4 mt-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.7 }}
            >
              Academic Projects
            </motion.h2>
            <motion.p
              className="text-dark-grey mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.8 }}
            >
              Projects associated with my academic courses, where I&apos;ve
              applied theoretical knowledge to practical scenarios.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 3.2 }}
            >
              {academicEndeavors.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 3.4 + index * 0.2,
                  }}
                >
                  <AcademicEndeavorCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </SkillsProvider>
  );
};

export default PortfolioPage;
