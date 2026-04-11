import { PrismaClient, PostStatus } from '../src/generated/prisma'; 
// Or if you are inside the prisma folder:

const prisma = new PrismaClient();

async function main() {
  const AUTHOR_ID = "cmnq5n7li0000mgxxdcd6ch1g";
  
  // Mapping categories to your provided IDs
  const CAT_ENG = "cmnq65loq0001mgxxm1n0n053"; // e.g., Software Engineering
  const CAT_BIZ = "cmnq6h4wo0004mgxxegdb48p4"; // e.g., Digital Strategy

  const posts = [
    {
      title: "Optimizing M-Pesa STK Push for High-Volume Retail",
      slug: "optimizing-mpesa-stk-push-kenya",
      cat: CAT_ENG,
      excerpt: "Technical strategies to reduce latency and handle transaction timeouts in Safaricom's Daraja API."
    },
    {
      title: "Why Next.js 15 is the Standard for Kenyan Startups",
      slug: "nextjs-15-kenyan-startups",
      cat: CAT_ENG,
      excerpt: "Explaining Server Components and partial prerendering for low-bandwidth environments."
    },
    {
      title: "The ROI of Technical Rescue: Fixing Legacy Systems",
      slug: "roi-technical-rescue-nairobi",
      cat: CAT_BIZ,
      excerpt: "How rewriting broken codebases saves Kenyan businesses millions in lost conversion revenue."
    },
    {
      title: "Database Indexing: Scaling Postgres for 1M Users",
      slug: "database-indexing-postgres-scale",
      cat: CAT_ENG,
      excerpt: "A deep dive into B-Tree indexes and query optimization for high-concurrency applications."
    },
    {
      title: "Mobile-First Design: Beyond Responsive Breakpoints",
      slug: "mobile-first-design-east-africa",
      cat: CAT_BIZ,
      excerpt: "Designing for the unique constraints of mobile-dominant markets in East Africa."
    },
    {
      title: "Securing Fintech: End-to-End Encryption in Node.js",
      slug: "securing-fintech-node-js",
      cat: CAT_ENG,
      excerpt: "Implementing bank-grade security protocols for sensitive data handling and storage."
    },
    {
      title: "Headless CMS vs WordPress: Which Scales Better?",
      slug: "headless-cms-vs-wordpress-kenya",
      cat: CAT_BIZ,
      excerpt: "A performance comparison for marketing teams who need speed and autonomy."
    },
    {
      title: "Real-time Sync with Supabase and React",
      slug: "real-time-sync-supabase-react",
      cat: CAT_ENG,
      excerpt: "Building collaborative tools that feel instant using PostgreSQL webhooks."
    },
    {
      title: "The Cost of Slow Web Performance in E-commerce",
      slug: "cost-slow-web-performance-ecommerce",
      cat: CAT_BIZ,
      excerpt: "How 100ms of delay can decrease your conversion rate by 7% in the Nairobi market."
    },
    {
      title: "Automating Deployments with GitHub Actions",
      slug: "automating-deployments-github-actions",
      cat: CAT_ENG,
      excerpt: "Setting up a CI/CD pipeline that ensures zero-downtime for production apps."
    }
  ];

  console.log('🚀 Starting seed for 10 posts...');

  for (const p of posts) {
    await prisma.post.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        status: 'PUBLISHED' as PostStatus,
        authorId: AUTHOR_ID,
        categoryId: p.cat,
        featuredImage: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800`, // Professional Tech Placeholder
        content: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: `This is a technical breakdown of ${p.title}. Fyutchalabs focuses on high-performance engineering for the Kenyan market.` }]
            }
          ]
        }
      },
    });
  }

  console.log('✅ Seed successful. 10 posts linked to your IDs.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });