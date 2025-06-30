import { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import SEOSchema from '@/components/SEOSchema';
import InternalLinking from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'HealthSathi - AI-Powered Healthcare Platform | Medical Report Analysis',
  description: 'Transform your healthcare experience with HealthSathi. Get instant AI-powered medical report analysis, health insights, and personalized care recommendations. Trusted by healthcare professionals worldwide.',
  keywords: [
    'AI healthcare',
    'medical report analysis',
    'healthcare platform',
    'AI doctor',
    'medical AI',
    'health insights',
    'digital health',
    'telemedicine',
    'healthcare technology',
    'medical reports',
    'health analysis',
    'AI medical assistant',
    'healthcare innovation',
    'patient care',
    'medical technology'
  ],
  openGraph: {
    title: 'HealthSathi - AI-Powered Healthcare Platform',
    description: 'Transform your healthcare experience with AI-powered medical report analysis and health insights.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HealthSathi',
    url: 'https://health-sathi.org',
    images: [
      {
        url: '/images/hero/patient_empowerment.webp',
        width: 1200,
        height: 630,
        alt: 'HealthSathi - AI-Powered Healthcare Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthSathi - AI-Powered Healthcare Platform',
    description: 'Transform your healthcare experience with AI-powered medical report analysis.',
    images: ['/images/hero/patient_empowerment.webp'],
    creator: '@Drfatafat',
    site: '@Drfatafat'
  },
  alternates: {
    canonical: 'https://health-sathi.org',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// Organization structured data
const organizationSchema = {
  name: 'HealthSathi',
  url: 'https://health-sathi.org',
  logo: 'https://health-sathi.org/images/logo/healthsathi-logo.svg',
  description: 'AI-powered healthcare platform providing medical report analysis and health insights',
  phone: '+1-555-0123',
  foundingDate: '2024',
  founder: {
    name: 'Jaytirth Joshi',
    jobTitle: 'CEO & Founder',
    image: 'https://health-sathi.org/images/team/jaytirth_joshi.png'
  }
};

// Website structured data
const websiteSchema = {
  name: 'HealthSathi',
  url: 'https://health-sathi.org',
  description: 'AI-powered healthcare platform for medical report analysis and health insights'
};

export default function HomePage() {
  return (
    <>
      <SEOSchema type="organization" data={organizationSchema} />
      <SEOSchema type="website" data={websiteSchema} />
      
      <main>
        <HomePageClient />
        <InternalLinking currentPage="/" />
      </main>
    </>
  );
}