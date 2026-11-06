import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

/** Navbar + main + footer, shared by every inner page. */
export const PageShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex min-h-screen flex-col bg-page">
    <Navbar />
    <main className="flex-grow pb-20 pt-24">{children}</main>
    <Footer />
  </div>
);

/** Page title block: large heading, optional lede and actions, hairline below. */
export const PageHeader: React.FC<{
  title: string;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ title, lede, children }) => (
  <header className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
    <div className="border-b border-light-grey pb-10">
      <h1 className="text-balance text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-off-black">
        {title}
      </h1>
      {lede && (
        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-dark-grey">
          {lede}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </header>
);

/** Two-column band used across pages: a label column and a content column. */
export const Band: React.FC<{
  label: React.ReactNode;
  id?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}> = ({ label, id, aside, children, className = "" }) => (
  <section
    aria-labelledby={id}
    className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
  >
    <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
      <div className="self-start lg:sticky lg:top-28">
        <h2
          id={id}
          className="text-2xl font-bold tracking-tight text-off-black sm:text-3xl"
        >
          {label}
        </h2>
        {aside}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export default PageShell;
