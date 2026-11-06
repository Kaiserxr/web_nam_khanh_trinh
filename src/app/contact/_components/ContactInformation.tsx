"use client";

import React, { useState } from "react";
import {
  ArrowTopRightIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { site } from "@/data/site";
import { contactLinks, iconFor, focusRing } from "@/components/SocialLinks";

const ContactInfo: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const profiles = contactLinks().filter((l) => l.name !== "Email");
  const resume = site.documents[0];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-y-12">
        <h2 className="text-2xl font-bold tracking-tight text-off-black sm:text-3xl">
          Email
        </h2>
        <div>
          <a
            href={`mailto:${site.email}`}
            className={`rounded-sm text-[clamp(1.125rem,5vw,2.5rem)] [overflow-wrap:anywhere] font-semibold tracking-tight text-off-black underline decoration-light-grey decoration-2 underline-offset-[0.2em] transition-colors hover:decoration-highlight-orange ${focusRing}`}
          >
            {site.email}
          </a>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className={`inline-flex items-center gap-2 rounded-full border border-light-grey px-5 py-2.5 text-sm font-medium text-off-black transition-colors hover:border-cool-grey ${focusRing}`}
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-highlight-orange" aria-hidden="true" />
              ) : (
                <CopyIcon className="h-4 w-4" aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy address"}
            </button>
            {resume && (
              <a
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border border-light-grey px-5 py-2.5 text-sm font-medium text-off-black transition-colors hover:border-cool-grey ${focusRing}`}
              >
                <DownloadIcon className="h-4 w-4" aria-hidden="true" />
                Resume (PDF)
              </a>
            )}
            <span role="status" aria-live="polite" className="sr-only">
              {copied ? "Email address copied" : ""}
            </span>
          </div>
        </div>

        {profiles.length > 0 && (
          <>
            <h2 className="text-2xl font-bold tracking-tight text-off-black sm:text-3xl">
              Profiles
            </h2>
            <ul className="divide-y divide-light-grey border-y border-light-grey">
              {profiles.map((p) => {
                const Icon = iconFor(p.name);
                return (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 py-5 ${focusRing}`}
                    >
                      <Icon className="h-5 w-5 shrink-0 text-off-black" aria-hidden="true" />
                      <span className="w-28 shrink-0 font-semibold text-off-black">
                        {p.name}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-dark-grey group-hover:text-off-black">
                        {p.display}
                      </span>
                      <ArrowTopRightIcon
                        className="h-4 w-4 shrink-0 text-dark-grey transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight-orange"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
