export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Hacker News",
  description: "Website Designed for Hacker News",
  mainNav: [
    {
      title: "new",
      href: "/new",
    },
    {
      title: "best",
      href: "/best",
    },
    {
      title: "comments",
      href: "/comments",
    },
    {
      title: "ask",
      href: "/ask",
    },
    {
      title: "show",
      href: "/show",
    },
    {
      title: "jobs",
      href: "/jobs",
    },
    {
      title: "submit",
      href: "/submit",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github:
      "https://github.com/boringtutor/FileTracker/tree/main/frontEnd/filetracker",
    docs: "https://ui.shadcn.com",
  },
}
