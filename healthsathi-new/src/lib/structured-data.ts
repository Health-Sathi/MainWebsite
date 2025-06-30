export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HealthSathi',
  url: 'https://health-sathi.org',
  logo: 'https://health-sathi.org/images/logo.png',
  sameAs: [
    'https://www.facebook.com/healthsathi',
    'https://twitter.com/healthsathi',
    'https://www.linkedin.com/company/healthsathi'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-770-362-0543',
    contactType: 'customer service',
    email: 'support@health-sathi.org',
    availableLanguage: ['English', 'Hindi']
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'HealthSathi',
  url: 'https://health-sathi.org',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://health-sathi.org/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export const medicalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'HealthSathi',
  image: 'https://health-sathi.org/images/medical-business.jpg',
  url: 'https://health-sathi.org',
  telephone: '+1-770-362-0543',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    opens: '09:00',
    closes: '18:00'
  },
  sameAs: [
    'https://www.facebook.com/healthsathi',
    'https://twitter.com/healthsathi',
    'https://www.linkedin.com/company/healthsathi'
  ]
};