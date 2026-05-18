import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const footerNav = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Leadership Team", href: "/about#leadership" },
    { name: "Our Story", href: "/about#story" },
    { name: "Careers", href: "/" },
  ],
  services: [
    { name: "Procurement Services", href: "/services/procurement" },
    { name: "Supply Chain & Logistics", href: "/services/supply-chain" },
    { name: "Infrastructure Development", href: "/services/infrastructure" },
    { name: "Consultancy & Advisory", href: "/services/consultancy" },
  ],
  resources: [
    { name: "Projects", href: "/projects" },
    { name: "Case Studies", href: "/projects#case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "News", href: "/insights#news" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded flex items-center justify-center">
                  <Image
                      src="/logo.jpg"
                      alt="Ligne Group logo"
                      width={40}
                      height={40}
                      className="rounded"
                    />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-primary-foreground tracking-tight leading-none">
                  LIGNE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-primary-foreground/70 uppercase">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
              Strategic Procurement & Development Partners for Africa&apos;s Growth.
              Building the infrastructure of tomorrow through excellence in
              procurement and supply chain solutions.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  No 3 Kaltunga, Garki II
                  <br />
                  Abuja, FCT, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+2349012345678"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +234 901 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:info@lignegroup.org"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@lignegroup.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Ligne Group Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
