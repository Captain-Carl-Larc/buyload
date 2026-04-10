// components/public/sections/BlogPosts.tsx
// This component is intentionally data-driven.
// Wire `posts` to your MDX source (e.g. contentlayer, next-mdx-remote, or a lib/posts helper).

import Link from "next/link";

// Placeholder shape — replace with your actual MDX post type
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
};

// Static placeholder posts — swap with dynamic MDX data when ready
const posts: Post[] = [
  {
    slug: "why-your-business-needs-a-fast-website",
    title: "Why Your Business Website Needs to Load in Under 3 Seconds",
    excerpt:
      "A slow website doesn't just frustrate users — it actively costs you customers. Here's the data and what to do about it.",
    date: "Apr 2, 2025",
    tag: "Performance",
    readTime: "4 min read",
  },
  {
    slug: "what-is-a-cms-and-do-you-need-one",
    title: "What is a CMS and Does Your Business Actually Need One?",
    excerpt:
      "Content management systems sound technical. We break down what they are, and how to decide if one is right for your site.",
    date: "Mar 18, 2025",
    tag: "CMS",
    readTime: "5 min read",
  },
  {
    slug: "signs-your-website-is-hurting-sales",
    title: "7 Signs Your Website is Quietly Hurting Your Sales",
    excerpt:
      "Most business owners don't realise their website is leaking leads until they look at the numbers. Here's what to check.",
    date: "Mar 5, 2025",
    tag: "Strategy",
    readTime: "6 min read",
  },
];

export default function BlogPosts() {
  return (
    <section className="bg-gray-50 py-24 w-full">
      <div className="mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="flex sm:flex-row flex-col justify-between sm:items-end gap-6 mb-14">
          <div>
            <span className="font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">
              Insights
            </span>
            <h2 className="mt-3 font-bold text-gray-900 text-4xl tracking-tight">
              From the blog
            </h2>
          </div>
          <Link
            href="/posts"
            className="font-semibold text-orange-500 hover:text-orange-600 text-sm hover:underline underline-offset-4 whitespace-nowrap transition-colors"
          >
            Read all posts →
          </Link>
        </div>

        {/* Posts */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group flex flex-col gap-4 bg-white hover:shadow-lg hover:shadow-orange-50 p-7 border border-gray-200 hover:border-orange-300 rounded-xl transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <span className="bg-orange-50 px-2 py-1 rounded-full font-bold text-[11px] text-orange-500 uppercase tracking-widest">
                  {post.tag}
                </span>
                <span className="text-gray-400 text-xs">{post.readTime}</span>
              </div>

              <h3 className="font-bold text-gray-900 group-hover:text-orange-500 text-base leading-snug transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>

              <div className="flex justify-between items-center mt-auto pt-4 border-gray-100 border-t">
                <span className="text-gray-400 text-xs">{post.date}</span>
                <span className="font-semibold text-orange-500 text-xs group-hover:underline">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}