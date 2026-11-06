import React from "react";
import Image from "next/image";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import { site, activeSocials } from "@/data/site";

const socialIcon: Record<string, typeof GitHubLogoIcon> = {
  GitHub: GitHubLogoIcon,
  LinkedIn: LinkedInLogoIcon,
};

const linkClass =
  "group inline-flex items-center gap-2 rounded-sm text-sm font-medium text-dark-grey transition-colors hover:text-off-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange";

const About: React.FC = () => {
  return (
    <section
      aria-labelledby="about"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <h2
          id="about"
          className="text-3xl font-bold tracking-tight text-off-black sm:text-4xl"
        >
          About
        </h2>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <Image
            src={site.avatar}
            alt={`Portrait of ${site.name}`}
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="max-w-[62ch] text-lg leading-relaxed text-off-black">
              {site.aboutMe}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {activeSocials.map((social) => {
                const Icon = socialIcon[social.name];
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                      {social.name}
                      <ArrowTopRightIcon
                        className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className={linkClass}>
                    <EnvelopeClosedIcon className="h-4 w-4" aria-hidden="true" />
                    {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
