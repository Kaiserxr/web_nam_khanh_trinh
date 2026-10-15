"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy } from "lucide-react";

// Define the Achievement type
type Achievement = {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
};

// Add your moments here, newest first. Put photos in /public/moments.
// Leave out "image" to show a trophy icon instead of a photo.
const achievements: Achievement[] = [
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
      "Began my B.S. in Artificial Intelligence at the University of South Florida in Tampa, Florida.",
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

// Animation variants
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth entrance
    },
  },
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Alternate layout direction for even/odd items
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`mb-32 first:mt-16 last:mb-16 scroll-mt-16`}
    >
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-center`}
      >
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted p-2">
            {achievement.image ? (
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-contain rounded-md p-4"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Trophy className="h-24 w-24 text-highlight-orange" />
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
              {achievement.date}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold">
              {achievement.title}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioAchievements() {
  return (
    <section className="px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-16">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
