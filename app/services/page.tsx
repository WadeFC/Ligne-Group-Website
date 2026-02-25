import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  FileCheck,
  Globe,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services | Ligne Group",
  description:
    "Comprehensive procurement, supply chain, infrastructure development, and consultancy services. Discover how Ligne Group can support your project.",
};

const services = [
  {
    icon: FileCheck,
    title: "Procurement Services",
    slug: "procurement",
    description:
      "End-to-end procurement solutions with stringent compliance to local and international regulations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    features: [
      "Strategic sourcing and vendor management",
      "Tender preparation and evaluation",
      "Contract negotiation and management",
      "BPP and World Bank compliance",
    ],
  },
  {
    icon: Globe,
    title: "Supply Chain & Logistics",
    slug: "supply-chain",
    description:
      "Integrated supply chain solutions ensuring timely delivery and optimal cost efficiency.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    features: [
      "Inventory management systems",
      "Warehousing and distribution",
      "Customs clearance and freight",
      "Last-mile delivery solutions",
    ],
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    slug: "infrastructure",
    description:
      "Supporting nation-building through procurement and supply for critical infrastructure projects.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    features: [
      "Construction materials procurement",
      "Power and energy equipment supply",
      "Telecommunications infrastructure",
      "Project logistics coordination",
    ],
  },
  {
    icon: Briefcase,
    title: "Consultancy & Advisory",
    slug: "consultancy",
    description:
      "Expert guidance on procurement strategy, process optimization, and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    features: [
      "Bid preparation and support",
      "Procurement process audit",
      "Contract management advisory",
      "Capacity building and training",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Our Services
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Comprehensive Solutions for Your Development Goals
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                From strategic procurement to infrastructure support, we deliver
                end-to-end solutions that drive efficiency and ensure project
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-accent font-medium text-sm uppercase tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href={`/services/${service.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-2xl p-12 lg:p-16 text-primary-foreground text-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Every project is unique. Contact us to discuss how we can tailor
                our services to meet your specific requirements.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
