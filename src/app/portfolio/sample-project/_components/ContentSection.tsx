"use client";

import React from "react";
import Link from "next/link";
import { Lens } from "@/components/magicui/lens";

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  imageUrl?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  subtitle,
  content,
  imageUrl,
}) => {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold text-off-black mb-4">{title}</h3>
      {subtitle && (
        <h4 className="text-lg font-medium text-dark-grey mb-4">{subtitle}</h4>
      )}
      {imageUrl && (
        <Link
          href={imageUrl}
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lens>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-96 object-contain mb-6 rounded-lg shadow-md hover:shadow-xl cursor-pointer"
            />
          </Lens>
        </Link>
      )}
      <ul className="list-disc list-inside text-off-black text-medium space-y-2">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ContentSection;
