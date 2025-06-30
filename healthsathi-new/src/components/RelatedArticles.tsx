import Link from 'next/link';
import Image from 'next/image';

interface RelatedArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
}

interface RelatedArticlesProps {
  currentArticleId: string;
  category?: string;
}

const RelatedArticles = ({ currentArticleId, category }: RelatedArticlesProps) => {
  const allArticles: RelatedArticle[] = [
    {
      id: 'blood-test-results',
      title: 'Understanding Your Blood Test Results',
      description: 'Learn how to interpret common blood test parameters and what they mean for your health.',
      image: '/blog/blood-test.jpg',
      category: 'Lab Tests',
      readTime: '5 min read'
    },
    {
      id: 'xray-reports',
      title: 'Decoding X-Ray Reports',
      description: 'A comprehensive guide to understanding the terminology and findings in your X-ray reports.',
      image: '/blog/xray.jpg',
      category: 'Imaging',
      readTime: '7 min read'
    },
    {
      id: 'medical-terms',
      title: 'Medical Terms Made Simple',
      description: 'A glossary of frequently used medical terms and their meanings in simple language.',
      image: '/blog/medical-terms.jpg',
      category: 'Education',
      readTime: '4 min read'
    }
  ];

  // Filter out current article and prioritize same category
  const relatedArticles = allArticles
    .filter(article => article.id !== currentArticleId)
    .sort((a, b) => {
      if (category && a.category === category && b.category !== category) return -1;
      if (category && b.category === category && a.category !== category) return 1;
      return 0;
    })
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-brand-off-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-brand-black mb-8 text-center">
          Related Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/blog/${article.id}`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-red-light text-brand-black px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3 hover:text-brand-red-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;