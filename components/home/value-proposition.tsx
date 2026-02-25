import {
  FileCheck,
  Globe,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: FileCheck,
    title: "Strategic Procurement",
    description:
      "End-to-end procurement solutions with stringent compliance to BPP, World Bank guidelines, and international best practices.",
    href: "/services/procurement",
  },
  {
    icon: Globe,
    title: "Integrated Supply Chain",
    description:
      "Modern logistics and supply chain management solutions ensuring timely delivery across Nigeria and West Africa.",
    href: "/services/supply-chain",
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    description:
      "Supporting nation-building through procurement and supply for construction, power, and telecommunications projects.",
    href: "/services/infrastructure",
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Core Competencies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Delivering excellence through strategic partnerships and operational expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Link
              key={value.title}
              href={value.href}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <span className="text-5xl font-serif font-bold text-border/50 absolute top-6 right-6">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {value.description}
                </p>
                <div className="flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
