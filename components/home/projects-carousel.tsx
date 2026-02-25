"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Federal Highway Infrastructure Project",
    category: "Infrastructure",
    description:
      "Comprehensive procurement and supply chain management for a 200km federal highway development project.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
    metrics: { value: "$45M", label: "Project Value" },
  },
  {
    id: 2,
    title: "National Power Grid Expansion",
    category: "Energy",
    description:
      "End-to-end procurement services for power transmission equipment across Northern Nigeria.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    metrics: { value: "18 Months", label: "Delivered On Time" },
  },
  {
    id: 3,
    title: "Government Administrative Complex",
    category: "Construction",
    description:
      "Strategic procurement and materials supply for a state-of-the-art government complex in Abuja.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    metrics: { value: "35%", label: "Cost Savings" },
  },
  {
    id: 4,
    title: "Telecom Network Expansion",
    category: "Technology",
    description:
      "Supply chain solutions for nationwide telecommunications infrastructure rollout.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    metrics: { value: "500+", label: "Sites Equipped" },
  },
];

export function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
              Featured Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Highlighted Projects
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit bg-transparent">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-xl overflow-hidden">
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-4xl font-bold text-accent">
                          {project.metrics.value}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {project.metrics.label}
                        </span>
                      </div>
                      <Button asChild className="w-fit">
                        <Link href={`/projects/${project.id}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-accent w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
