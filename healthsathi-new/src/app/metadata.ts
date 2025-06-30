import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://health-sathi.org'),
  title: {
    default: 'HealthSathi - Accessible AI Healthcare & Medical Report Analysis',
    template: '%s | HealthSathi'
  },
  description: 'HealthSathi is your trusted AI-powered healthcare platform, making medical reports and health information accessible and understandable for everyone. Free, confidential, and available 24/7.',
  keywords: ['healthcare', 'AI', 'medical reports', 'health information', 'accessibility', 'medical technology'],
  authors: [{ name: 'HealthSathi Team' }],
  creator: 'HealthSathi',
  publisher: 'HealthSathi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://health-sathi.org',
    siteName: 'HealthSathi',
    title: 'HealthSathi - Accessible AI Healthcare & Medical Report Analysis',
    description: 'HealthSathi is your trusted AI-powered healthcare platform, making medical reports and health information accessible and understandable for everyone. Free, confidential, and available 24/7.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HealthSathi - AI Healthcare Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthSathi - Accessible AI Healthcare & Medical Report Analysis',
    description: 'HealthSathi is your trusted AI-powered healthcare platform, making medical reports and health information accessible and understandable for everyone. Free, confidential, and available 24/7.',
    images: ['/images/twitter-image.jpg'],
    creator: '@healthsathi',
    site: '@healthsathi'
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
  alternates: {
    canonical: 'https://health-sathi.org',
  },
  category: 'healthcare',
  classification: 'medical technology',
  referrer: 'origin-when-cross-origin',
  applicationName: 'HealthSathi',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'HealthSathi - AI Healthcare',
  },
  other: {
    'msapplication-TileColor': '#EE2B47',
    'msapplication-config': '/browserconfig.xml',
  }
}; 