"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactInfo from "./_components/ContactInformation";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-page flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-off-black mb-4 mt-8">
            Contact Me
          </h2>
          <div className="w-full h-1 bg-highlight-orange mb-16"></div>
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
