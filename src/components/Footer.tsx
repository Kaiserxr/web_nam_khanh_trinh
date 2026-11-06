import React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import SocialLinks, { focusRing } from "@/components/SocialLinks";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/moments", label: "Moments" },
  { href: "/cv", label: "CV & Resume" },
  { href: "/contact", label: "Contact" },
];

const Footer: React.FC = () => {
  const resume = site.documents[0];

  return (
    <footer className="border-t border-light-grey bg-page">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-off-black">{site.name}</p>
          <p className="mt-1 text-sm text-dark-grey">
            Computer Science, University of South Florida
          </p>
          <SocialLinks className="mt-6" emailAsAddress />
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-sm text-dark-grey transition-colors hover:text-off-black ${focusRing}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {resume && (
              <li>
                <a
                  href={resume.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-sm text-dark-grey transition-colors hover:text-off-black ${focusRing}`}
                >
                  Resume (PDF)
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-cool-grey sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
};

export default Footer;
