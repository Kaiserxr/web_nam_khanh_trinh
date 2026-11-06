import React from "react";
import Image from "next/image";
import { Band } from "@/components/PageShell";

type Achievement = {
  id: string;
  title: string;
  date: string;
  description: string;
  // Optional picture. A "photo" is shown large beside the text;
  // a "logo" is shown as a small mark next to the title.
  image?: { src: string; alt: string; kind: "photo" | "logo" };
};

// Add your moments here, newest first. Put photos in /public/moments.
// "image" is optional; leave it out for a text-only moment.
const achievements: Achievement[] = [
  {
    id: "7",
    title: "Research Assistant at ERA Lab",
    date: "October 2026",
    description:
      "Joined ERA Lab at the University of South Florida as an Undergraduate Research Assistant, researching 3D sonar-based object detection from underwater point clouds, sparse voxel attention, and multi-modal fusion architectures.",
    image: { src: "/logos/era-lab.png", alt: "ERA Lab logo", kind: "logo" },
  },
  {
    id: "6",
    title: "Technical Lead at SCP",
    date: "October 2026",
    description:
      "Became the Technical Lead of the Society of Competitive Programmers (SCP) at the University of South Florida.",
    image: {
      src: "/moments/SCP.jpg",
      alt: "Society of Competitive Programmers logo",
      kind: "logo",
    },
  },
  {
    id: "5",
    title: "Starting at the University of South Florida",
    date: "Fall 2026",
    description:
      "Began my B.S. in Computer Science at the University of South Florida in Tampa, Florida.",
    image: {
      src: "/moments/USF.png",
      alt: "University of South Florida logo",
      kind: "logo",
    },
  },
  {
    id: "4",
    title: "Gold Medal at INOVA 2025, Croatia",
    date: "September 2025",
    description:
      "Won a Gold Medal at INOVA 2025 (49th International Invention Show) for ECO SMART RAIL TRANSIT, an AI-based railway safety monitoring system.",
  },
  {
    id: "3",
    title: "First research publication",
    date: "September 2025",
    description:
      "Published research in IJSRM comparing five machine-learning algorithms for predicting hotel booking cancellations; Random Forest reached 91.0% accuracy.",
  },
  {
    id: "2",
    title: "Gold Medal at WICO 2025, Korea",
    date: "July 2025",
    description:
      "Won a Gold Medal at the World Invention Creativity Olympic and Conference for an AI-activated robotic arm driven by YOLO object detection.",
  },
  {
    id: "1",
    title: "Gold Medal at AIGC 2025, Singapore",
    date: "May 2025",
    description:
      "Won a Gold Medal at the Advanced Innovation Global Competition for a machine-learning system that detects diabetic retinopathy from retinal images.",
  },
];

// Group moments by the year at the end of their date ("Fall 2026" -> 2026).
function byYear(items: Achievement[]) {
  const groups: { year: string; items: Achievement[] }[] = [];
  for (const item of items) {
    const year = item.date.match(/\d{4}/)?.[0] ?? "Earlier";
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.items.push(item);
    else groups.push({ year, items: [item] });
  }
  return groups;
}

export default function PortfolioAchievements() {
  return (
    <div className="divide-y divide-light-grey">
      {byYear(achievements).map((group) => (
        <Band
          key={group.year}
          id={`moments-${group.year}`}
          label={<span className="tabular-nums">{group.year}</span>}
          className="py-12"
        >
          <ol className="divide-y divide-light-grey/60">
            {group.items.map((a) => {
              const photo = a.image?.kind === "photo" ? a.image : undefined;
              const logo = a.image?.kind === "logo" ? a.image : undefined;
              return (
                <li
                  key={a.id}
                  className={`grid gap-x-10 gap-y-5 py-8 first:pt-0 last:pb-0 ${
                    photo ? "md:grid-cols-[minmax(0,1fr)_17rem]" : ""
                  }`}
                >
                  <div>
                    <p className="text-sm font-medium text-dark-grey">{a.date}</p>
                    <div className="mt-1 flex items-start gap-3">
                      {logo && (
                        <span className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-md bg-off-white">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            sizes="40px"
                            className="object-contain"
                          />
                        </span>
                      )}
                      <h3 className="text-xl font-semibold tracking-tight text-off-black sm:text-2xl">
                        {a.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-[60ch] leading-relaxed text-dark-grey">
                      {a.description}
                    </p>
                  </div>
                  {photo && (
                    <div className="relative aspect-[5/4] w-full max-w-sm overflow-hidden rounded-lg bg-off-white md:max-w-none">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 272px, (min-width: 384px) 384px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </Band>
      ))}
    </div>
  );
}
