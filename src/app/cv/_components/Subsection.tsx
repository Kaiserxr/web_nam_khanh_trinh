"use client";

import React from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import {
  CalendarIcon,
  SewingPinIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons"; // Assuming you have these icons

interface SubsectionProps {
  title: string;
  content: string[];
  isOpen: boolean;
  onToggle: () => void;
  time?: string;
  location?: string;
  link?: string;
}

const Subsection: React.FC<SubsectionProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  time,
  location,
  link,
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-2 bg-off-white rounded-lg border-b-2 border-white/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-highlight-orange hover:bg-white/10 hover:border hover:border-highlight-orange hover:shadow-lg hover:scale-105 transition-transform transition-shadow transition-border duration-300"
      >
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-semibold text-off-black">{title}</h3>
          <div className="flex items-center space-x-4">
            {time && (
              <div className="flex items-center text-dark-grey">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>{time}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center text-dark-grey">
                <SewingPinIcon className="w-4 h-4 mr-2" />
                <span>{location}</span>
              </div>
            )}
            {link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                passHref
                className="flex items-center text-dark-grey"
              >
                <ExternalLinkIcon className="w-4 h-4 mr-2" />
                <span>{link}</span>
              </Link>
            )}
          </div>
        </div>
        <span>
          {isOpen ? (
            <ChevronDownIcon className="w-5 h-5" />
          ) : (
            <ChevronRightIcon className="w-5 h-5" />
          )}
        </span>
      </button>
      {isOpen && (
        <ul className="mt-2 pl-6 list-disc list-outside space-y-1 py-4">
          {content.map((item, index) => (
            <li key={index} className="text-off-black text-medium">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Subsection;
