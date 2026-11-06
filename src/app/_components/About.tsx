import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { site } from "@/data/site";
import SocialLinks, { focusRing } from "@/components/SocialLinks";

const About: React.FC = () => {
  return (
    <section
      aria-labelledby="about"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <header className="self-start">
          <h2
            id="about"
            className="text-3xl font-bold tracking-tight text-off-black sm:text-4xl"
          >
            About
          </h2>
          <Link
            href="/about"
            className={`group mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-dark-grey transition-colors hover:text-off-black ${focusRing}`}
          >
            My story
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </header>

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
            <SocialLinks className="mt-5" emailAsAddress />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
