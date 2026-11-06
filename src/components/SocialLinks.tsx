import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  ArrowTopRightIcon,
  Link2Icon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { site, activeSocials } from "@/data/site";

type IconType = typeof GitHubLogoIcon;

// Hugging Face has no icon in the Radix set, so it gets a small drawn one.
const HuggingFaceIcon: IconType = React.forwardRef(function HuggingFaceIcon(
  props,
  ref
) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      {...props}
    >
      <circle cx="7.5" cy="7.5" r="6" />
      <circle cx="5.4" cy="6" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="9.6" cy="6" r="0.5" fill="currentColor" stroke="none" />
      <path d="M5 8.6c.6 1.2 1.4 1.8 2.5 1.8s1.9-.6 2.5-1.8" />
    </svg>
  );
}) as IconType;

const ICONS: Record<string, IconType> = {
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  "hugging face": HuggingFaceIcon,
  huggingface: HuggingFaceIcon,
  x: TwitterLogoIcon,
  twitter: TwitterLogoIcon,
  youtube: VideoIcon,
  email: EnvelopeClosedIcon,
};

export const iconFor = (name: string): IconType =>
  ICONS[name.toLowerCase()] ?? Link2Icon;

/** Every active profile plus email, in the order they appear in site.ts. */
export function contactLinks() {
  const links = activeSocials.map((s) => ({
    name: s.name,
    href: s.href,
    display: s.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    external: true,
  }));
  if (site.email) {
    links.push({
      name: "Email",
      href: `mailto:${site.email}`,
      display: site.email,
      external: false,
    });
  }
  return links;
}

export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange";

/**
 * Inline row of profile links: icon + name. Used in the hero, About and footer.
 * `showEmail` adds the email address as the last link.
 */
const SocialLinks: React.FC<{
  className?: string;
  showEmail?: boolean;
  emailAsAddress?: boolean;
  size?: "sm" | "md";
}> = ({ className = "", showEmail = true, emailAsAddress = false, size = "sm" }) => {
  const links = contactLinks().filter((l) => showEmail || l.name !== "Email");
  if (links.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-3 ${className}`}>
      {links.map((link) => {
        const Icon = iconFor(link.name);
        return (
          <li key={link.name}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`group inline-flex items-center gap-2 rounded-sm font-medium text-dark-grey transition-colors hover:text-off-black ${focusRing} ${
                size === "md" ? "text-base" : "text-sm"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {link.name === "Email" && emailAsAddress ? link.display : link.name}
              {link.external && (
                <ArrowTopRightIcon
                  className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
