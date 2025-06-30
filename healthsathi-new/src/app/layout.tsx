import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/logo.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { ChatProvider } from "@/context/ChatContext";
import AIChat from "@/components/AIChat";
import { defaultMetadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

// Enhanced JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'HealthSathi',
  description: 'AI-powered healthcare platform for medical report analysis and health information',
  url: 'https://health-sathi.org',
  logo: 'https://health-sathi.org/images/logo/healthsathi-logo.svg',
  image: 'https://health-sathi.org/images/cybernetic-recovery-chamber.jpg',
  sameAs: [
    'https://www.facebook.com/people/HealthSathi/61564719285549/',
    'https://x.com/Drfatafat',
    'https://www.linkedin.com/company/healthsathi/',
    'https://www.instagram.com/_healthsathi_/',
    'https://www.youtube.com/@Health-Sathi'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-770-376-5867',
    email: 'Support@health-sathi.org',
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressLocality: 'Atlanta',
    addressRegion: 'GA'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '33.7490',
    longitude: '-84.3880'
  },
  areaServed: 'Worldwide',
  serviceType: 'AI Healthcare Consultation',
  medicalSpecialty: 'General Medicine',
  availableService: [
    {
      '@type': 'MedicalService',
      name: 'AI Medical Report Analysis',
      description: 'Free AI-powered analysis of medical reports and prescriptions'
    },
    {
      '@type': 'MedicalService',
      name: '24/7 Health Consultation',
      description: 'Round-the-clock AI healthcare assistance'
    }
  ]
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#EE2B47" />
        <meta name="msapplication-TileColor" content="#EE2B47" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Accessibility Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="HealthSathi Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Social Media Links for SEO */}
        <link rel="me" href="https://www.facebook.com/people/HealthSathi/61564719285549/" />
        <link rel="me" href="https://x.com/Drfatafat" />
        <link rel="me" href="https://www.linkedin.com/company/healthsathi/" />
        <link rel="me" href="https://www.instagram.com/_healthsathi_/" />
        <link rel="me" href="https://www.youtube.com/@Health-Sathi" />

        {/* OpenGraph Social Profiles */}
        <meta property="og:see_also" content="https://www.facebook.com/people/HealthSathi/61564719285549/" />
        <meta property="og:see_also" content="https://x.com/Drfatafat" />
        <meta property="og:see_also" content="https://www.linkedin.com/company/healthsathi/" />
        <meta property="og:see_also" content="https://www.instagram.com/_healthsathi_/" />
        <meta property="og:see_also" content="https://www.youtube.com/@Health-Sathi" />

        {/* Additional OpenGraph Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HealthSathi" />

        {/* Twitter Additional Tags */}
        <meta name="twitter:creator" content="@Drfatafat" />
        <meta name="twitter:site" content="@Drfatafat" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* iubenda Cookie Consent */}
        <Script id="iubenda-config" strategy="afterInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":4037672,"cookiePolicyId":20806289,"lang":"en","storage":{"useSiteId":true}};
          `}
        </Script>
        <Script
          src="https://cs.iubenda.com/autoblocking/4037672.js"
          strategy="afterInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/gpp/stub.js"
          strategy="afterInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
          async
        />
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17066817175"
          strategy="afterInteractive"
        />
        <Script id="gtag-init-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17066817175');
          `}
        </Script>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-49DZ0JNCC4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-49DZ0JNCC4');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-red-primary text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <ChatProvider>
          <Navbar />
          <main id="main-content" className="min-h-screen bg-background pt-16" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <AIChat />
        </ChatProvider>
      </body>
    </html>
  );
}