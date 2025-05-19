import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://health-sathi.org'),
  title: {
    default: 'HealthSathi - Your Health Partner',
    template: '%s | HealthSathi'
  },
  description: 'HealthSathi is your trusted health partner, providing comprehensive healthcare solutions and services to improve your well-being.',
  keywords: ['healthcare', 'medical services', 'health partner', 'wellness', 'medical consultation', 'health solutions'],
  authors: [{ name: 'HealthSathi' }],
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
    title: 'HealthSathi - Your Health Partner',
    description: 'HealthSathi is your trusted health partner, providing comprehensive healthcare solutions and services to improve your well-being.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HealthSathi - Your Health Partner'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthSathi - Your Health Partner',
    description: 'HealthSathi is your trusted health partner, providing comprehensive healthcare solutions and services to improve your well-being.',
    images: ['/images/twitter-image.jpg'],
    creator: '@healthsathi'
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
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  alternates: {
    canonical: 'https://health-sathi.org',
  },
}; 