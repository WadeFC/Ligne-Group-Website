import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Resources | Ligne Group",
  description:
    "Industry insights, thought leadership, and resources on procurement, supply chain management, and infrastructure development in Africa.",
};

const featuredArticle = {
  id: 1,
  title: "The Future of Public Procurement in Nigeria",
  excerpt:
    "An in-depth analysis of emerging trends, regulatory changes, and technology adoption shaping public procurement in Nigeria and what it means for stakeholders.",
  image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=80",
  author: "Adebayo Okonkwo",
  date: "January 15, 2026",
  readTime: "8 min read",
  category: "Industry Analysis",
};

const articles = [
  {
    id: 2,
    title: "Supply Chain Resilience in West Africa: Lessons from Recent Disruptions",
    excerpt:
      "How businesses can build more resilient supply chains in the face of global disruptions.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    author: "Chioma Eze",
    date: "January 8, 2026",
    readTime: "6 min read",
    category: "Supply Chain",
  },
  {
    id: 3,
    title: "Navigating BPP Compliance: A Practical Guide",
    excerpt:
      "Essential guidelines for ensuring compliance with Nigeria's Bureau of Public Procurement regulations.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    author: "Ibrahim Musa",
    date: "December 20, 2025",
    readTime: "10 min read",
    category: "Compliance",
  },
  {
    id: 4,
    title: "Digital Transformation in African Infrastructure Development",
    excerpt:
      "How technology is revolutionizing infrastructure project management across the continent.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    author: "Amara Nwosu",
    date: "December 12, 2025",
    readTime: "7 min read",
    category: "Technology",
  },
  {
    id: 5,
    title: "Sustainable Procurement Practices for Nigerian Organizations",
    excerpt:
      "Implementing environmentally and socially responsible procurement strategies.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
    author: "Adebayo Okonkwo",
    date: "November 28, 2025",
    readTime: "5 min read",
    category: "Sustainability",
  },
  {
    id: 6,
    title: "Vendor Management Best Practices in High-Value Procurement",
    excerpt:
      "Strategies for building and maintaining productive vendor relationships.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    author: "Chioma Eze",
    date: "November 15, 2025",
    readTime: "8 min read",
    category: "Procurement",
  },
];

const resources = [
  {
    title: "Procurement Compliance Checklist",
    description: "A comprehensive checklist for BPP-compliant procurement processes.",
    type: "PDF Download",
  },
  {
    title: "Supply Chain Risk Assessment Template",
    description: "Template for evaluating and mitigating supply chain risks.",
    type: "Excel Template",
  },
  {
    title: "Vendor Evaluation Scorecard",
    description: "Standardized framework for objective vendor assessment.",
    type: "PDF Download",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Insights & Resources
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Thought Leadership & Industry Expertise
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Stay informed with our latest insights on procurement, supply chain
                management, and infrastructure development across Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-accent text-sm font-medium">
                  {featuredArticle.category}
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mt-2 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Button asChild>
                  <Link href={`/insights/${featuredArticle.id}`}>
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </section>

        {/* Articles Grid */}
        <section id="news" className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-accent text-xs font-medium">
                      {article.category}
                    </span>
                    <h3 className="font-semibold text-lg text-foreground mt-2 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              Downloadable Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-colors"
                >
                  <span className="text-xs font-medium text-accent">
                    {resource.type}
                  </span>
                  <h3 className="font-semibold text-foreground mt-2 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Stay Informed
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest insights on procurement,
              supply chain, and infrastructure development in Africa.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
