"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus first menu item when menu opens
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  // Trap focus within mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const focusableElements = mobileMenuRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [mobileMenuOpen]);

  return (
    <header className="bg-black py-6" role="banner">
      <nav className="container mx-auto flex items-center justify-between px-3 lg:px-6" aria-label="Global navigation">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2" aria-label="HealthSathi home page">
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
              <Image
                src="/images/logo/healthsathi-logo.svg"
                alt="HealthSathi logo"
                width={28}
                height={28}
              />
            </span>
            <span className="logo-text text-brand-white font-semibold text-xl">HealthSathi</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-brand-white hover:text-brand-red-light focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:ring-offset-2 focus:ring-offset-black"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8" role="menubar">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm font-semibold leading-6 text-brand-white hover:text-brand-red-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-red-light after:transition-all hover:after:w-full focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              role="menuitem"
              aria-label={item.href.startsWith('http') ? `${item.name} (opens in new tab)` : item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact-us"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#EE2B47] shadow-sm hover:bg-brand-off-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Get started with HealthSathi"
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
        ref={mobileMenuRef}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div
          id="mobile-menu"
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-red-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" aria-label="HealthSathi home page">
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
                <Image
                  src="/images/logo/healthsathi-logo.svg"
                  alt="HealthSathi logo"
                  width={28}
                  height={28}
                />
              </span>
              <span className="logo-text text-brand-white font-semibold text-xl">HealthSathi</span>
            </Link>
            <button
              type="button"
              className="rounded-full p-2.5 text-brand-white hover:text-white hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red-primary"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/20">
              <div className="space-y-2 py-6" role="menu">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-white hover:bg-brand-red-dark hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red-primary"
                    onClick={() => setMobileMenuOpen(false)}
                    role="menuitem"
                    ref={index === 0 ? firstMenuItemRef : undefined}
                    aria-label={item.href.startsWith('http') ? `${item.name} (opens in new tab)` : item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact-us"
                  className="block w-full text-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#EE2B47] shadow-sm hover:bg-brand-off-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red-light focus:ring-offset-2 focus:ring-offset-brand-red-primary"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Get started with HealthSathi"
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