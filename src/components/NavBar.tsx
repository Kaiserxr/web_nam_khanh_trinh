"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { site } from "@/data/site";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/moments", label: "Moments" },
  { href: "/cv", label: "CV & Resume" },
  { href: "/contact", label: "Contact" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-orange";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      aria-label="Main"
      className="fixed left-0 top-0 z-50 w-full border-b border-light-grey/70 bg-page/90 backdrop-blur supports-[backdrop-filter]:bg-page/75"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`flex items-center gap-2.5 rounded-md ${focusRing}`}
          aria-label={`${site.name}, home`}
        >
          <Image
            src={site.logo}
            alt=""
            width={36}
            height={36}
            className="rounded-[25%]"
          />
          <span className="text-xl font-bold text-off-black">
            {site.shortName}
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-sm py-1 text-sm font-medium transition-colors ${focusRing} ${
                    active
                      ? "text-off-black after:absolute after:-bottom-[13px] after:left-0 after:h-0.5 after:w-full after:bg-highlight-orange"
                      : "text-dark-grey hover:text-off-black"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={`-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-off-black md:hidden ${focusRing}`}
        >
          {isOpen ? (
            <Cross1Icon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <HamburgerMenuIcon className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <ul
          id="mobile-menu"
          className="border-t border-light-grey px-4 pb-4 pt-2 md:hidden"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-md px-2 py-3 text-base font-medium ${focusRing} ${
                    active ? "text-off-black" : "text-dark-grey"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-highlight-orange"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
