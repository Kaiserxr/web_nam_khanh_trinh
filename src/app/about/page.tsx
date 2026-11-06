import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PageShell, PageHeader } from "@/components/PageShell";
import SocialLinks, { focusRing } from "@/components/SocialLinks";
import { site } from "@/data/site";

const AboutPage: React.FC = () => {
  return (
    <PageShell>
      <PageHeader title={site.aboutHeading} />

      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-28">
            <Image
              src={site.avatar}
              alt={`Portrait of ${site.name}`}
              width={240}
              height={240}
              priority
              className="h-40 w-40 rounded-full object-cover lg:h-48 lg:w-48"
            />
            <dl className="mt-8 space-y-4">
              {site.aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-cool-grey">
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-off-black">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div>
            <div className="max-w-[62ch] space-y-6 text-lg leading-relaxed text-dark-grey [&>p:first-child]:text-xl [&>p:first-child]:text-off-black">
              {site.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 max-w-[62ch] border-t border-light-grey pt-8">
              <h2 className="text-lg font-semibold text-off-black">
                Find me online
              </h2>
              <SocialLinks className="mt-4" emailAsAddress size="md" />
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
                <Link
                  href="/experience"
                  className={`group inline-flex items-center gap-2 rounded-sm text-off-black ${focusRing}`}
                >
                  See my experience
                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/moments"
                  className={`group inline-flex items-center gap-2 rounded-sm text-off-black ${focusRing}`}
                >
                  Moments along the way
                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default AboutPage;
