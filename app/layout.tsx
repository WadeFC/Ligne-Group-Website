import React from "react"
import type { Metadata, Viewport } from "next";
import RouteLoader from "@/components/route-loader";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ligne Group | Strategic Procurement & Development Partners for Africa",
  description:
    "Ligne Group is a leading Nigerian conglomerate specializing in General Procurement, Supply Chain Management, and Infrastructure Development. Serving public and private sector clients across Africa.",

    keywords: [
    "procurement company Nigeria",
    "Abuja supply chain management",
    "infrastructure development partner Africa",
    "Nigerian procurement services",
    "supply chain logistics Nigeria",
    "West African procurement",
  ],
  authors: [{ name: "Ligne Group Ltd" }],
  openGraph: {
    title: "Ligne Group | Strategic Procurement & Development Partners",
    description:
      "Premier procurement, supply chain, and infrastructure development partner in Nigeria and Africa.",
    url: "https://lignegroup.org",
    siteName: "Ligne Group",
    locale: "en_NG",
    type: "website",
  },
  icons:{
    icon:"/favicon.ico"
  },
  generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <RouteLoader/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
