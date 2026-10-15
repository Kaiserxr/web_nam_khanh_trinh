"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedBeamCircle } from "./CircleBeam";
import { site } from "@/data/site";

const Skills: React.FC = () => {
  return (
    <section className="bg-page py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-off-black"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-off-black mt-4"
        >
          {site.skillsBlurb}
        </motion.p>
        <AnimatedBeamCircle />
      </div>
    </section>
  );
};

export default Skills;
