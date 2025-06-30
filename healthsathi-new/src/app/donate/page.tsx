import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate to HealthSathi | Support AI Healthcare Accessibility',
  description: 'Support HealthSathi\'s mission to make healthcare accessible and understandable for everyone. Your donation helps provide free AI healthcare consultation and medical report analysis.',
  keywords: ['donate HealthSathi', 'healthcare donation', 'AI healthcare support', 'medical accessibility', 'healthcare nonprofit', 'support healthcare AI', 'medical technology donation'],
  openGraph: {
    title: 'Donate to HealthSathi | Support AI Healthcare Accessibility',
    description: 'Support HealthSathi\'s mission to make healthcare accessible and understandable for everyone.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HealthSathi',
    images: [
      {
        url: '/images/cybernetic-recovery-chamber.jpg',
        width: 1200,
        height: 630,
        alt: 'Donate to HealthSathi - Support AI Healthcare',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donate to HealthSathi | Support AI Healthcare',
    description: 'Support our mission to make healthcare accessible for everyone.',
    images: ['/images/cybernetic-recovery-chamber.jpg'],
    creator: '@Drfatafat',
    site: '@Drfatafat'
  },
  alternates: {
    canonical: 'https://health-sathi.org/donate',
  },
};

// JSON-LD structured data for donate page
const donateJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DonationPage',
  name: 'Donate to HealthSathi',
  description: 'Support HealthSathi\'s mission to make healthcare accessible',
  url: 'https://health-sathi.org/donate',
  mainEntity: {
    '@type': 'NonProfit',
    name: 'HealthSathi',
    description: 'AI-powered healthcare platform making medical information accessible'
  }
};

const DonatePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateJsonLd) }}
      />
      <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-red-primary mb-4">
              Support HealthSathi
            </h1>
            <p className="text-lg text-brand-black max-w-2xl mx-auto">
              Your generous contributions help us continue our mission to make healthcare information accessible and understandable for everyone. Thank you for your support!
            </p>
          </header>

          <div className="bg-brand-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
            <iframe
              src="https://hcb.hackclub.com/donations/start/healthsathi"
              title="HealthSathi Donation Form via Hack Club"
              className="w-full h-[115vh] min-h-[1000px] border-1 rounded-lg"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            >
              Loading donation form...
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonatePage;