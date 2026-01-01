// File: lib/metadata.ts - Centralized SEO and social sharing configuration for the AddisPet platform.
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://addispet.vercel.app";

export const siteMetadata: Metadata = {
  title: {
    default: "AddisPet | Best Pet Shop & Adoption in Addis Ababa",
    template: "%s | AddisPet",
  },
  description:
    "AddisPet is Ethiopia's modern pet platform. Shop premium pet supplies, explore adoption opportunities, and connect with the pet community in Addis Ababa.",
  keywords: [
    "Addis Ababa pets",
    "Ethiopia pet shop",
    "pet adoption Ethiopia",
    "buy pets Addis",
    "Addis pet accessories",
    "dog food Addis Ababa",
    "cat supplies Ethiopia",
  ],
  authors: [{ name: "NYDev Team", url: "https://addispet.vercel.app" }],
  creator: "AddisPet",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: siteUrl,
    title: "AddisPet – Premium Pet Shop & Adoption for Ethiopia",
    description:
      "The most trusted platform to discover pets and high-quality pet products in Addis Ababa.",
    siteName: "AddisPet",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder later
        width: 1200,
        height: 630,
        alt: "AddisPet Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AddisPet – Ethiopia's Modern Pet Shop",
    description: "Shop and adopt pets in Addis Ababa with ease.",
    creator: "@addispet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};