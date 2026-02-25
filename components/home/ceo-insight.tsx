import Image from "next/image";
import { Quote } from "lucide-react";

export function CeoInsight() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="CEO of Ligne Group"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-semibold text-lg">Adebayo Okonkwo</p>
                <p className="text-sm text-primary-foreground/70">
                  Managing Director / CEO
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="lg:col-span-8">
            <Quote className="w-12 h-12 text-accent mb-6 opacity-60" />
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-8">
              <span className="text-balance">
                Our vision is not just to be a procurement company, but to be the
                trusted partner that helps build Africa&apos;s future infrastructure.
                Every project we undertake is a step towards that vision.
              </span>
            </blockquote>
            <p className="text-primary-foreground/70 leading-relaxed max-w-2xl">
              At Ligne Group, we believe in creating lasting partnerships that
              transcend traditional client-vendor relationships. We invest in
              understanding your goals and align our expertise to ensure your
              success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
