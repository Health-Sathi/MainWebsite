import Link from 'next/link';
import Image from 'next/image';
import { GiGClef } from 'react-icons/gi';
import { FaAnglesLeft, FaF, FaYelp } from 'react-icons/fa6';
import { TbHistory } from 'react-icons/tb';
import { join } from 'path';
import { Yaldevi, Yarndings_20_Charted, ZCOOL_KuaiLe } from 'next/font/google';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  author: string;
  featuredImage: string;
}

export async function generateStaticParams() {
  try {
    const response = await fetch('https://blog.health-sathi.org/wp-json/wp/v2/posts?per_page=100');
    const posts = await response.json();
    
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const response = await fetch(`https://blog.health-sathi.org/wp-json/wp/v2/posts?slug=${params.slug}&_embed`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    const data = await response.json();
    
    if (data.length === 0) {
      throw new Error('Post not found');
    }

    const postData = data[0];
    const post: BlogPost = {
      title: postData.title.rendered,
      content: postData.content.rendered,
      date: new Date(postData.date).toLocaleDateString(),
      author: postData._embedded?.author?.[0]?.name || 'HealthSathi Team',
      featuredImage: postData._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-blog-image.jpg'
    };

    return (
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/blog"
          className="group relative inline-block mb-8 text-[#ee2a47]"
        >
          <span className="relative z-10">← Back to Blog</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ee2a47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        
        <article className="max-w-4xl mx-auto bg-[#18181b] rounded-xl shadow-lg p-8 md:p-12">
          <Image 
            src={post.featuredImage} 
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-4xl font-bold mb-4 text-[#ee2a47]">{post.title}</h1>
          <div className="flex items-center text-gray-400 mb-8 text-sm">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#ee2a47] prose-headings:font-bold prose-p:mb-6 prose-p:leading-relaxed prose-strong:text-[#ee2a47] prose-em:text-[#ee2a47] prose-li:mb-2 prose-a:text-[#ee2a47] prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-[#ee2a47] prose-blockquote:pl-4 prose-blockquote:text-gray-300 prose-img:rounded-lg prose-img:my-4 prose-table:my-4 prose-table:border prose-table:border-gray-700 prose-th:bg-[#18181b] prose-th:text-[#ee2a47] prose-th:font-bold prose-td:border prose-td:border-gray-700 prose-code:bg-gray-900 prose-code:text-[#ee2a47] prose-code:px-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
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