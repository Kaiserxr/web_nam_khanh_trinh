import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

/** Quiet outbound link to the evidence behind a claim (a paper, a repo, a results page). */
const SourceLink: React.FC<{ href: string; label: string; className?: string }> = ({
  href,
  label,
  className = "",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`-my-2 inline-flex items-center gap-1.5 rounded-sm py-2 text-sm font-medium text-off-black underline decoration-cool-grey/50 underline-offset-4 transition-colors hover:decoration-highlight-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange ${className}`}
  >
    {label}
    <ExternalLinkIcon className="h-3.5 w-3.5 text-dark-grey" aria-hidden="true" />
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);

export default SourceLink;
