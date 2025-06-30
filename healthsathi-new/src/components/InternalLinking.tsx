import Link from 'next/link';

interface InternalLink {
  title: string;
  description: string;
  url: string;
  category: string;
}

interface InternalLinkingProps {
  currentPage: string;
  links?: InternalLink[];
}

const InternalLinking = ({ currentPage, links }: InternalLinkingProps) => {
  const defaultLinks: InternalLink[] = [
    {
      title: 'About HealthSathi',
      description: 'Learn about our mission to revolutionize healthcare with AI technology.',
      url: '/about-us',
      category: 'Company'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team for support or inquiries.',
      url: '/contact',
      category: 'Support'
    },
    {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about our services.',
      url: '/faq',
      category: 'Support'
    },
    {
      title: 'Donate to HealthSathi',
      description: 'Support our mission to make healthcare accessible to everyone.',
      url: '/donate',
      category: 'Support'
    },
    {
      title: 'HealthSathi Blog',
      description: 'Read the latest insights on AI healthcare and medical technology.',
      url: '/blog',
      category: 'Content'
    },
    {
      title: 'Privacy Policy',
      description: 'Learn how we protect your personal information.',
      url: '/privacy-policy',
      category: 'Legal'
    },
    {
      title: 'Terms and Conditions',
      description: 'Review our terms of service and usage policies.',
      url: '/terms-and-conditions',
      category: 'Legal'
    }
  ];

  const filteredLinks = links || defaultLinks.filter(link => link.url !== currentPage);

  if (filteredLinks.length === 0) {
    return null;
  }

  // Group links by category
  const groupedLinks = filteredLinks.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {} as Record<string, InternalLink[]>);

  return (
    <section className="py-12 bg-brand-off-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-brand-black mb-8 text-center">
          Explore More
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedLinks).map(([category, categoryLinks]) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-brand-red-primary mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {categoryLinks.slice(0, 3).map((link) => (
                  <div key={link.url} className="border-l-4 border-brand-red-light pl-4">
                    <Link
                      href={link.url}
                      className="block group"
                    >
                      <h4 className="font-semibold text-brand-black group-hover:text-brand-red-primary transition-colors mb-1">
                        {link.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {link.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-brand-red-primary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Join thousands of users who trust HealthSathi for their healthcare needs. 
              Get instant AI-powered medical report analysis and health insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-brand-red-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-red-primary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinking;