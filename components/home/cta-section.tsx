import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 sm:p-12 lg:p-16 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Whether you&apos;re planning a major infrastructure project or seeking
              strategic procurement support, we&apos;re here to help. Let&apos;s discuss
              how we can contribute to your success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/contact">
                  Request a Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent"
              >
                <Link href="/contact#rfp">
                  <FileText className="mr-2 h-5 w-5" />
                  RFP Submission Guidelines
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
