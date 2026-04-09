export const siteConfig = {
  name: "fyutchalabs",
  description: "Performance-driven web development and digital marketing agency.",
  url: "https://fyutchalabs.com",
  ogImage: "https://fyutchalabs.com/og.jpg", // For social media sharing
  links: {
    whatsapp: "https://wa.me/254790070100", // Replace with your actual number
    twitter: "https://twitter.com/fyutchalabs",
  },
  navLinks: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Posts", href: "/posts" },
  ],
  contact: {
    email: "hello@fyutchalabs.com",
    address: "Nairobi, Kenya",
  }
};

export type SiteConfig = typeof siteConfig;