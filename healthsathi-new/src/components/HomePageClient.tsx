"use client";

import Image from "next/image";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Trust from "@/components/Trust";
import TrustBadges from "@/components/TrustBadges";
import EnhancedCTA from "@/components/EnhancedCTA";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ClockIcon, ShieldCheckIcon, GiftIcon } from '@heroicons/react/24/outline';

export default function HomePageClient() {
  const [showQR, setShowQR] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(/Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent));
    }
  }, []);

  const phoneNumber = "+17703620543";

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowQR(false);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-brand-white min-h-[600px] flex items-center" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-7xl w-full px-6 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Left: Text Content */}
          <div className="w-full max-w-xl flex flex-col items-start justify-center">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black mb-6 leading-tight">
              Instant <span className="text-brand-red-primary">AI Doctor</span> Help, Anytime
            </h1>
            <p className="text-lg text-brand-black mb-6">
              Understand any prescription, lab report, and health concern now! with your personal AI doctor. Free, 24/7.
            </p>
            {isMobile ? (
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block rounded-md border border-[#EE2B47] bg-transparent px-6 py-3 text-sm font-semibold text-[#EE2B47] shadow-sm hover:bg-[#EE2B47] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 mb-6"
                aria-label="Call your AI doctor at +1-770-362-0543"
              >
                Call your AI Doctor
              </a>
            ) : (
              <button
                onClick={() => setShowQR(true)}
                className="inline-block rounded-md border border-[#EE2B47] bg-transparent px-6 py-3 text-sm font-semibold text-[#EE2B47] shadow-sm hover:bg-[#EE2B47] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 mb-6"
                aria-label="Show QR code to call AI doctor"
              >
                Call your AI Doctor
              </button>
            )}
            <div className="flex flex-wrap gap-4 mb-2" role="list" aria-label="Service features">
              <span className="inline-flex items-center gap-2 bg-brand-off-white text-brand-black px-4 py-2 rounded-full text-sm font-medium border border-[#EE2B47]" role="listitem">
                <ClockIcon className="w-5 h-5 text-[#EE2B47]" aria-hidden="true" />
                Zero waiting time
              </span>
              <span className="inline-flex items-center gap-2 bg-brand-off-white text-brand-black px-4 py-2 rounded-full text-sm font-medium border border-[#EE2B47]" role="listitem">
                <ShieldCheckIcon className="w-5 h-5 text-[#EE2B47]" aria-hidden="true" />
                100% confidential
              </span>
              <span className="inline-flex items-center gap-2 bg-brand-off-white text-brand-black px-4 py-2 rounded-full text-sm font-medium border border-[#EE2B47]" role="listitem">
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
              alt="Medical AI Technology showing advanced healthcare technology"
              width={2400}
              height={1200}
              className="rounded-2xl shadow-2xl object-cover w-full h-auto max-h-[420px]"
              priority
            />
          </div>
        </div>
        {/* QR Modal */}
        {showQR && !isMobile && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-modal-title"
            aria-describedby="qr-modal-description"
            onKeyDown={handleKeyDown}
          >
            <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center relative">
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-brand-red-primary text-2xl focus:outline-none focus:ring-2 focus:ring-brand-red-primary rounded-full p-1"
                aria-label="Close QR code modal"
              >
                &times;
              </button>
              <h3 id="qr-modal-title" className="text-lg font-bold mb-4" style={{ color: '#EE2B47' }}>
                Scan to Call Your AI Doctor
              </h3>
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:+17703620543"
                alt="QR code to call AI doctor at +1-770-362-0543"
                width={200}
                height={200}
                className="mb-4"
              />
              <p id="qr-modal-description" className="text-sm text-gray-600">
                Scan this QR code with your phone to call instantly.
              </p>
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
            <Image src="/images/logo/groq.png" alt="Groq AI technology partner" width={32} height={32} className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <Image src="/images/logo/openai.png" alt="OpenAI technology partner" width={32} height={32} className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <Image src="/images/logo/emory.png" alt="Emory University technology partner" width={32} height={32} className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <Image src="/images/logo/microsoft.png" alt="Microsoft technology partner" width={32} height={32} className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <Image src="/images/logo/meta.png" alt="Meta technology partner" width={24} height={24} className="h-6 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <Image src="/images/logo/google.png" alt="Google technology partner" width={32} height={32} className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
          <li>
            <Image src="/images/logo/apple.png" alt="Apple technology partner" width={32} height={32} className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </li>
        </ul>
      </section>

      {/* What is HealthSathi? Section */}
      <section className="bg-brand-off-white py-8 sm:py-12" aria-labelledby="what-is-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 id="what-is-heading" className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              What is HealthSathi?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-black">
              HealthSathi is a registered nonprofit organization committed to making healthcare accessible and understandable for everyone.
            </p>
            <div className="mt-10">
              <Link
                href="/about-us"
                className="rounded-md border border-[#EE2B47] bg-transparent px-6 py-3 text-sm font-semibold text-[#EE2B47] shadow-sm hover:bg-[#EE2B47] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2B47] transition-colors duration-200"
                aria-label="Learn more about HealthSathi"
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
      <FAQ />
      <Contact />
      <EnhancedCTA />
    </>
  );
}