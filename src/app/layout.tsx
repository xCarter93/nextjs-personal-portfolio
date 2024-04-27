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
        <Script
          id="dd-rum-sync"
          src="https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js"
          type="text/javascript"
          strategy="beforeInteractive"
        />
        <Script id="datadog-rum">
          {`
               window.DD_RUM && window.DD_RUM.init({
                 clientToken: 'pub6bbfcb756ecd8472d4922bac1539b867',
                 applicationId: '0a8119ae-5b2c-4f73-a1cc-cefb3400314f',
                 site: 'datadoghq.com',
                 service: 'nextjs-portfolio',
                 env: 'prod',
                 // Specify a version number to identify the deployed version of your application in Datadog
                 // version: '1.0.0',
                 sessionSampleRate: 100,
                 sessionReplaySampleRate: 100,
                 trackUserInteractions: true,
                 trackResources: true,
                 trackLongTasks: true,
               });
             `}
        </Script>
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-164px)] max-w-5xl px-3 py-10">
            {children}
            <SpeedInsights />
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
