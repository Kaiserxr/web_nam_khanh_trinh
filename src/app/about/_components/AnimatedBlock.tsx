"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles/AbstractShape.module.css";

const AbstractShape: React.FC<{ shapeType: string; bgColor: string }> = ({
  shapeType,
  bgColor,
}) => {
  const shapeClass = styles[shapeType] || "";

  return (
    <div
      className={`${shapeClass} w-24 h-24 ${bgColor} flex-shrink-0 flex justify-center items-center`}
    ></div>
  );
};

const AnimatedBlock: React.FC<{
  text: string;
  shapeType: string;
  bgColor: string;
}> = ({ text, shapeType, bgColor }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        y: [30, 0],
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: "-20%", y: "10%", opacity: 0 }}
      animate={controls}
      className="flex items-center space-x-4 mb-16 p-6 rounded-lg bg-off-white border border-white/10 mx-auto max-w-4xl transition-transform transition-shadow duration-300 hover:shadow-lg hover:scale-105"
    >
      <AbstractShape shapeType={shapeType} bgColor={bgColor} />
      <h2 className="text-lg font-medium text-off-black flex-grow">{text}</h2>
    </motion.div>
  );
};

const AnimatedBlocksPage: React.FC = () => {
  // One block per sentence of your story. Add or remove as you like.
  const blocks = [
    {
      text: "Hi, I'm Khanh, an international student from Hanoi, Vietnam.",
      shapeType: "circle",
      bgColor: "bg-[#f8d7da]", // Soft Blush Pink
    },
    {
      text: "I'm currently an undergraduate student at the University of South Florida.",
      shapeType: "square",
      bgColor: "bg-[#cce3de]", // Light Sage Green
    },
    {
      text: "I'm pursuing a degree in Computer Science in Tampa, Florida.",
      shapeType: "hexagon",
      bgColor: "bg-[#e6e6fa]", // Pale Lavender
    },
    {
      text: "My journey in tech started with a passion for mathematics, problem-solving, and building things that make a difference.",
      shapeType: "triangle",
      bgColor: "bg-[#b3cde0]", // Misty Blue
    },
    {
      text: "During high school, I worked on AI and robotics projects that sparked my interest in exploring the potential of intelligent systems.",
      shapeType: "circle",
      bgColor: "bg-[#ffe5b4]", // Warm Peach
    },
    {
      text: "I'm passionate about artificial intelligence, machine learning, and software development.",
      shapeType: "hexagon",
      bgColor: "bg-[#f8d7da]", // Soft Blush Pink
    },
    {
      text: "Outside of tech, you'll find me on the football field, where I challenge myself to keep improving.",
      shapeType: "square",
      bgColor: "bg-[#cce3de]", // Light Sage Green
    },
    {
      text: "I'm a huge Manchester United fan, and football has taught me the value of discipline, teamwork, and perseverance.",
      shapeType: "triangle",
      bgColor: "bg-[#e6e6fa]", // Pale Lavender
    },
    {
      text: "My goal is to keep learning, build impactful projects, and use technology to solve real-world problems.",
      shapeType: "circle",
      bgColor: "bg-[#b3cde0]", // Misty Blue
    },
    {
      text: "Thanks for stopping by. Let's connect and build something amazing together!",
      shapeType: "hexagon",
      bgColor: "bg-[#ffe5b4]", // Warm Peach
    },
  ];

  return (
    <div className="min-h-screen py-20 mx-6">
      {blocks.map((block, index) => (
        <AnimatedBlock
          key={index}
          text={block.text}
          shapeType={block.shapeType}
          bgColor={block.bgColor}
        />
      ))}
    </div>
  );
};

export default AnimatedBlocksPage;
