import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import FontLoader from "@/components/FontLoader";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/cybernetic-recovery-chamber.jpg" as="image" />
        <link rel="preload" href="/images/logo/healthsathi-logo.svg" as="image" />
        
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
        
        {/* iubenda Cookie Consent - Load with lower priority */}
        <Script id="iubenda-config" strategy="lazyOnload">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":4037672,"cookiePolicyId":20806289,"lang":"en","storage":{"useSiteId":true}};
          `}
        </Script>
        <Script
          src="https://cs.iubenda.com/autoblocking/4037672.js"
          strategy="lazyOnload"
        />
        <Script
          src="//cdn.iubenda.com/cs/gpp/stub.js"
          strategy="lazyOnload"
        />
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="lazyOnload"
          async
        />
        
        {/* Google Tag (gtag.js) - Load after page load */}
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
        
        {/* Google Analytics (gtag.js) - Load after page load */}
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
        <FontLoader />
        <Navbar />
        <main className="min-h-screen bg-background pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
