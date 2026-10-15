"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-page text-off-black">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 bg-page mx-4 my-8">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page Not Found</p>
        <div>
          <Link
            href="/"
            className="text-lg font-semibold hover:text-highlight-orange transition duration-300"
          >
            Go back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
