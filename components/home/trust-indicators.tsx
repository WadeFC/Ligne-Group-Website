import {
  Building,
  Zap,
  HardHat,
  Radio,
  Shield,
  Award,
} from "lucide-react";

const sectors = [
  { name: "Government", icon: Building },
  { name: "Energy", icon: Zap },
  { name: "Construction", icon: HardHat },
  { name: "Telecom", icon: Radio },
];

const certifications = [
  { name: "BPP Certified", icon: Shield },
  { name: "ISO 9001:2015", icon: Award },
  { name: "World Bank Compliant", icon: Shield },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Delivered" },
  { value: "$2B+", label: "Procurement Value" },
  { value: "98%", label: "Client Satisfaction" },
];

export function TrustIndicators() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 font-serif">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Sectors & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sectors We Serve */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
              Sectors We Serve
            </h3>
            <div className="grid grid-cols-2 gap-1">
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <sector.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
              Certifications & Compliance
            </h3>
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 px-5 py-3 bg-secondary rounded-lg border border-border"
                >
                  <cert.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium text-foreground text-sm">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              We operate with stringent adherence to local and international
              procurement regulations, ensuring transparency, integrity, and
              compliance in every transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
