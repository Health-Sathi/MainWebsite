import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-gray-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-white">HealthSathi</h3>
            <p className="text-sm">
              Dedicated to providing accessible, AI-powered health insights to all. Your health information simplified.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-brand-red-primary transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-red-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-red-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-brand-red-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-brand-red-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/blog" className="hover:text-brand-red-primary transition-colors">Blog</Link></li>
              <li><Link href="/donate" className="hover:text-brand-red-primary transition-colors">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-white">Contact Info</h3>
            <address className="text-sm not-italic">
              <p>Address: Based in the USA and India</p>
              <p>Email: <a href="mailto:jaytirthjoshi@outlook.com" className="hover:text-brand-red-primary transition-colors">jaytirthjoshi@outlook.com</a></p>
              <p>Phone: <a href="tel:+17703765867" className="hover:text-brand-red-primary transition-colors">+1 (770) 376-5867</a></p>
            </address>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.facebook.com/people/HealthSathi/61564719285549/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="w-6 h-6 hover:text-brand-red-primary transition-colors" />
          </a>
          <a href="https://x.com/Drfatafat" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
            <FaTwitter className="w-6 h-6 hover:text-brand-red-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/company/healthsathi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 hover:text-brand-red-primary transition-colors" />
          </a>
          <a href="https://www.instagram.com/_healthsathi_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 hover:text-brand-red-primary transition-colors" />
          </a>
          <a href="https://www.youtube.com/@Health-Sathi" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="w-6 h-6 hover:text-brand-red-primary transition-colors" />
          </a>
        </div>
        <div className="text-center text-xs text-gray-500 border-t border-gray-700 pt-8">
          <p>HealthSathi Insights: Your Guide to Simplified Healthcare</p>
          <p>Copyright © 2025 HealthSathi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 