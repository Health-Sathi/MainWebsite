import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/logo.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import { defaultMetadata } from './metadata';
import Script from "next/script";
import { ChatProvider } from "@/context/ChatContext";
import AIChat from "@/components/AIChat";

const inter = Inter({ subsets: ["latin"] });

// Add JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'HealthSathi',
  description: 'AI-powered healthcare platform for medical report analysis',
  url: 'https://health-sathi.org',
  logo: 'https://health-sathi.org/images/logo/healthsathi-logo.svg',
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
  }
};

export const metadata: Metadata = {
  title: "HealthSathi - Your AI-Powered Healthcare Companion",
  description: "HealthSathi is an AI-powered healthcare platform that simplifies medical reports and health information.",
};

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
        <meta name="theme-color" content="#ffffff" />
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
        <ChatProvider>
          <Navbar />
          <main className="min-h-screen bg-background pt-16">
            {children}
          </main>
          <Footer />
          <AIChat />
        </ChatProvider>
      </body>
    </html>
  );
}
