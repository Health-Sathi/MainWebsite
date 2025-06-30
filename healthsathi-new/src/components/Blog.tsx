// "use client";

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// const posts = [
//   {
//     id: 1,
//     title: 'Understanding Your Blood Test Results',
//     description: 'Learn how to interpret common blood test parameters and what they mean for your health.',
//     image: '/blog/blood-test.jpg',
//     date: 'Jun 16, 2025',
//     category: 'Lab Tests',
//   },
//   {
//     id: 2,
//     title: 'Decoding Your X-ray Report',
//     description: 'A comprehensive guide to understanding the terminology and findings in your X-ray reports.',
//     image: '/blog/xray.jpg',
//     date: 'Jun 10, 2025',
//     category: 'Imaging',
//   },
//   {
//     id: 3,
//     title: 'Common Medical Terms Explained',
//     description: 'A glossary of frequently used medical terms and their meanings in simple language.',
//     image: '/blog/medical-terms.jpg',
//     date: 'Jun 5, 2025',
//     category: 'Education',
//   },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// };

// export default function Blog() {
//   return (
//     <section className="py-24 sm:py-32 bg-gray-50">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-base font-semibold leading-7 text-brand-red-primary">Blog</h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Health Insights & Updates
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Stay informed with our latest articles about health, medical reports, and wellness tips.
//           </p>
//         </div>
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
//         >
//           {posts.map((post) => (
//             <motion.article key={post.id} variants={item} className="flex flex-col items-start">
//               <div className="relative w-full">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   width={500}
//                   height={300}
//                   className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
//                 />
//                 <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
//               </div>
//               <div className="max-w-xl">
//                 <div className="mt-8 flex items-center gap-x-4 text-xs">
//                   <time dateTime={post.date} className="text-gray-500">
//                     {post.date}
//                   </time>
//                   <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
//                     {post.category}
//                   </span>
//                 </div>
//                 <div className="group relative">
//                   <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-brand-red-primary">
//                     <Link href={`/blog/${post.id}`}>
//                       <span className="absolute inset-0" />
//                       {post.title}
//                     </Link>
//                   </h3>
//                   <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//         <div className="mt-16 flex justify-center">
//           <Link
//             href="/blog"
//             className="rounded-md bg-brand-red-primary px-6 py-3 text-sm font-semibold text-brand-white shadow-sm hover:bg-brand-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-primary ring-2 ring-[#EE2A47]"
//           >
//             View All Articles
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }