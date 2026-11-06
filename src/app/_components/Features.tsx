import React from "react";
import Link from "next/link";
import { Medal, BookOpen, Radar, type LucideIcon } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { featuredWork, type FeaturedWork } from "@/data/featured";
import SourceLink from "@/components/SourceLink";

const outcomeIcon: Record<FeaturedWork["outcomeKind"], LucideIcon> = {
  award: Medal,
  publication: BookOpen,
  current: Radar,
};

const SelectedWork: React.FC = () => {
  if (featuredWork.length === 0) return null;

  return (
    <section
      aria-labelledby="selected-work"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <header className="self-start lg:sticky lg:top-28">
          <h2
            id="selected-work"
            className="text-3xl font-bold tracking-tight text-off-black sm:text-4xl"
          >
            Selected work
          </h2>
          <Link
            href="/experience"
            className="group mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-dark-grey transition-colors hover:text-off-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange"
          >
            Full experience
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </header>

        <ol className="divide-y divide-light-grey border-y border-light-grey">
          {featuredWork.map((work) => {
            const Icon = outcomeIcon[work.outcomeKind];
            return (
              <li
                key={work.title}
                className="grid gap-x-8 gap-y-3 py-8 md:grid-cols-[8.5rem_minmax(0,1fr)]"
              >
                <div className="flex gap-2 text-sm md:block">
                  <p className="font-medium tabular-nums text-off-black">
                    {work.date}
                  </p>
                  {work.place && (
                    <p className="text-dark-grey md:mt-1">
                      <span className="md:hidden" aria-hidden="true">
                        ·{" "}
                      </span>
                      {work.place}
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-off-black sm:text-2xl">
                    {work.title}
                  </h3>
                  <p className="mt-2 flex items-start gap-2 text-sm font-medium text-off-black">
                    <Icon
                      className="mt-px h-4 w-4 shrink-0 text-highlight-orange"
                      aria-hidden="true"
                    />
                    {work.outcome}
                  </p>
                  <p className="mt-3 max-w-[62ch] leading-relaxed text-dark-grey">
                    {work.description}
                  </p>
                  {work.metrics && work.metrics.length > 0 && (
                    <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-semibold tabular-nums text-off-black">
                      {work.metrics.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </p>
                  )}
                  {work.tools && work.tools.length > 0 && (
                    <p className="mt-3 text-sm text-cool-grey">
                      {work.tools.join(" · ")}
                    </p>
                  )}
                  {work.link && (
                    <p className="mt-4">
                      <SourceLink href={work.link.href} label={work.link.label} />
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default SelectedWork;
