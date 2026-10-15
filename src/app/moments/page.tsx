"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PortfolioAchievements from "./_components/portfolio-achievements";

const MomentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-page flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-off-black mb-4 mt-8">
              Moments - big and small, the ones that matter
            </h2>
            <div className="w-full h-1 bg-highlight-orange mb-16"></div>
          </motion.div>

          {/* Portfolio Achievements Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <PortfolioAchievements />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MomentsPage;
