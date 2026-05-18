import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Globe,
  Cpu,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Ligne Group",
  description:
    "Learn about Ligne Group's journey, mission, vision, and leadership team. Discover how we've become Nigeria's premier procurement and development partner.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with unwavering ethical standards, ensuring transparency in every transaction.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships that transcend traditional client-vendor dynamics.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We leverage technology and modern solutions to deliver exceptional results.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality in everything we do.",
  },
];

const differentiators = [
  {
    icon: Globe,
    title: "Extensive Network",
    description:
      "Deep relationships with local and international suppliers, manufacturers, and logistics partners.",
  },
  {
    icon: Shield,
    title: "Compliance Excellence",
    description:
      "Stringent adherence to BPP, World Bank guidelines, and international procurement regulations.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven",
    description:
      "Modern supply chain solutions, real-time tracking, and data-driven decision making.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Deep understanding of Nigerian and West African business landscapes combined with global best practices.",
  },
];

const leadership = [
  {
    name: " INNOCENT O.IDEWELE",
    role: "Chairman / CEO",
    rank: 1,
    image: "https://github.com/WadeFC/Ligne-Group-Website/blob/main/public/Chairman.png?raw=true",
    bio: "15+ years in strategic procurement and infrastructure development across Africa.",
  },
  {
    name: "Victoria Godewin Abuhu",
    role: "Adminstrative Officer",
    rank: 2,
    image: "https://github.com/WadeFC/Ligne-Group-Website/blob/main/public/3.jpg.jpeg?raw=true",
    bio: "Former operations lead at a Fortune 500 logistics company with expertise in supply chain optimization.",
  },
  {
    name: "Shallom Osaigede",
    role: "Director",
    rank: 3,
    image: "https://github.com/WadeFC/Ligne-Group-Website/blob/main/public/1.jpg.jpeg?raw=true",
    bio: "Strategic partnerships expert with extensive experience in Pan-African business expansion.",
  },
  {
    name: "Steve Umepa",
    role: "Chairman P.A, Head of Procurement",
    rank: 4,
    image: "https://github.com/WadeFC/Ligne-Group-Website/blob/main/public/7.jpg.jpeg?raw=true",
    bio: "10+ years experience in government and corporate procurement, BPP certified expert.",
  },
  {
    name: "Mathew Nwankwo",
    role: "Accountant",
    rank: 5,
    image: "https://github.com/WadeFC/Ligne-Group-Website/blob/main/public/6.jpg.jpeg?raw=true",
    bio: "Chartered accountant with 18+ years in corporate finance and strategic financial planning.",
  },
  {
    name: "Emmanuel Okoro",
    role: "Head of Enigineering",
    rank: 6,
    image: "https://github.com/WadeFC/Ligne-Group-Website/blob/main/public/4.jpg.jpeg?raw=true",
    bio: "Civil engineer with 15+ years leading major infrastructure projects across West Africa.",
  },
  {
    name: "Linda ",
    role: "Human Resources",
    rank: 7,
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80",
    bio: "Human Resource specialist with expertise in logistics optimization and employee management.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                About Ligne Group
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Building Africa&apos;s Future Through Strategic Partnerships
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Since our founding, we have been at the forefront of Nigeria&apos;s
                development journey, delivering procurement excellence and supply
                chain solutions that power the nation&apos;s growth.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                  Our Story
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  A Journey of Growth and Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in Abuja, Ligne Group emerged from a vision to transform
                    how procurement and supply chain services are delivered in
                    Nigeria and across Africa. What started as a modest procurement
                    consulting firm has grown into one of the region&apos;s most trusted
                    development partners.
                  </p>
                  <p>
                    Our growth mirrors Nigeria&apos;s own development journey. We&apos;ve
                    been privileged to support landmark infrastructure projects,
                    power installations, and telecommunications rollouts that have
                    shaped the nation&apos;s landscape.
                  </p>
                  <p>
                    Today, we continue to evolve, embracing technology and
                    innovation while staying true to our founding principles of
                    integrity, excellence, and partnership.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                    alt="Ligne Group operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
                  <p className="text-4xl font-bold font-serif">15+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-10 rounded-xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver world-class procurement and supply chain solutions that
                  enable our clients to achieve their development goals efficiently,
                  cost-effectively, and with the highest standards of compliance and
                  integrity.
                </p>
              </div>
              <div className="bg-card p-10 rounded-xl border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa&apos;s most trusted procurement and development partner,
                  recognized for our unwavering commitment to excellence, innovation,
                  and the sustainable growth of the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                What Guides Us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Our Core Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Ligne */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                Our Advantage
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Why Choose Ligne Group
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section id="leadership" className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
                Meet Our Team
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Decades of combined experience in procurement, supply chain, and
                infrastructure development across Africa.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {leadership.map((person) => (
                <div key={person.name} className="group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {person.rank}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">{person.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                Discover how Ligne Group can support your next project with our
                comprehensive procurement and supply chain solutions.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch
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
