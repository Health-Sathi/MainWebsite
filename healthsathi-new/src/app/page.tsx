"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
// import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Trust from "@/components/Trust";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-white">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:flex lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-brand-black sm:text-6xl">
                Understand Your Medical Reports Easily with <span className="text-brand-red-primary">AI</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-brand-black">
                Upload your reports and let Dr. Fatafat simplify complex medical jargon for you.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="tel:+17703620543"
                  className="rounded-md bg-brand-red-primary px-6 py-3 text-sm font-semibold text-brand-white shadow-sm hover:bg-brand-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-primary ring-2 ring-[#EE2A47]"
                >
                  Call our 24/7 Medical Helpline
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"
            >
              <Image
                src="/images/cybernetic-recovery-chamber.jpg"
                alt="Medical AI Technology"
                width={2400}
                height={1200}
                className="w-full max-w-[1400px] h-auto rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 max-h-[800px] object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-red-primary to-brand-red-dark opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
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
                className="rounded-md bg-brand-red-primary px-6 py-3 text-sm font-semibold text-brand-white shadow-sm hover:bg-brand-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-primary"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Trust />
      {/* <Blog /> */}
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
