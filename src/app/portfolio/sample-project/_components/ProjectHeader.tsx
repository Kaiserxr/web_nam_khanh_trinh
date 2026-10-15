"use client";

import React from "react";

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  videoUrl?: string;
  heroImageUrl: string;
  websiteLink?: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  subtitle,
  videoUrl,
  heroImageUrl,
  websiteLink,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 text-center">
      <h1 className="text-5xl font-bold text-off-black">{title}</h1>
      <p className="text-xl text-dark-grey mt-4">{subtitle}</p>
      {videoUrl ? (
        <div
          className="mt-8 relative mx-auto w-full md:w-3/4"
          style={{ paddingBottom: "50%" }}
        >
          <iframe
            src={videoUrl}
            title="Video Demo"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img
          src={heroImageUrl}
          alt={title}
          className="w-full h-64 object-cover mt-8 rounded-lg shadow-lg"
        />
      )}
      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 bg-highlight-orange text-white font-medium rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:shadow-highlight-orange/50"
        >
          Visit Website
        </a>
      )}
    </section>
  );
};

export default ProjectHeader;
