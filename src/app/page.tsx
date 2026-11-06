"use client";

import React from "react";
import { CopilotPopup } from "@copilotkit/react-ui";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Skills from "./_components/Skills";
import SelectedWork from "./_components/Features";
import { DEFAULT_MESSAGE } from "@/data/constants";
import { site } from "@/data/site";

export default function HomePage() {
  const makeSystemMessage = (
    contextString: string,
    additionalInstructions?: string
  ): string => {
    return `${contextString} ${additionalInstructions || DEFAULT_MESSAGE}`;
  };

  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <div className="pb-12">
          <SelectedWork />
          <About />
          <Skills />
        </div>
      </main>
      <Footer />
      {site.chatbot.runtimeUrl && (
        <div
          style={
            {
              "--copilot-kit-primary-color": "#1A1A1A",
            } as React.CSSProperties
          }
        >
          <CopilotPopup
            labels={{
              title: site.chatbot.title,
              initial: site.chatbot.greeting,
            }}
            makeSystemMessage={makeSystemMessage}
            defaultOpen={false}
          />
        </div>
      )}
    </div>
  );
}
