import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'HealthSathi Blog | AI Healthcare Insights & Medical Education',
  description: 'Stay informed with expert insights on AI healthcare, medical report analysis, health tips, and the latest developments in medical technology. Learn how AI is transforming healthcare.',
  keywords: ['healthcare blog', 'AI medical insights', 'health tips', 'medical education', 'healthcare technology', 'AI doctor blog', 'medical report analysis', 'healthcare innovation'],
  openGraph: {
    title: 'HealthSathi Blog | AI Healthcare Insights & Medical Education',
    description: 'Expert insights on AI healthcare, medical report analysis, and health tips.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HealthSathi',
    images: [
      {
        url: '/images/cybernetic-recovery-chamber.jpg',
        width: 1200,
        height: 630,
        alt: 'HealthSathi Blog - AI Healthcare Insights',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthSathi Blog | AI Healthcare Insights',
    description: 'Expert insights on AI healthcare and medical technology.',
    images: ['/images/cybernetic-recovery-chamber.jpg'],
    creator: '@Drfatafat',
    site: '@Drfatafat'
  },
  alternates: {
    canonical: 'https://health-sathi.org/blog',
  },
};

// Blog structured data
const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'HealthSathi Blog',
  description: 'AI healthcare insights and medical education',
  url: 'https://health-sathi.org/blog',
  publisher: {
    '@type': 'Organization',
    name: 'HealthSathi',
    logo: {
      '@type': 'ImageObject',
      url: 'https://health-sathi.org/images/logo/healthsathi-logo.svg'
    }
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'BlogPosting',
          headline: 'Understanding Your Blood Test Results',
          description: 'Learn how to interpret common blood test parameters and what they mean for your health.',
          image: 'https://health-sathi.org/blog/blood-test.jpg',
          datePublished: '2025-06-27',
          author: {
            '@type': 'Person',
            name: 'HealthSathi Team'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'BlogPosting',
          headline: 'Decoding X-Ray Reports',
          description: 'A comprehensive guide to understanding the terminology and findings in your X-ray reports.',
          image: 'https://health-sathi.org/blog/xray.jpg',
          datePublished: '2025-06-20',
          author: {
            '@type': 'Person',
            name: 'HealthSathi Team'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'BlogPosting',
          headline: 'Medical Terms Made Simple',
          description: 'A glossary of frequently used medical terms and their meanings in simple language.',
          image: 'https://health-sathi.org/blog/medical-terms.jpg',
          datePublished: '2025-06-13',
          author: {
            '@type': 'Person',
            name: 'HealthSathi Team'
          }
        }
      }
    ]
  }
};

const BlogPage = () => {
  const blogPosts = [
    {
      id: 'blood-test-results',
      title: 'Understanding Your Blood Test Results',
      description: 'Learn how to interpret common blood test parameters and what they mean for your health.',
      image: '/blog/blood-test.jpg',
      date: 'June 27, 2025',
      category: 'Lab Tests',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 'xray-reports',
      title: 'Decoding X-Ray Reports',
      description: 'A comprehensive guide to understanding the terminology and findings in your X-ray reports.',
      image: '/blog/xray.jpg',
      date: 'June 20, 2025',
      category: 'Imaging',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 'medical-terms',
      title: 'Medical Terms Made Simple',
      description: 'A glossary of frequently used medical terms and their meanings in simple language.',
      image: '/blog/medical-terms.jpg',
      date: 'June 13, 2025',
      category: 'Education',
      readTime: '4 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Lab Tests', 'Imaging', 'Education', 'AI Healthcare', 'Wellness'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-red-primary mb-4">
              HealthSathi Blog
            </h1>
            <p className="text-lg text-brand-black max-w-3xl mx-auto">
              Stay informed with expert insights on AI healthcare, medical report analysis, health tips, and the latest developments in medical technology.
            </p>
          </header>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="mb-16">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-brand-red-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-gray-500 text-sm">{post.category}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center px-6 py-3 bg-brand-red-primary text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-brand-red-primary text-brand-red-primary hover:bg-brand-red-primary hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-red-light text-brand-black px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-brand-red-primary hover:text-brand-red-dark font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-brand-red-primary rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Get the latest healthcare insights, AI updates, and medical tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black"
              />
              <button className="px-6 py-3 bg-white text-brand-red-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;