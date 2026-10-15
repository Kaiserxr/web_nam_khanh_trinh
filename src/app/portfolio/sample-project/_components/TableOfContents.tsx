"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, Cross1Icon } from "@radix-ui/react-icons";

interface TableOfContentsProps {
  sections: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust offset as needed
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(
          section.toLowerCase().replace(/\s/g, "-")
        );
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div>
      <button
        className="md:hidden fixed bottom-1/4 right-4 transform translate-y-1/2 z-50 p-2 bg-highlight-orange text-white rounded"
        onClick={() => setIsModalVisible(true)}
      >
        <ArrowLeftIcon />
      </button>
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-page w-1/2 h-1/2 p-4 shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-dark-grey"
              onClick={() => setIsModalVisible(false)}
            >
              <Cross1Icon />
            </button>
            <h2 className="text-xl font-bold text-dark-grey mb-4">
              Table of Contents
            </h2>
            <ul className="space-y-2 overflow-y-auto h-full">
              {sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#${section.toLowerCase().replace(/\s/g, "-")}`}
                    className={`text-sm text-dark-grey px-2 py-1 rounded transition-transform transition-colors duration-300 ease-in-out ${
                      activeSection === section
                        ? "text-highlight-orange scale-105"
                        : "hover:text-highlight-orange hover:scale-105"
                    }`}
                    onClick={() => setIsModalVisible(false)}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <nav className="hidden md:block sticky top-20 border-l-2 border-light-grey pl-4">
        <h2 className="text-xl font-bold text-dark-grey mb-4">
          Table of Contents
        </h2>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.toLowerCase().replace(/\s/g, "-")}`}
                className={`text-sm text-dark-grey px-2 py-1 rounded transition-transform transition-colors duration-300 ease-in-out ${
                  activeSection === section
                    ? "text-highlight-orange scale-105"
                    : "hover:text-highlight-orange hover:scale-105"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
