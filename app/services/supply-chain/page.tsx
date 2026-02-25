import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Package,
  Warehouse,
  Truck,
  Ship,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Supply Chain & Logistics | Ligne Group",
  description:
    "Integrated supply chain solutions including inventory management, warehousing, transportation, customs clearance, and last-mile delivery.",
};

const capabilities = [
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Real-time inventory tracking, demand forecasting, and optimized stock management systems.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description:
      "Strategic warehousing solutions with modern facilities across Nigeria for efficient distribution.",
  },
  {
    icon: Truck,
    title: "Transportation & Freight",
    description:
      "Multi-modal transportation solutions including road, rail, and air freight options.",
  },
  {
    icon: Ship,
    title: "Customs & Clearance",
    description:
      "Expert customs documentation, clearance services, and regulatory compliance management.",
  },
];

const benefits = [
  "Reduced lead times and faster delivery",
  "Cost optimization through route planning",
  "Real-time tracking and visibility",
  "Flexible and scalable solutions",
  "Risk mitigation and contingency planning",
  "24/7 support and communication",
];

export default function SupplyChainPage() {
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
                  Supply Chain & Logistics
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                  Integrated supply chain solutions ensuring timely delivery and
                  optimal cost efficiency across Nigeria and West Africa.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contact">
                    Discuss Your Logistics Needs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Supply Chain Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                Our Capabilities
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                End-to-End Supply Chain Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-card p-8 rounded-xl border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <cap.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                  alt="Logistics Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                  Why Choose Us
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Benefits of Our Supply Chain Services
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Streamline Your Supply Chain
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us to discuss how we can optimize your supply chain for
              better efficiency and cost savings.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
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
