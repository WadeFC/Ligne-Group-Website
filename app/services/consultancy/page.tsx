import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  FileText,
  Search,
  Settings,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Consultancy & Advisory | Ligne Group",
  description:
    "Expert guidance on procurement strategy, bid preparation, process optimization, and capacity building for organizations across Africa.",
};

const services = [
  {
    icon: FileText,
    title: "Bid Preparation & Support",
    description:
      "Expert assistance in preparing winning bids and proposals for government and private sector tenders.",
  },
  {
    icon: Search,
    title: "Procurement Process Audit",
    description:
      "Comprehensive review of your procurement processes to identify improvements and ensure compliance.",
  },
  {
    icon: Settings,
    title: "Contract Management Advisory",
    description:
      "Guidance on contract negotiation, administration, and dispute resolution strategies.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Training",
    description:
      "Training programs for procurement teams on best practices, compliance, and modern tools.",
  },
];

const benefits = [
  "Access to industry-leading procurement expertise",
  "Improved win rates on competitive tenders",
  "Enhanced procurement process efficiency",
  "Reduced compliance risks and audit findings",
  "Knowledge transfer and team development",
  "Customized solutions for your organization",
];

export default function ConsultancyPage() {
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
                  Consultancy & Advisory
                </h1>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                  Expert guidance on procurement strategy, process optimization, and
                  regulatory compliance to elevate your organization&apos;s
                  capabilities.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Consultancy Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                Advisory Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                How We Can Help
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card p-8 rounded-xl border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Business Consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                  Benefits
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why Work With Our Consultants
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
              Elevate Your Procurement Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Partner with our expert consultants to transform your procurement
              processes and achieve better outcomes.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Book a Consultation
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
