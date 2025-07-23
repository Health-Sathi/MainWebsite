"use client";

import Image from "next/image";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
// import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Trust from "@/components/Trust";
import TrustBadges from "@/components/TrustBadges";
import EnhancedCTA from "@/components/EnhancedCTA";
import FAQ from "@/components/FAQ";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ClockIcon, ShieldCheckIcon, GiftIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [showQR, setShowQR] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(/Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent));
    }
  }, []);

  const phoneNumber = "+17703620543";

  const partners = [
    { name: "Groq", logo: "/images/logo/groq.png" },
    { name: "OpenAI", logo: "/images/logo/openai.png" },
    { name: "Emory University", logo: "/images/logo/emory.png" },
    { name: "Microsoft", logo: "/images/logo/microsoft.png" },
    { name: "Meta", logo: "/images/logo/meta.png" },
    { name: "Google", logo: "/images/logo/google.png" },
    { name: "Apple", logo: "/images/logo/apple.png" },
    { name: "Groq", logo: "/images/logo/groq.png" },
    { name: "OpenAI", logo: "/images/logo/openai.png" },
    { name: "Emory University", logo: "/images/logo/emory.png" },
    { name: "Microsoft", logo: "/images/logo/microsoft.png" },
    { name: "Meta", logo: "/images/logo/meta.png" },
    { name: "Google", logo: "/images/logo/google.png" },
    { name: "Apple", logo: "/images/logo/apple.png" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-background min-h-[600px] flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Left: Text Content */}
          <div className="w-full max-w-xl flex flex-col items-start justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Instant <span className="text-primary">AI Doctor</span> Help, Anytime
            </h1>
            <p className="text-lg text-foreground-secondary mb-6">
              Understand any prescription, lab report, and health concern now! with your personal AI doctor. Free, 24/7.
            </p>
            {isMobile ? (
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 mb-6"
              >
                Call your AI Doctor
              </a>
            ) : (
              <button
                onClick={() => setShowQR(true)}
                className="inline-block rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 mb-6"
              >
                Call your AI Doctor
              </button>
            )}
            <div className="flex flex-wrap gap-4 mb-2">
              <span className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium border border-primary">
                <ClockIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                Zero waiting time
              </span>
              <span className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium border border-primary">
                <ShieldCheckIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                100% confidential
              </span>
              <span className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium border border-primary">
                <GiftIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                Free of cost
              </span>
            </div>
            <div className="text-xs text-muted-foreground mt-2">*Service currently available in the US. International calls may incur charges.</div>
          </div>
          {/* Right: Image with floating cards */}
          <div className="relative w-full max-w-xl flex items-center justify-center min-h-[400px]">
            <img
              src="/images/cybernetic-recovery-chamber.jpg"
              alt="Medical AI Technology"
              width={800}
              height={600}
              loading="eager"
              className="rounded-2xl shadow-2xl object-cover w-full h-auto max-h-[420px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        {/* QR Modal */}
        {showQR && !isMobile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-card text-card-foreground rounded-xl shadow-2xl p-8 flex flex-col items-center relative border border-border">
              <button onClick={() => setShowQR(false)} className="absolute top-2 right-2 text-muted-foreground hover:text-primary text-2xl">&times;</button>
              <h3 className="text-lg font-bold mb-4 text-primary">Scan to Call Your AI Doctor</h3>
              {/* Inline SVG QR code for tel:+17703620543 (generated externally, can be replaced with a package) */}
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:+17703620543" 
                alt="QR code to call AI doctor" 
                className="mb-4"
                width={200}
                height={200}
              />
              <p className="text-sm text-muted-foreground">Scan this QR code with your phone to call instantly.</p>
            </div>
          </div>
        )}
      </section>

      {/* STATS SECTION - moved up */}
      <div className="bg-background py-6">
        <Stats />
      </div>

      {/* Made With The Help Of Section */}
      <section aria-label="Technology Partners" className="bg-black py-12" style={{ marginTop: 0, paddingTop: '80px' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold tracking-widest mb-8 force-white">
            Technology Partners
          </h2>
          
          {/* Scrolling Partners Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 opacity-90 hover:opacity-100 transition-all duration-500"
                    width={48}
                    height={48}
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 opacity-90 hover:opacity-100 transition-all duration-500"
                    width={48}
                    height={48}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is HealthSathi? Section */}
      <section className="bg-secondary py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What is HealthSathi?
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              HealthSathi is a registered nonprofit organization committed to making healthcare accessible and understandable for everyone.
            </p>
            <div className="mt-10">
              <Link
                href="/about-us"
                className="rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Trust Section */}
      <Trust />
      {/* <Blog /> */}
      <FAQ />
      <Contact />
      <EnhancedCTA />
    </>
  );
}
