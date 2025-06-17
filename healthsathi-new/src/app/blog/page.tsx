import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage: string;
}

export default async function BlogPage() {
  try {
    const response = await fetch('https://blog.health-sathi.org/wp-json/wp/v2/posts?_embed', { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const data = await response.json();
    
    const posts: BlogPost[] = data.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      date: new Date(post.date).toLocaleDateString(),
      slug: post.slug,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-blog-image.jpg'
    }));

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#ee2a47]">HealthSathi Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#ee2a47] hover:border-2">
              <Image 
                src={post.featuredImage} 
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />

            
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  <Link href={`/blog/${post.slug}`} className="group relative inline-block text-[#ee2a47]">
                    <span className="relative z-10">{post.title}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ee2a47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                <div 
                  className="text-gray-800 text-base leading-relaxed mb-4 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-[#ee2a47] text-white px-4 py-2 rounded hover:bg-[#d62540] transition-colors relative overflow-hidden group"
                >
                  <span className="relative z-10">Read More</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error instanceof Error ? error.message : 'An error occurred'}</div>
      </div>
    );
  }
} 








