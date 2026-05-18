"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  "All",
  "Infrastructure",
  "Energy",
  "Construction",
  "Technology",
  "Public Sector",
];

const projects = [
  {
    id: 1,
    title: "Federal Highway Infrastructure Project",
    category: "Infrastructure",
    description:
      "Comprehensive procurement and supply chain management for a 200km federal highway development connecting three states.",
    image: "https://images.pexels.com/photos/20852173/pexels-photo-20852173.jpeg",
    metrics: { value: "$45M", label: "Project Value" },
    challenge:
      "Complex logistics across remote terrains with tight delivery schedules.",
    solution:
      "Implemented staged delivery with mobile warehousing and real-time tracking.",
    result: "Completed 2 months ahead of schedule with 15% cost savings.",
  },
  {
    id: 2,
    title: "National Power Grid Expansion",
    category: "Energy",
    description:
      "End-to-end procurement services for power transmission equipment across Northern Nigeria.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    metrics: { value: "18 Months", label: "Delivered On Time" },
    challenge: "Sourcing specialized equipment with strict technical specifications.",
    solution: "Engaged global suppliers with local support partnerships.",
    result: "Successfully equipped 45 substations across 12 states.",
  },
  {
    id: 3,
    title: "Government Administrative Complex",
    category: "Construction",
    description:
      "Strategic procurement and materials supply for a state-of-the-art government complex in Abuja.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    metrics: { value: "35%", label: "Cost Savings" },
    challenge: "High-quality materials requirement with budget constraints.",
    solution: "Value engineering and strategic bulk purchasing agreements.",
    result: "Delivered premium quality while achieving significant savings.",
  },
  {
    id: 4,
    title: "Telecom Network Expansion",
    category: "Technology",
    description:
      "Supply chain solutions for nationwide telecommunications infrastructure rollout.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    metrics: { value: "500+", label: "Sites Equipped" },
    challenge: "Simultaneous deployment across multiple remote locations.",
    solution: "Regional distribution hubs with dedicated logistics teams.",
    result: "Enabled connectivity for 5 million new subscribers.",
  },
  {
    id: 5,
    title: "State Healthcare Infrastructure",
    category: "Public Sector",
    description:
      "Procurement of medical equipment and supplies for 15 general hospitals across a state.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    metrics: { value: "15", label: "Hospitals Equipped" },
    challenge: "Diverse equipment requirements with strict medical standards.",
    solution: "Partnered with certified medical equipment suppliers globally.",
    result: "Improved healthcare capacity for 3 million residents.",
  },
  {
    id: 6,
    title: "Industrial Zone Development",
    category: "Infrastructure",
    description:
      "Complete procurement support for a new industrial free trade zone development.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    metrics: { value: "$120M", label: "Total Value" },
    challenge: "Multi-phase project requiring coordinated procurement.",
    solution: "Integrated project management with phased delivery schedules.",
    result: "On track to create 10,000 new jobs upon completion.",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Our Projects
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Delivering Excellence Across Africa
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Explore our portfolio of successful projects spanning
                infrastructure, energy, technology, and public sector development.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="case-studies" className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-accent">
                        {project.metrics.value}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.metrics.label}
                      </span>
                    </div>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/projects/${project.id}`}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how Ligne Group can support your next project with
              our comprehensive procurement and supply chain solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
