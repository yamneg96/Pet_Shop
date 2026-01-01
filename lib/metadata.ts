import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "AddisPet | Pet Shop & Adoption Platform",
    template: "%s | AddisPet",
  },
  description:
    "AddisPet is a modern pet shop and adoption platform for Addis Ababa. Browse pets, save favorites, and order securely with local and international payments.",
  keywords: [
    "Addis Ababa pets",
    "Ethiopia pet shop",
    "pet adoption Ethiopia",
    "buy pets Addis",
    "Addis pet accessories",
  ],
  authors: [{ name: "AddisPet Team" }],
  creator: "AddisPet",
  metadataBase: new URL("https://addispet.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: "https://addispet.vercel.app",
    title: "AddisPet – Pet Shop for Addis Ababa",
    description:
      "A trusted platform to discover pets and pet products in Addis Ababa.",
    siteName: "AddisPet",
  },
  robots: {
    index: true,
    follow: true,
  },
};
