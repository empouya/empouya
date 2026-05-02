import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import { profile } from "@/content/site/profile";

const siteUrl = "https://empouya.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Eid Mohammad Ahmadi, a Full Stack Engineer focused on Python, React, and scalable backend systems.",
  keywords: [
    "Eid Mohammad Ahmadi",
    "Full Stack Engineer",
    "Python Developer",
    "React Developer",
    "Next.js Portfolio",
    "Django",
    "FastAPI",
    "AI Applications",
    "Barcelona Developer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description:
      "Full Stack Engineer building scalable applications with Python, React, and AI-focused engineering.",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/seo/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description:
      "Full Stack Engineer building scalable applications with Python, React, and AI-focused engineering.",
    images: ["/seo/og-default.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
