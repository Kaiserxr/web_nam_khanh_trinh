import React from "react";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import { site } from "@/data/site";
import SonarField from "./SonarField";
import SocialLinks from "@/components/SocialLinks";

// Renders `intro` with the owner's name in bold, wherever it appears.
const Intro: React.FC<{ text: string }> = ({ text }) => {
  const i = text.indexOf(site.name);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-semibold text-off-black">{site.name}</strong>
      {text.slice(i + site.name.length)}
    </>
  );
};

const Hero: React.FC = () => {
  const words = site.tagline.split(" ");
  const stack = words.length <= 4;
  const resume = site.documents[0];
  const proof = site.hero.proof.slice(0, 4);

  // Stagger: headline words first, then intro, proof, actions.
  const delay = (step: number) => ({ animationDelay: `${step * 90}ms` });
  const after = words.length;

  return (
    <section className="relative isolate overflow-hidden bg-page">
      <SonarField className="pointer-events-none absolute -right-16 bottom-0 -z-10 hidden w-[38rem] max-w-none opacity-80 xl:block 2xl:right-[calc((100vw-80rem)/2)]" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <h1 className="text-balance text-[clamp(3rem,9vw,6rem)] font-bold leading-[0.95] tracking-[-0.035em] text-off-black">
          {words.map((word, i) => (
            <span
              key={i}
              className={`motion-safe:animate-rise ${
                stack ? "block" : "mr-[0.25em] inline-block"
              }`}
              style={delay(i)}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="mt-8 max-w-[34rem] text-lg leading-relaxed text-dark-grey motion-safe:animate-rise sm:text-xl"
          style={delay(after)}
        >
          <Intro text={site.hero.intro} />
        </p>

        {proof.length > 0 && (
          <ul
            className="mt-10 grid max-w-[40rem] gap-x-8 gap-y-5 motion-safe:animate-rise sm:grid-cols-2"
            style={delay(after + 1)}
          >
            {proof.map((item) => (
              <li key={item.title} className="border-t border-light-grey pt-4">
                <p className="font-semibold text-off-black">{item.title}</p>
                <p className="mt-1 text-sm leading-snug text-dark-grey">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div
          className="mt-10 flex flex-wrap items-center gap-3 motion-safe:animate-rise"
          style={delay(after + 2)}
        >
          {resume && (
            <a
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-highlight-orange px-6 py-3 font-semibold text-page transition-colors hover:bg-[#FF8A65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange"
            >
              <DownloadIcon className="h-4 w-4" aria-hidden="true" />
              {site.hero.resumeLabel}
            </a>
          )}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-light-grey px-6 py-3 font-medium text-off-black transition-colors hover:border-cool-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange"
          >
            {site.hero.contactLabel}
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-8 motion-safe:animate-rise" style={delay(after + 3)}>
          <SocialLinks emailAsAddress />
        </div>
      </div>
    </section>
  );
};

export default Hero;
