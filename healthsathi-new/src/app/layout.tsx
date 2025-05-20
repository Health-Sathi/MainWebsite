import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/logo.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import { defaultMetadata } from './metadata';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17066817175"
          strategy="afterInteractive"
        />
        <Script id="gtag-init-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17066817175');
          `}
        </Script>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-49DZ0JNCC4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-49DZ0JNCC4');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-background pt-16">
          {children}
        </main>
        <Footer />
        <div
          style={{
            position: "fixed",
            bottom: 52,
            right: 16,
            zIndex: 50,
            background: "rgba(30, 32, 38, 0.95)",
            color: "#fff",
            borderRadius: "8px",
            padding: "4px 14px",
            fontSize: "0.85rem",
            fontWeight: 400,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            pointerEvents: "none",
            opacity: 0.85,
            textAlign: "center",
            maxWidth: 320,
          }}
          aria-label="Sponsorship and EIN"
        >
          HealthSathi is fiscally sponsored by Hack Club, a 501(c)(3) nonprofit. EIN: 81-2908499
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 50,
            background: "rgba(30, 32, 38, 0.95)",
            color: "#fff",
            borderRadius: "8px",
            padding: "6px 16px",
            fontSize: "0.95rem",
            fontWeight: 500,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            pointerEvents: "none",
            opacity: 0.85,
          }}
          aria-label="Build version"
        >
          Build 0.0.1 // 05-19-2025
        </div>
      </body>
    </html>
  );
}
