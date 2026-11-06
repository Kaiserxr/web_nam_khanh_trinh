import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PageShell } from "@/components/PageShell";
import { focusRing } from "@/components/SocialLinks";

const NotFound: React.FC = () => {
  return (
    <PageShell>
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium tabular-nums text-dark-grey">404</p>
        <h1 className="mt-2 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-off-black">
          Page not found
        </h1>
        <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-dark-grey">
          The link may be old or mistyped. Everything on the site is reachable
          from the home page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 rounded-full bg-highlight-orange px-6 py-3 font-semibold text-page transition-colors hover:bg-[#FF8A65] ${focusRing}`}
          >
            Back to home
          </Link>
          <Link
            href="/experience"
            className={`group inline-flex items-center gap-2 rounded-full border border-light-grey px-6 py-3 font-medium text-off-black transition-colors hover:border-cool-grey ${focusRing}`}
          >
            See experience
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </PageShell>
  );
};

export default NotFound;
