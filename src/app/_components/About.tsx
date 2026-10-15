"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site, activeSocials } from "@/data/site";

const About: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-12 py-12 rounded-xl bg-off-white">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          src={site.avatar}
          alt={site.name}
          className="motion-preset-seesaw rounded-full w-48 h-48 mb-8 md:mb-0 md:mr-8 shadow-lg object-cover"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-off-black">About Me</h2>
          <p className="text-lg text-off-black mt-4">{site.aboutMe}</p>
          <div className="mt-8 flex space-x-6 justify-center md:justify-start">
            {activeSocials.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={social.href}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
