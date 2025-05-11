import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/logo.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthSathi - Your Guide to Simplified Healthcare",
  description: "HealthSathi helps you understand your medical reports, lab results, and X-rays with AI-powered analysis and expert insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-background pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
