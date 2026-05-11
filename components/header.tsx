"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Procurement Services", href: "/services/procurement" },
      { name: "Supply Chain & Logistics", href: "/services/supply-chain" },
      { name: "Infrastructure Development", href: "/services/infrastructure" },
      { name: "Consultancy & Advisory", href: "/services/consultancy" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <Image
              src="/logo.jpg"
              alt="Ligne Group logo"
              width={40}
              height={40}
              priority
            />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-foreground tracking-tight leading-none">
                  LIGNE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  Group
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground border border-yellow px-3 py-2 rounded-md
                  hover:text-background hover:bg-yellow-500 hover:border-yellow
                  transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button asChild variant="outline">
              <Link href="/portal">Staff Portal</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Request Proposal</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                      <Image
                        src="/logo.jpg"
                        alt="Ligne Group logo"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <span className="font-serif font-bold text-lg">LIGNE GROUP</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) =>
                    item.children ? (
                      <div key={item.name} className="flex flex-col gap-2">
                        <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between text-sm font-semibold text-muted-foreground
                          border border-yellow px-3 py-2 rounded-md
                          hover:text-background hover:bg-yellow-500 hover:border-yellow
                          transition-colors"
                        >
                          {item.name}
                             <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                servicesOpen ? "rotate-180" : ""
                              }`}
                        />
                        
                        </button>

                        {servicesOpen && (
                        <div className="flex flex-col gap-2 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="text-sm text-muted-foreground hover:text-foreground active:text-foreground focus:text-foreground transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setServicesOpen(false);  
                              }}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                          className="text-sm font-medium text-muted-foreground border border-yellow px-3 py-2 rounded-md
                          hover:text-background hover:bg-yellow-500 hover:border-yellow
                          active:bg-yellow-500 focus:bg-yellow-500
                          transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </nav>
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/portal" onClick={() => setMobileOpen(false)}>
                      Staff Portal
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Request Proposal
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
