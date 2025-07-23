"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Updated navigation links based on health-sathi.org
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact', href: '/contact-us' },
  { name: 'Blog', href: 'https://blog.health-sathi.org' },
  { name: 'Donate', href: '/donate' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always use solid black background to prevent white lines
  const navbarBackground = 'bg-black';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBackground} ${
      isScrolled ? 'shadow-lg border-b border-gray-800' : ''
    }`} style={{ marginTop: 0, marginLeft: 0, marginRight: 0, minHeight: '80px' }}>
      <nav className="container mx-auto flex items-center justify-between px-3 lg:px-6 py-4 lg:py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#EE2B47', // Brand red
                borderRadius: '50%',   // Perfect circle
                width: 44,
                height: 44,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            >
              <img
                src="/images/logo/healthsathi-logo.svg"
                alt="HealthSathi logo"
                style={{ width: 28, height: 28 }}
              />
            </span>
            <span className="logo-text text-brand-white font-semibold text-xl">HealthSathi</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-brand-white hover:text-brand-red-light transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm font-semibold leading-6 text-brand-white hover:text-brand-red-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-red-light after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact-us"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#EE2B47] shadow-sm hover:bg-brand-off-white transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        
        {/* Menu Panel */}
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-red-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#EE2B47',
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              >
                <img
                  src="/images/logo/healthsathi-logo.svg"
                  alt="HealthSathi logo"
                  style={{ width: 28, height: 28 }}
                />
              </span>
              <span className="logo-text text-brand-white font-semibold text-xl">HealthSathi</span>
            </Link>
            <button
              type="button"
              className="rounded-full p-2.5 text-brand-white hover:text-white hover:bg-brand-red-dark transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/20">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-white hover:bg-brand-red-dark hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact-us"
                  className="block w-full text-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#EE2B47] shadow-sm hover:bg-brand-off-white transition-colors"
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














































































































































































































































































































































































































 