interface SEOSchemaProps {
  type: 'organization' | 'website' | 'article' | 'faq' | 'breadcrumb';
  data: Record<string, any>;
}

const SEOSchema = ({ type, data }: SEOSchemaProps) => {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type.charAt(0).toUpperCase() + type.slice(1),
    };

    switch (type) {
      case 'organization':
        return {
          ...baseSchema,
          name: data.name || 'HealthSathi',
          url: data.url || 'https://health-sathi.org',
          logo: {
            '@type': 'ImageObject',
            url: data.logo || 'https://health-sathi.org/images/logo/healthsathi-logo.svg',
            width: 512,
            height: 512
          },
          description: data.description || 'AI-powered healthcare platform providing medical report analysis and health insights',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            addressLocality: 'United States'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: data.phone || '+1-555-0123',
            contactType: 'customer service',
            availableLanguage: 'English'
          },
          sameAs: [
            'https://twitter.com/Drfatafat',
            'https://linkedin.com/company/healthsathi',
            'https://facebook.com/healthsathi'
          ],
          founder: {
            '@type': 'Person',
            name: 'Jaytirth Joshi',
            jobTitle: 'CEO & Founder',
            image: 'https://health-sathi.org/images/team/jaytirth_joshi.png'
          },
          foundingDate: '2024',
          numberOfEmployees: '10-50',
          industry: 'Healthcare Technology',
          knowsAbout: [
            'Artificial Intelligence',
            'Healthcare',
            'Medical Report Analysis',
            'Patient Care',
            'Digital Health'
          ]
        };

      case 'website':
        return {
          ...baseSchema,
          name: data.name || 'HealthSathi',
          url: data.url || 'https://health-sathi.org',
          description: data.description || 'AI-powered healthcare platform',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://health-sathi.org/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        };

      case 'article':
        return {
          ...baseSchema,
          headline: data.headline,
          description: data.description,
          image: data.image,
          author: {
            '@type': 'Person',
            name: data.author || 'HealthSathi Team'
          },
          publisher: {
            '@type': 'Organization',
            name: 'HealthSathi',
            logo: {
              '@type': 'ImageObject',
              url: 'https://health-sathi.org/images/logo/healthsathi-logo.svg'
            }
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url
          },
          articleSection: data.category || 'Healthcare',
          keywords: data.keywords || ['healthcare', 'AI', 'medical reports'],
          wordCount: data.wordCount || 1000,
          timeRequired: data.readTime || 'PT5M'
        };

      case 'faq':
        return {
          ...baseSchema,
          mainEntity: data.questions.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer
            }
          }))
        };

      case 'breadcrumb':
        return {
          ...baseSchema,
          itemListElement: data.items.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return baseSchema;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
    />
  );
};

export default SEOSchema;