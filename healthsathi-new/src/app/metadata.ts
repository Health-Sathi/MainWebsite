import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://health-sathi.org'),
  title: {
    default: 'Dr. Fatafat - Your AI Doctor for Medical Report Analysis | HealthSathi',
    template: '%s | Dr. Fatafat - AI Medical Assistant'
  },
  description: 'Meet Dr. Fatafat, your AI doctor that simplifies medical reports instantly. Get expert-level analysis of your health reports, powered by advanced AI technology. Free, confidential, and available 24/7.',
  keywords: [
    'AI doctor',
    'doctor AI',
    'Dr. Fatafat',
    'AI medical assistant',
    'virtual doctor',
    'AI health analysis',
    'medical report AI',
    'AI medical report analysis',
    'digital doctor',
    'AI healthcare assistant',
    'medical AI doctor',
    'AI medical consultation',
    'virtual medical assistant',
    'AI health report analysis',
    'medical report simplification',
    'AI doctor consultation',
    'digital health assistant',
    'AI medical expert',
    'healthcare AI assistant',
    'medical report translator'
  ],
  authors: [{ name: 'HealthSathi', url: 'https://health-sathi.org' }],
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
    title: 'Dr. Fatafat - Your AI Doctor for Medical Report Analysis',
    description: 'Get instant medical report analysis from Dr. Fatafat, your AI doctor. Powered by advanced AI technology, Dr. Fatafat provides expert-level analysis of your health reports, available 24/7.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Fatafat - Your AI Doctor for Medical Report Analysis'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Fatafat - Your AI Doctor for Medical Report Analysis',
    description: 'Get instant medical report analysis from Dr. Fatafat, your AI doctor. Powered by advanced AI technology, Dr. Fatafat provides expert-level analysis of your health reports, available 24/7.',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  applicationName: 'HealthSathi',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dr. Fatafat - AI Doctor',
  },
  other: {
    'msapplication-TileColor': '#EE2B47',
    'msapplication-config': '/browserconfig.xml',
  }
}; 