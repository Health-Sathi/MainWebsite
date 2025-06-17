"use client";

import Image from "next/image";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
// import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Trust from "@/components/Trust";
import TrustBadges from "@/components/TrustBadges";
import EnhancedCTA from "@/components/EnhancedCTA";

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

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-brand-white min-h-[600px] flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Left: Text Content */}
          <div className="w-full max-w-xl flex flex-col items-start justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black mb-6 leading-tight">
              Instant <span className="text-brand-red-primary">AI Doctor</span> Help, Anytime
            </h1>
            <p className="text-lg text-brand-black mb-6">
              Understand any prescription, lab report, and health concern now! with your personal AI doctor. Free, 24/7.
            </p>
            {isMobile ? (
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block rounded-md border border-[#EE2B47] bg-transparent px-6 py-3 text-sm font-semibold text-[#EE2B47] shadow-sm hover:bg-[#EE2B47] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 mb-6"
              >
                Call your AI Doctor
              </a>
            ) : (
              <button
                onClick={() => setShowQR(true)}
                className="inline-block rounded-md border border-[#EE2B47] bg-transparent px-6 py-3 text-sm font-semibold text-[#EE2B47] shadow-sm hover:bg-[#EE2B47] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 mb-6"
              >
                Call your AI Doctor
              </button>
            )}
            <div className="flex flex-wrap gap-4 mb-2">
              <span className="inline-flex items-center gap-2 bg-brand-off-white text-brand-black px-4 py-2 rounded-full text-sm font-medium border border-[#EE2B47]">
                <ClockIcon className="w-5 h-5 text-[#EE2B47]" aria-hidden="true" />
                Zero waiting time
              </span>
              <span className="inline-flex items-center gap-2 bg-brand-off-white text-brand-black px-4 py-2 rounded-full text-sm font-medium border border-[#EE2B47]">
                <ShieldCheckIcon className="w-5 h-5 text-[#EE2B47]" aria-hidden="true" />
                100% confidential
              </span>
              <span className="inline-flex items-center gap-2 bg-brand-off-white text-brand-black px-4 py-2 rounded-full text-sm font-medium border border-[#EE2B47]">
                <GiftIcon className="w-5 h-5 text-[#EE2B47]" aria-hidden="true" />
                Free of cost
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-2">*Service currently available in the US. International calls may incur charges.</div>
          </div>
          {/* Right: Image with floating cards */}
          <div className="relative w-full max-w-xl flex items-center justify-center min-h-[400px]">
            <Image
              src="/images/cybernetic-recovery-chamber.jpg"
              alt="Medical AI Technology"
              width={2400}
              height={1200}
              className="rounded-2xl shadow-2xl object-cover w-full h-auto max-h-[420px]"
            />
            {/* Floating cards (placeholders, replace with your own if available)
            <Image
              src="/images/floating-report-1.png"
              alt="Floating report 1"
              width={180}
              height={100}
              className="absolute top-4 left-0 shadow-lg rounded-lg rotate-[-8deg] hidden sm:block"
            />
            <Image
              src="/images/floating-report-2.png"
              alt="Floating report 2"
              width={160}
              height={90}
              className="absolute bottom-8 right-0 shadow-lg rounded-lg rotate-[10deg] hidden sm:block"
            />
            <Image
              src="/images/floating-report-3.png"
              alt="Floating report 3"
              width={120}
              height={70}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg rotate-2 hidden md:block"
            /> */}
          </div>
        </div>
        {/* QR Modal */}
        {showQR && !isMobile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center relative">
              <button onClick={() => setShowQR(false)} className="absolute top-2 right-2 text-gray-400 hover:text-brand-red-primary text-2xl">&times;</button>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#EE2B47' }}>Scan to Call Your AI Doctor</h3>
              {/* Inline SVG QR code for tel:+17703620543 (generated externally, can be replaced with a package) */}
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:+17703620543" alt="QR code to call AI doctor" className="mb-4" />
              <p className="text-sm text-gray-600">Scan this QR code with your phone to call instantly.</p>
            </div>
          </div>
        )}
      </section>

      {/* STATS SECTION - moved up */}
      <div className="bg-white py-6">
        <Stats />
      </div>

      {/* Made With The Help Of Section */}
      <section aria-label="Technology Partners" className="bg-black py-8">
        <h2 className="text-center text-gray-300 text-sm font-semibold tracking-widest mb-4">
          Technology Partners:
        </h2>
        <ul className="flex flex-wrap justify-center items-center gap-8" aria-label="Partner Logos">
          <li>
            <img src="/images/logo/groq.png" alt="Groq" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <img src="/images/logo/openai.png" alt="OpenAI" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <img src="/images/logo/emory.png" alt="Emory University" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <img src="/images/logo/microsoft.png" alt="Microsoft" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <img src="/images/logo/meta.png" alt="Meta" className="h-6 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <img src="/images/logo/google.png" alt="Google" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <img src="/images/logo/apple.png" alt="Apple" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
        </ul>
      </section>

      {/* What is HealthSathi? Section */}
      <section className="bg-brand-off-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              What is HealthSathi?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-black">
              HealthSathi is a registered nonprofit organization committed to making healthcare accessible and understandable for everyone.
            </p>
            <div className="mt-10">
              <Link
                href="/about-us"
                className="rounded-md border border-[#EE2B47] bg-transparent px-6 py-3 text-sm font-semibold text-[#EE2B47] shadow-sm hover:bg-[#EE2B47] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2B47] transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Trust />
      {/* <Blog /> */}
      <FAQ />
      <Contact />
      <EnhancedCTA />
    </>
  );
}

