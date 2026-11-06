import React from "react";
import { DownloadIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { PageShell, PageHeader, Band } from "@/components/PageShell";
import { focusRing } from "@/components/SocialLinks";
import cv from "@/data/cv.json";
import { site } from "@/data/site";

type CVSubsection = {
  title: string;
  content: string[];
  time?: string;
  location?: string;
  link?: string;
};

const cvData = cv as {
  sections: { title: string; subsections: CVSubsection[] }[];
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const CVPage: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        title="CV & Resume"
        lede={site.documents[0]?.description}
      >
        <div className="flex flex-wrap gap-3">
          {site.documents.map((doc, i) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors ${focusRing} ${
                i === 0
                  ? "bg-highlight-orange text-page hover:bg-[#FF8A65]"
                  : "border border-light-grey text-off-black hover:border-cool-grey"
              }`}
            >
              <DownloadIcon className="h-4 w-4" aria-hidden="true" />
              {doc.title} (PDF)
            </a>
          ))}
        </div>
      </PageHeader>

      <div className="divide-y divide-light-grey">
        {cvData.sections.map((section) => (
          <Band
            key={section.title}
            id={`cv-${slug(section.title)}`}
            label={section.title}
            className="py-12"
          >
            <div className="space-y-10">
              {section.subsections.map((sub) => (
                <article key={sub.title}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="text-lg font-semibold text-off-black">
                      {sub.title}
                    </h3>
                    {sub.time && (
                      <p className="shrink-0 text-sm tabular-nums text-dark-grey">
                        {sub.time}
                      </p>
                    )}
                  </div>
                  {sub.location && (
                    <p className="mt-1 text-sm text-dark-grey">{sub.location}</p>
                  )}
                  {sub.link && (
                    <a
                      href={sub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-1 inline-flex items-center gap-1.5 rounded-sm text-sm text-dark-grey underline-offset-4 hover:text-off-black hover:underline ${focusRing}`}
                    >
                      <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {sub.link.replace(/^https?:\/\/(www\.)?/, "")}
                    </a>
                  )}
                  {sub.content.length > 0 && (
                    <ul className="mt-3 max-w-[68ch] space-y-2 text-dark-grey">
                      {sub.content.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="mt-[0.7em] h-px w-3 shrink-0 bg-cool-grey/60"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </Band>
        ))}
      </div>
    </PageShell>
  );
};

export default CVPage;
