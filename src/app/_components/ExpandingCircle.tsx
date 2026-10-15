"use client";

import { motion } from "framer-motion";
import React from "react";

const ExpandingCircle: React.FC = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Expanding Circle Animation */}
      <motion.div
        initial={{
          scale: 0,
          backgroundColor: "#B0BEC5", // Tailwind 'cool-grey'
          borderRadius: "50%",
          x: "50%",
          y: "50%",
          zIndex: 10,
        }}
        animate={{
          scale: [0, 10],
          x: ["50%", "-50%"],
          y: ["50%", "-50%"],
          backgroundColor: ["#B0BEC5", "#F5F5F5"], // Tailwind 'off-white'
          zIndex: [10, -1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 w-full h-full z-10"
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: "backIn",
          }}
          className="text-4xl font-bold text-off-black"
        >
          Hello
        </motion.h1>
      </div>
    </div>
  );
};

export default ExpandingCircle;
