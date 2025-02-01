import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Patrick Carter",
    default: "Patrick Carter",
  },
  description: "Patrick Carter Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-164px)] max-w-5xl px-3 py-10">
            {children}
            <SpeedInsights />
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d1133bb6-d7c3-4a7d-80ef-2cab2289d256"
        ></script>
      </body>
    </html>
  );
}
