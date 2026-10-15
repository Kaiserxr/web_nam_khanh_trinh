"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "./_components/Hero";
import ArrowDown from "@/components/ArrowDown";
import AnimatedBlocksPage from "./_components/AnimatedBlock";

const AboutPage: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="items-center justify-center bg-page">
      <Navbar />
      <ArrowDown isVisible={showArrow} />
      <HeroSection />
      <AnimatedBlocksPage />
      <Footer />
    </div>
  );
};

export default AboutPage;
