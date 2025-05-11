import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/blog', label: 'Blog' },
    { href: '/donate', label: 'Donate' },
  ];

  const contactInfo = {
    address: 'Based in the USA and India',
    email: 'support@health-sathi.org',
    phone: '+1 (770) 376-5867',
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 lg:col-span-1">
            <h5 className="text-lg font-semibold text-white mb-4">About Us</h5>
            <p className="text-sm leading-relaxed">
              HealthSathi is dedicated to providing accessible, AI-powered health insights to all. Your health information simplified.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-red-primary transition-colors duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Info</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 text-brand-red-primary flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 mr-2 mt-0.5 text-brand-red-primary flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-red-primary transition-colors duration-300">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-2 mt-0.5 text-brand-red-primary flex-shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/s|\(|\)/g, '')}`} className="hover:text-brand-red-primary transition-colors duration-300">
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HealthSathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 