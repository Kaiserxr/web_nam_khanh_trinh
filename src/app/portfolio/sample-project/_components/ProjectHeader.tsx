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
    <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
      <h1 className="text-balance text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-off-black">
        {title}
      </h1>
      <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-dark-grey">{subtitle}</p>
      {videoUrl ? (
        <div
          className="relative mt-10 w-full"
          style={{ paddingBottom: "50%" }}
        >
          <iframe
            src={videoUrl}
            title="Video Demo"
            className="absolute left-0 top-0 h-full w-full rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img
          src={heroImageUrl}
          alt={title}
          className="mt-10 h-72 w-full rounded-lg bg-off-white object-cover"
        />
      )}
      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-full bg-highlight-orange px-6 py-3 font-semibold text-page transition-colors hover:bg-[#FF8A65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange"
        >
          Visit Website
        </a>
      )}
    </section>
  );
};

export default ProjectHeader;
