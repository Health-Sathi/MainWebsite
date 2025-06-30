import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact HealthSathi | Get AI Healthcare Support & Schedule Meetings',
  description: 'Contact HealthSathi for AI healthcare support, schedule meetings, or get help with medical reports. Call +1-770-362-0543 or email us. Free consultation available.',
  keywords: ['contact HealthSathi', 'AI healthcare support', 'medical consultation', 'healthcare contact', 'schedule meeting', 'healthcare help', 'medical support'],
  openGraph: {
    title: 'Contact HealthSathi | Get AI Healthcare Support & Schedule Meetings',
    description: 'Contact HealthSathi for AI healthcare support, schedule meetings, or get help with medical reports. Free consultation available.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HealthSathi',
    images: [
      {
        url: '/images/cybernetic-recovery-chamber.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact HealthSathi - AI Healthcare Support',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact HealthSathi | Get AI Healthcare Support',
    description: 'Contact HealthSathi for AI healthcare support and medical consultation.',
    images: ['/images/cybernetic-recovery-chamber.jpg'],
    creator: '@Drfatafat',
    site: '@Drfatafat'
  },
  alternates: {
    canonical: 'https://health-sathi.org/contact-us',
  },
};

// JSON-LD structured data for contact page
const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact HealthSathi',
  description: 'Contact page for HealthSathi AI healthcare platform',
  url: 'https://health-sathi.org/contact-us',
  mainEntity: {
    '@type': 'Organization',
    name: 'HealthSathi',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-770-362-0543',
        contactType: 'customer service',
        email: 'jaytirthjoshi@health-sathi.org',
        availableLanguage: 'English'
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              We&rsquo;re here to help you. Reach out with any questions or concerns you may have.
            </p>
          </header>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Calendar Embed Section */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Meeting</h2>
              <p className="mb-6 text-gray-700">
                Book a time slot that works for you using the calendar below.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0tzjZbzfInAlNj_4bVNgToaNdmna_DugqheSjup-wBMCTPh1o_XFc0gIeGAmzDk4Oob9KOwIJA?gv=true"
                  style={{ border: 0 }}
                  width="100%"
                  height="750"
                  frameBorder="0"
                  allowFullScreen
                  title="Google Calendar Appointments"
                ></iframe>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="p-6 md:p-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us Anytime
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <a href="tel:+17703620543" className="text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                    +1 (770) 362-0543
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href="mailto:jaytirthjoshi@health-sathi.org" className="text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                    jaytirthjoshi@health-sathi.org
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Based and operated in USA and India
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                <p className="mt-2 text-gray-600">
                  Stay connected with us on social media! (Links coming soon)
                </p>
                {/* Add social media icons/links here when available */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}