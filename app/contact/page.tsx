"use client";

import React from "react"

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
  FileText,
} from "lucide-react";

const serviceOptions = [
  "Procurement Services",
  "Supply Chain & Logistics",
  "Infrastructure Development",
  "Consultancy & Advisory",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["Plot 1234, Maitama District", "Abuja, FCT, Nigeria"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+234 901 234 5678", "+234 809 876 5432"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@lignegroup.org", "proposals@lignegroup.org"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
  },
];

const rfpGuidelines = [
  "Company profile and background",
  "Detailed project scope and requirements",
  "Technical specifications if applicable",
  "Preferred timeline and delivery schedule",
  "Budget parameters or range",
  "Evaluation criteria and selection process",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Contact Us
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
                {"Let's Build Something Great Together"}
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Ready to discuss your project? Our team is here to help you achieve
                your procurement and development goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                {submitted ? (
                  <div className="bg-secondary p-8 rounded-xl text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. Our team will get back to you
                      within 24-48 business hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+234..." />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Organization *</Label>
                        <Input
                          id="company"
                          required
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option} value={option.toLowerCase()}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.lines.map((line) => (
                          <p key={line} className="text-sm text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78589277954!2d7.398573978515625!3d9.0578851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1706352000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ligne Group Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RFP Guidelines */}
        <section id="rfp" className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  RFP Submission Guidelines
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                To help us provide you with an accurate and timely proposal, please
                ensure your Request for Proposal (RFP) includes the following
                information:
              </p>
              <div className="bg-card p-8 rounded-xl border border-border">
                <ul className="space-y-4">
                  {rfpGuidelines.map((item, index) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Submit your RFP documents to:
                  </p>
                  <a
                    href="mailto:proposals@lignegroup.org"
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                  >
                    proposals@lignegroup.org
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
