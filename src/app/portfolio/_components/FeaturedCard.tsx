import React, { useState } from "react";
import {
  GitHubLogoIcon,
  GlobeIcon,
  InfoCircledIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import "./styles/card.css";

const ImpactfulDeploymentCard: React.FC<{ project: any }> = ({ project }) => {
  const [showAll, setShowAll] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);

  const visibleTagsCount = 4;
  const visibleTags = project.techStack.slice(0, visibleTagsCount);
  const hiddenTags = project.techStack.slice(visibleTagsCount);

  const toggleDetails = () => setShowDetails(!showDetails);

  const handleOutsideClick = () => {
    if (showDetails) {
      setShowDetails(false);
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click event
    if (project.website) {
      window.open(project.website, "_blank");
    } else if (project.github) {
      window.open(project.github, "_blank");
    }
  };

  return (
    <div
      className="relative bg-off-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-full lg:max-w-2xl mx-auto flex flex-col justify-between"
      onClick={handleOutsideClick}
      style={{ minHeight: "100%" }} // Ensures all cards stretch to the same height
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 md:h100 object-cover rounded-xl shadow-md cursor-pointer"
          onClick={handleImageClick}
        />
        {project.users > 0 && (
          <div className="absolute top-0 right-0 bg-highlight-orange text-white text-sm px-4 py-2 rounded-bl-lg shadow-lg">
            {project.users}+ Users
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-off-black">
            {project.title}
          </h3>
          <p className="text-dark-grey mt-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap">
            {visibleTags.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-white/10 text-off-black text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {showAll &&
              hiddenTags.map((tech: string, index: number) => (
                <span
                  key={index + visibleTagsCount}
                  className="bg-white/10 text-off-black text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            {hiddenTags.length > 0 && (
              <span
                onClick={toggleShowAll}
                className="bg-off-white text-off-black cursor-pointer text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                {showAll ? "Show Less" : `Show All (${hiddenTags.length})`}
              </span>
            )}
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-2">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              onClick={(e) => e.stopPropagation()}
            >
              <GlobeIcon />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubLogoIcon />
            </a>
          )}
          {project.bulletPoints && project.bulletPoints.length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDetails();
              }}
              className="btn flex items-center space-x-1 text-sm px-3 py-2"
            >
              <InfoCircledIcon className="w-4 h-4" />
            </button>
          )}
          {project.link && (
            <a
              href={project.link}
              className="btn flex items-center space-x-1 text-sm px-3 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
      {showDetails &&
        project.bulletPoints &&
        project.bulletPoints.length > 0 && (
          <div className="absolute inset-0 bg-off-white bg-opacity-95 p-6 flex flex-col justify-center items-start overflow-y-auto scrollbar-hide">
            <h4 className="text-lg font-semibold mb-3">Highlights:</h4>
            <ul className="list-disc list-inside text-off-black">
              {project.bulletPoints.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default ImpactfulDeploymentCard;
