import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  HardHat,
  Zap,
  Radio,
  Building,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Infrastructure Development | Ligne Group",
  description:
    "Supporting nation-building through procurement and supply for construction, power, and telecommunications projects across Nigeria and Africa.",
};

const sectors = [
  {
    icon: HardHat,
    title: "Construction & Civil Works",
    description:
      "Procurement and supply of construction materials, equipment, and machinery for roads, bridges, and buildings.",
  },
  {
    icon: Zap,
    title: "Power & Energy",
    description:
      "Equipment supply for power generation, transmission, and distribution projects including renewable energy.",
  },
  {
    icon: Radio,
    title: "Telecommunications",
    description:
      "Infrastructure supply for telecom networks, data centers, and communication systems.",
  },
  {
    icon: Building,
    title: "Public Infrastructure",
    description:
      "Support for government infrastructure including schools, hospitals, and administrative facilities.",
  },
];

const projects = [
  { metric: "$2B+", label: "Total Project Value" },
  { metric: "150+", label: "Infrastructure Projects" },
  { metric: "36", label: "States Covered" },
  { metric: "98%", label: "On-Time Delivery" },
];

export default function InfrastructurePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm text-accent hover:text-accent/80 mb-4"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  All Services
                </Link>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
                  Infrastructure Development
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                  Supporting nation-building through strategic procurement and
                  supply for critical infrastructure projects across Nigeria and
                  Africa.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Infrastructure Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-accent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {projects.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-4xl font-bold text-accent-foreground mb-2 font-serif">
                    {item.metric}
                  </div>
                  <div className="text-sm text-accent-foreground/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                Sectors We Support
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Infrastructure Expertise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectors.map((sector) => (
                <div
                  key={sector.title}
                  className="bg-card p-8 rounded-xl border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <sector.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                  Our Approach
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  How We Support Infrastructure Projects
                </h2>
                <ul className="space-y-4">
                  {[
                    "Comprehensive needs assessment and planning",
                    "Strategic sourcing of quality materials and equipment",
                    "Logistics coordination for remote project sites",
                    "Just-in-time delivery to minimize storage costs",
                    "Technical support and after-sales service",
                    "Compliance with all regulatory requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                  alt="Infrastructure Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Building Africa&apos;s Future Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Partner with us for your next infrastructure project and experience
              the Ligne Group difference.
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
