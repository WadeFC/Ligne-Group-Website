import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  FileSearch,
  FileCheck,
  FileSignature,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Procurement Services | Ligne Group",
  description:
    "End-to-end procurement services including strategic sourcing, tender management, vendor evaluation, and compliance assurance.",
};

const capabilities = [
  {
    icon: FileSearch,
    title: "Strategic Sourcing",
    description:
      "Market research, supplier identification, and evaluation to find the best sources for your requirements.",
  },
  {
    icon: FileCheck,
    title: "Tender Management",
    description:
      "Complete tender preparation, publication, evaluation, and contract award management.",
  },
  {
    icon: FileSignature,
    title: "Contract Management",
    description:
      "Negotiation, drafting, and administration of procurement contracts for optimal outcomes.",
  },
  {
    icon: Shield,
    title: "Compliance Assurance",
    description:
      "Ensuring all procurements adhere to BPP regulations, World Bank guidelines, and international best practices.",
  },
];

const benefits = [
  "Reduced procurement costs through strategic sourcing",
  "Faster procurement cycles with streamlined processes",
  "Access to pre-qualified vendor networks",
  "Risk mitigation through due diligence",
  "Transparent and auditable processes",
  "Technology-enabled tracking and reporting",
];

export default function ProcurementPage() {
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
                  Procurement Services
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                  End-to-end procurement solutions with stringent compliance to
                  local and international regulations. We de-risk your procurement
                  and ensure optimal value.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contact">
                    Request Procurement Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Procurement Services"
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
                Comprehensive Procurement Solutions
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
              <div>
                <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                  Why Choose Us
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Benefits of Our Procurement Services
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
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Process
                </h3>
                <ol className="space-y-6">
                  {[
                    "Requirements Analysis",
                    "Market Research & Sourcing",
                    "Tender Preparation & Publication",
                    "Bid Evaluation & Selection",
                    "Contract Award & Management",
                  ].map((step, index) => (
                    <li key={step} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-foreground font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Optimize Your Procurement?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us to discuss your procurement needs and discover how we can
              help you achieve better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
