"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Updated navigation links based on health-sathi.org
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' }, // Changed from '/about'
  { name: 'Contact', href: '/contact-us' }, // Changed from '/contact'
  { name: 'Blog', href: '/blog' },
  { name: 'Donate', href: '/donate' }, // New link
  // 'Services' was present in your old nav, health-sathi.org has it as a page section, not a primary nav link
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // Using bg-brand-red-primary for the navbar background, ensure this is defined in your tailwind.config.ts
    // Added shadow-md for a subtle shadow like the reference
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-red-primary shadow-md backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">HealthSathi</span>
            <Image
              src="/images/logo/HealthSathi-transparentWhite.png"
              alt="HealthSathi Logo"
              width={60}
              height={60}
              className="h-10 w-auto mr-2"
            />
            <span className="logo-text text-brand-white">HealthSathi</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            // Using text-brand-white, hover:text-white for icon
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-white hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8"> {/* Adjusted gap slightly */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // Using text-brand-white, hover:text-white
              className="text-sm font-semibold leading-6 text-brand-white hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/get-started" // Assuming /get-started is the correct link
            // Updated styling for a light button on dark background
            className="text-sm font-semibold leading-6 text-brand-white border border-brand-white px-5 py-2 rounded-md hover:bg-brand-white hover:text-brand-red-primary transition-colors"
          >
            Get Started {/* Removed arrow for closer match to reference button text */}
          </Link>
        </div>
      </nav>
      {/* Mobile Menu - applying theme colors */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} /> {/* Softer overlay */}
        {/* Menu Panel */}
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-red-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">HealthSathi</span>
              <Image
                src="/images/logo/HealthSathi-transparentWhite.png"
                alt="HealthSathi Logo"
                width={40}
                height={40}
                className="h-10 w-auto mr-2"
              />
              <span className="logo-text text-brand-white">HealthSathi</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-brand-white hover:text-white" // Themed close button
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    // Themed mobile nav links
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-white hover:bg-brand-red-dark hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/get-started"
                  // Themed mobile "Get Started" button
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-brand-red-primary bg-brand-white hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
} 