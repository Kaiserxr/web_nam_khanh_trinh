import React from "react";
import Image from "next/image";
import { Band } from "@/components/PageShell";

type Achievement = {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
};

// Add your moments here, newest first. Put photos in /public/moments.
// "image" is optional (a photo or logo); leave it out for a text-only moment.
const achievements: Achievement[] = [
  {
    id: "7",
    title: "Research Assistant at ERA Lab",
    date: "October 2026",
    description:
      "Joined ERA Lab at the University of South Florida as an Undergraduate Research Assistant, researching 3D sonar-based object detection from underwater point clouds, sparse voxel attention, and multi-modal fusion architectures.",
    image: "/logos/era-lab.png",
  },
  {
    id: "6",
    title: "Technical Lead at SCP",
    date: "October 2026",
    description:
      "Became the Technical Lead of the Society of Competitive Programmers (SCP) at the University of South Florida.",
    image: "/moments/SCP.jpg",
  },
  {
    id: "5",
    title: "Starting at the University of South Florida",
    date: "Fall 2026",
    description:
      "Began my B.S. in Computer Science at the University of South Florida in Tampa, Florida.",
    image: "/moments/USF.png",
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
          <ol className="space-y-12">
            {group.items.map((a) => (
              <li
                key={a.id}
                className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_11rem] md:grid-cols-[minmax(0,1fr)_14rem]"
              >
                <div>
                  <p className="text-sm font-medium text-dark-grey">{a.date}</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-off-black sm:text-2xl">
                    {a.title}
                  </h3>
                  <p className="mt-3 max-w-[60ch] leading-relaxed text-dark-grey">
                    {a.description}
                  </p>
                </div>
                {a.image && (
                  <div className="relative aspect-[4/3] w-full max-w-[14rem] overflow-hidden rounded-lg bg-off-white">
                    <Image
                      src={a.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 224px, 176px"
                      className="object-contain p-3"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Band>
      ))}
    </div>
  );
}
