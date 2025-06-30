import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Call HealthSathi - US Support',
  description: 'Contact HealthSathi US support team directly at +1 (770) 362-0543',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CallUSPage() {
  const phoneNumber = '+17703620543';

  return (
    <>
      <Script
        id="call-redirect"
        dangerouslySetInnerHTML={{
          __html: `
            window.location.href = 'tel:${phoneNumber}';
          `,
        }}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 text-center">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Calling HealthSathi
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              You will be redirected to make a call to our US support team.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <a
              href={`tel:${phoneNumber}`}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#EE2B47] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE2B47]"
            >
              Call +1 (770) 362-0543
            </a>
            <p className="text-sm text-gray-500">
              If you are not redirected automatically, click the button above.
            </p>
          </div>
        </div>
      </div>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPoint',
            'telephone': phoneNumber,
            'contactType': 'customer service',
            'areaServed': 'US',
            'availableLanguage': ['English', 'Hindi'],
            'contactOption': 'TollFree',
            'hoursAvailable': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ],
              'opens': '09:00',
              'closes': '18:00'
            }
          })
        }}
      />
    </>
  );
}