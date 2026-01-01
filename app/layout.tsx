import "./globals.css";
import { siteMetadata } from "@/lib/metadata";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

// Loading Inter with specific subsets for better performance
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-orange-100 selection:text-orange-900">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {/* The flex-1 ensures the footer stays at the bottom on short pages */}
            <main className="flex-1 overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}