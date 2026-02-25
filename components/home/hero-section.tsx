"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: currentImage === index ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Excellence in Procurement & Development
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Strategic Procurement & Development Partners for Africa&apos;s Growth
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl">
            We don&apos;t just procure materials; we de-risk your project and ensure
            its timely success. Delivering excellence across Nigeria and Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
            >
              <Link href="/services">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 bg-transparent"
            >
              <Link href="/contact">Contact for a Proposal</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-primary-foreground/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-scroll-down" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
