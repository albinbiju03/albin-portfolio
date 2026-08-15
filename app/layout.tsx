import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Albin Biju | Full Stack Developer",
    template: "%s | Albin Biju",
  },

  description:
    "Albin Biju is a Full Stack Developer specializing in React, Next.js, Python, Django, TypeScript, and modern web development.",

  keywords: [
    "Albin Biju",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Django Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Bangalore Developer",
  ],

  authors: [
    {
      name: "Albin Biju",
    },
  ],

  creator: "Albin Biju",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Albin Biju | Full Stack Developer",

    description:
      "Full Stack Developer building modern, responsive, and user-focused web applications.",

    siteName: "Albin Biju Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Albin Biju - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Albin Biju | Full Stack Developer",

    description:
      "Full Stack Developer building modern web applications with React, Next.js, Python and Django.",

    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}