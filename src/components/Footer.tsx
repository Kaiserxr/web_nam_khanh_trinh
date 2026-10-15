import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { site, findSocial } from "@/data/site";

const Footer: React.FC = () => {
  const github = findSocial("GitHub");
  const linkedin = findSocial("LinkedIn");

  return (
    <footer className="bg-off-white text-cool-grey py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-4 mb-4 md:mb-0 text-sm">
            <a href="/about" className="hover:text-highlight-orange">
              About
            </a>
            <a href="/portfolio" className="hover:text-highlight-orange">
              Portfolio
            </a>
            <a href="/experience" className="hover:text-highlight-orange">
              Experience
            </a>
            <a href="/contact" className="hover:text-highlight-orange">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight-orange"
              >
                <GitHubLogoIcon width={20} height={20} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight-orange"
              >
                <LinkedInLogoIcon width={20} height={20} />
              </a>
            )}
          </div>

          {/* Copyright Notice */}
          <div className="text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
