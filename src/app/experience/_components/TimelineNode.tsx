"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  InfoCircledIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./styles/card.css";

interface TimelineNodeProps {
  date: string;
  title: string;
  company: string;
  description: string;
  techStack: string[];
  bulletPoints?: string[];
  isLeft?: boolean;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({
  date,
  title,
  company,
  description,
  techStack,
  bulletPoints = [],
  isLeft = false,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);
  const toggleDetails = () => setShowDetails(!showDetails);

  const visibleTagsCount = 2;
  const visibleTags = techStack.slice(0, visibleTagsCount);
  const hiddenTags = techStack.slice(visibleTagsCount);

  return (
    <motion.div
      className={`relative mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: -100 }} // Start above the timeline
      animate={{ opacity: 1, y: 0 }} // Move to the correct position
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Spacer div for mobile view */}
      <div className="order-1 w-0 md:w-5/12"></div>

      {/* Node circle */}
      <motion.div
        className="z-20 flex items-center order-1 bg-highlight-orange shadow-xl w-8 h-8 rounded-full md:absolute md:left-[calc(50%-16px)] transform md:-translate-x-0"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3, ease: "easeOut" }} // Slight delay to scale after movement
      ></motion.div>

      {/* Card content */}
      <motion.div
        className={`relative order-1 bg-off-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0 ${
          isLeft ? "md:text-right" : "text-left"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }} // Show card after the node reaches position
      >
        <div className="relative">
          {/* Info Button */}
          {bulletPoints.length > 0 && (
            <button
              onClick={toggleDetails}
              className={`absolute ${
                isLeft ? "right-0 md:left-0" : "right-0"
              } p-1`}
            >
              <InfoCircledIcon className="w-5 h-5 text-dark-grey hover:text-off-black transition-colors" />
            </button>
          )}

          <h4
            className={`mb-1 text-xl font-bold text-off-black ${
              isLeft ? "ml-0 md:ml-8" : "mr-8"
            }`}
          >
            {title}
          </h4>
          <p className="text-sm text-dark-grey">{company}</p>
          <p className="text-sm text-dark-grey">{date}</p>
          <p className="mt-2 text-dark-grey">{description}</p>
          <div
            className={`mt-3 flex flex-wrap ${
              isLeft ? "md:justify-end" : "justify-start"
            }`}
          >
            {visibleTags.map((tech, index) => (
              <span
                key={index}
                className="bg-white/10 text-off-black text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {showAll &&
              hiddenTags.map((tech, index) => (
                <span
                  key={index + visibleTagsCount}
                  className="bg-white/10 text-off-black text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            {hiddenTags.length > 0 && (
              <span
                onClick={toggleShowAll}
                className="bg-off-white text-off-black cursor-pointer text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                {showAll ? "Show Less" : `Show All (${hiddenTags.length})`}
              </span>
            )}
          </div>

          {/* Key Highlights overlay */}
          {showDetails && bulletPoints.length > 0 && (
            <motion.div
              className="absolute inset-0 bg-off-white bg-opacity-95 p-6 rounded-lg flex flex-col justify-center items-start overflow-y-auto hide-scrollbar"
              style={{ maxHeight: "100%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={toggleDetails}
            >
              <h4 className="text-lg font-semibold mb-3">Highlights:</h4>
              <ul className="list-disc list-inside text-off-black text-left">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineNode;
