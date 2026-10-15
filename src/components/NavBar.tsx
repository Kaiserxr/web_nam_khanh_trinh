"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-page">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={site.logo}
            alt="Logo"
            width={40}
            height={40}
            style={{ cursor: "pointer", borderRadius: "25%" }}
          />
          <span className="text-2xl font-bold text-off-black ml-2">
            {site.shortName}
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="/about"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/cv"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
            >
              CV & Resume
            </a>
          </li>
          <li>
            <a
              href="/moments"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
            >
              Moments
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/experience"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-off-black focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden bg-page"
      >
        <ul className="flex flex-col space-y-4 px-4 py-2 text-right">
          <li>
            <a
              href="/about"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/cv"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CV & Resume
            </a>
          </li>
          <li>
            <a
              href="/moments"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Moments
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/experience"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-off-black font-medium hover:text-highlight-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
