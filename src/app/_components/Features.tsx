"use client";

import React from "react";
import { Eye, BarChart3, Bot, TrainFront, type LucideIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Projects shown in the carousel on the home page.
// Give a project an "image" (a file in /public) to show a picture instead of the icon.
const projects: {
  title: string;
  description: string;
  image?: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Diabetic Retinopathy Detection",
    description:
      "A machine-learning pipeline that detects diabetic retinopathy from retinal images. Gold Medal, Advanced Innovation Global Competition, Singapore.",
    icon: Eye,
  },
  {
    title: "Hotel Booking Cancellation Prediction",
    description:
      "Published research (IJSRM) comparing five ML algorithms on 36,300 bookings; Random Forest reached 91.0% accuracy.",
    icon: BarChart3,
  },
  {
    title: "AI-Activated Robotic Arm",
    description:
      "A robotic arm driven by YOLO object detection. Gold Medal, World Invention Creativity Olympic and Conference, Korea.",
    icon: Bot,
  },
  {
    title: "ECO SMART RAIL TRANSIT",
    description:
      "An AI railway safety monitoring system that detects hazards on the tracks. Gold Medal, INOVA 2025, Croatia.",
    icon: TrainFront,
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold text-off-black">
          Projects and Works
        </h2>
        <Carousel className="relative mt-8" opts={{ loop: true }}>
          <CarouselContent className="flex">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="relative flex-shrink-0 basis-full sm:basis-[48%] lg:basis-[30%]"
              >
                <div className="overflow-hidden border rounded-lg shadow-lg bg-off-white hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform duration-300 h-96">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-page/60">
                      <project.icon className="w-20 h-20 text-highlight-orange" />
                    </div>
                  )}
                  <div className="p-4 h-48 flex flex-col justify-between">
                    <h3 className="text-xl font-medium text-off-black">
                      {project.title}
                    </h3>
                    <p className="text-dark-grey mt-2 overflow-hidden overflow-ellipsis">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation for larger screens */}
          <CarouselPrevious className="hidden sm:flex absolute -left-8 top-1/2 transform -translate-y-1/2 bg-off-white text-off-black p-2 rounded-full shadow-lg cursor-pointer" />
          <CarouselNext className="hidden sm:flex absolute -right-8 top-1/2 transform -translate-y-1/2 bg-off-white text-off-black p-2 rounded-full shadow-lg cursor-pointer" />

          {/* Carousel Navigation for mobile screens */}
          <CarouselPrevious className="flex sm:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-off-white text-off-black p-2 rounded-full shadow-lg cursor-pointer" />
          <CarouselNext className="flex sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-off-white text-off-black p-2 rounded-full shadow-lg cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProjects;
