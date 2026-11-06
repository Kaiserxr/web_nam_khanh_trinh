import React from "react";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { site } from "@/data/site";
import SonarField from "./SonarField";
import SocialLinks from "@/components/SocialLinks";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange";

const Hero: React.FC = () => {
  const resume = site.documents[0];
  const proof = site.hero.proof.slice(0, 4);

  // A short stagger from top to bottom; the buttons land within ~250ms.
  const delay = (step: number) => ({ animationDelay: `${step * 60}ms` });

  return (
    <section className="relative isolate overflow-hidden bg-page">
      <SonarField className="pointer-events-none absolute -right-16 bottom-0 -z-10 hidden w-[38rem] max-w-none opacity-80 xl:block 2xl:right-[calc((100vw-80rem)/2)]" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <h1 className="text-balance text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-off-black motion-safe:animate-rise">
          {site.name}
        </h1>

        <p
          className="mt-5 max-w-[34rem] text-lg leading-relaxed text-dark-grey motion-safe:animate-rise sm:text-xl"
          style={delay(1)}
        >
          {site.hero.intro}
        </p>

        {site.hero.seeking && (
          <p
            className="mt-6 max-w-[34rem] font-medium leading-snug text-off-black motion-safe:animate-rise"
            style={delay(2)}
          >
            {site.hero.seeking}
          </p>
        )}

        <div
          className="mt-6 flex flex-wrap items-center gap-3 motion-safe:animate-rise"
          style={delay(3)}
        >
          {resume && (
            <a
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-12 items-center gap-2 rounded-full bg-highlight-orange px-5 py-3 sm:px-6 font-semibold text-page transition-colors hover:bg-[#FF8A65] ${focusRing}`}
            >
              <DownloadIcon className="h-4 w-4" aria-hidden="true" />
              {site.hero.resumeLabel}
            </a>
          )}
          <Link
            href="/contact"
            className={`group inline-flex min-h-12 items-center gap-2 rounded-full border border-light-grey px-5 py-3 sm:px-6 font-medium text-off-black transition-colors hover:border-cool-grey ${focusRing}`}
          >
            {site.hero.contactLabel}
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {proof.length > 0 && (
          <ul
            className="mt-14 grid max-w-[40rem] gap-x-8 gap-y-5 motion-safe:animate-rise sm:grid-cols-2"
            style={delay(4)}
          >
            {proof.map((item) => (
              <li key={item.title} className="border-t border-light-grey pt-4">
                <p className="font-semibold text-off-black">
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group -my-1 inline-flex items-center gap-1.5 rounded-sm py-1 underline decoration-cool-grey/50 underline-offset-4 transition-colors hover:decoration-highlight-orange ${focusRing}`}
                    >
                      {item.title}
                      <ExternalLinkIcon className="h-3.5 w-3.5 text-dark-grey" aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    item.title
                  )}
                </p>
                <p className="mt-1 text-sm leading-snug text-dark-grey">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div
          className="mt-10 flex max-w-[40rem] flex-wrap items-center justify-between gap-x-8 gap-y-4 motion-safe:animate-rise"
          style={delay(5)}
        >
          <SocialLinks emailAsAddress />
          {site.tagline && (
            <p className="text-sm font-medium text-cool-grey">{site.tagline}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
