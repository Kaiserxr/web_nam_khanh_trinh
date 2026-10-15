"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Section from "./_components/Section";
import Subsection from "./_components/Subsection";
import cv from "../../data/cv.json";
import ShimmerButton from "@/components/buttons/LearnMore";
import { site } from "@/data/site";

type CVSubsection = {
  title: string;
  content: string[];
  time?: string;
  location?: string;
  link?: string;
};

const cvData = cv as {
  sections: { title: string; subsections: CVSubsection[] }[];
};

const CVPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(
    cvData.sections[0].title
  );
  const [openSubsection, setOpenSubsection] = useState<string | null>(
    cvData.sections[0].subsections[0].title
  );

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
    setOpenSubsection(null); // Reset subsection when section changes
  };

  const toggleSubsection = (subsection: string) => {
    setOpenSubsection(openSubsection === subsection ? null : subsection);
  };

  return (
    <div className="min-h-screen bg-page flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-off-black mb-4 mt-8">
            CV & Resume
          </h2>
          <div className="w-full h-1 bg-highlight-orange mb-16"></div>

          {/* Document Section */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            {site.documents.map((doc, index) => (
              <motion.div
                key={index}
                className="bg-off-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.6 + index * 0.2,
                }}
              >
                <h3 className="text-xl font-semibold text-off-black mb-2">
                  {doc.title}
                </h3>
                <p className="text-dark-grey text-center mb-4">
                  {doc.description}
                </p>
                <Link
                  href={doc.href}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShimmerButton>{doc.button}</ShimmerButton>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {cvData.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.8 + index * 0.2,
              }}
            >
              <Section
                title={section.title}
                isOpen={openSection === section.title}
                onToggle={() => toggleSection(section.title)}
              >
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <Subsection
                      title={subsection.title}
                      content={subsection.content}
                      isOpen={openSubsection === subsection.title}
                      onToggle={() => toggleSubsection(subsection.title)}
                      time={"time" in subsection ? subsection.time : undefined}
                      location={
                        "location" in subsection
                          ? subsection.location
                          : undefined
                      }
                      link={"link" in subsection ? subsection.link : undefined}
                    />
                  </div>
                ))}
              </Section>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CVPage;
