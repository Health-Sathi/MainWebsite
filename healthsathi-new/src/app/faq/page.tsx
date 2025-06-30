import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'FAQ - HealthSathi | Frequently Asked Questions About AI Healthcare',
  description: 'Find answers to frequently asked questions about HealthSathi\'s AI healthcare platform, medical report analysis, privacy, and how our services work.',
  keywords: ['HealthSathi FAQ', 'AI healthcare questions', 'medical report analysis FAQ', 'healthcare AI help', 'medical consultation questions', 'healthcare privacy FAQ'],
  openGraph: {
    title: 'FAQ - HealthSathi | Frequently Asked Questions About AI Healthcare',
    description: 'Find answers to frequently asked questions about HealthSathi\'s AI healthcare platform and services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HealthSathi',
    images: [
      {
        url: '/images/cybernetic-recovery-chamber.jpg',
        width: 1200,
        height: 630,
        alt: 'HealthSathi FAQ - AI Healthcare Questions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - HealthSathi | AI Healthcare Questions',
    description: 'Find answers to frequently asked questions about HealthSathi\'s AI healthcare platform.',
    images: ['/images/cybernetic-recovery-chamber.jpg'],
    creator: '@Drfatafat',
    site: '@Drfatafat'
  },
  alternates: {
    canonical: 'https://health-sathi.org/faq',
  },
};

// FAQ structured data
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is HealthSathi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HealthSathi is an AI-powered healthcare platform that helps you understand medical reports, prescriptions, and health information. We provide instant, free, and confidential healthcare consultation 24/7.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does HealthSathi work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply call our AI doctor at +1-770-362-0543 or use our platform to upload medical reports. Our AI analyzes your health data and provides clear, understandable explanations in plain language.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is HealthSathi free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, HealthSathi\'s core services are completely free. We believe healthcare information should be accessible to everyone without financial barriers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my health information secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We implement enterprise-grade security measures and comply with healthcare privacy standards. Your data is encrypted and never shared without your explicit consent.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can HealthSathi replace my doctor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, HealthSathi is designed to complement, not replace, professional medical care. We help you understand your health information, but always consult licensed healthcare providers for diagnosis and treatment.'
      }
    },
    {
      '@type': 'Question',
      name: 'What types of medical reports can HealthSathi analyze?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can analyze blood test reports, imaging results, prescription information, lab reports, and other medical documents. Our AI translates complex medical terminology into understandable language.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is HealthSathi available 24/7?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our AI healthcare service is available 24 hours a day, 7 days a week. You can get instant help anytime you need it.'
      }
    },
    {
      '@type': 'Question',
      name: 'How accurate is HealthSathi\'s analysis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI achieves 99.9% accuracy in medical report analysis. However, we always recommend verifying interpretations with healthcare professionals for critical decisions.'
      }
    }
  ]
};

const FAQPage = () => {
  const faqs = [
    {
      question: 'What is HealthSathi?',
      answer: 'HealthSathi is an AI-powered healthcare platform that helps you understand medical reports, prescriptions, and health information. We provide instant, free, and confidential healthcare consultation 24/7.'
    },
    {
      question: 'How does HealthSathi work?',
      answer: 'Simply call our AI doctor at +1-770-362-0543 or use our platform to upload medical reports. Our AI analyzes your health data and provides clear, understandable explanations in plain language.'
    },
    {
      question: 'Is HealthSathi free to use?',
      answer: 'Yes, HealthSathi\'s core services are completely free. We believe healthcare information should be accessible to everyone without financial barriers.'
    },
    {
      question: 'Is my health information secure?',
      answer: 'Absolutely. We implement enterprise-grade security measures and comply with healthcare privacy standards. Your data is encrypted and never shared without your explicit consent.'
    },
    {
      question: 'Can HealthSathi replace my doctor?',
      answer: 'No, HealthSathi is designed to complement, not replace, professional medical care. We help you understand your health information, but always consult licensed healthcare providers for diagnosis and treatment.'
    },
    {
      question: 'What types of medical reports can HealthSathi analyze?',
      answer: 'We can analyze blood test reports, imaging results, prescription information, lab reports, and other medical documents. Our AI translates complex medical terminology into understandable language.'
    },
    {
      question: 'Is HealthSathi available 24/7?',
      answer: 'Yes, our AI healthcare service is available 24 hours a day, 7 days a week. You can get instant help anytime you need it.'
    },
    {
      question: 'How accurate is HealthSathi\'s analysis?',
      answer: 'Our AI achieves 99.9% accuracy in medical report analysis. However, we always recommend verifying interpretations with healthcare professionals for critical decisions.'
    },
    {
      question: 'What languages does HealthSathi support?',
      answer: 'Currently, HealthSathi supports English and Hindi. We\'re working to add more languages to serve a broader global community.'
    },
    {
      question: 'How can I contact HealthSathi for support?',
      answer: 'You can reach us at +1-770-362-0543, email us at support@health-sathi.org, or use our contact form on the website. We\'re here to help!'
    },
    {
      question: 'Does HealthSathi work internationally?',
      answer: 'Yes, HealthSathi is available worldwide. However, please note that international calls may incur charges from your phone provider.'
    },
    {
      question: 'Can I use HealthSathi for emergency situations?',
      answer: 'No, HealthSathi is not designed for emergency use. In case of a medical emergency, please call your local emergency services (911 in the US) immediately.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />

          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-red-primary mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-brand-black max-w-2xl mx-auto">
              Find answers to common questions about HealthSathi&apos;s AI healthcare platform and services.
            </p>
          </header>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-brand-red-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-brand-black leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-brand-red-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-brand-black mb-6">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17703620543"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-red-primary text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
              >
                Call Us Now
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-red-primary text-brand-red-primary font-semibold rounded-lg hover:bg-brand-red-primary hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;