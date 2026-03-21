import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "adscrush",
    companyName: "AdsCrush Pvt. Ltd.",
    companyWebsite: "https://adscrush.com",
    companyLogo: "https://assets.akashlayal.dev/images/companies/adscrush.png",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "06.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Architected the AdsCrush SaaS CRM platform for lead management, campaign tracking, and conversion analytics using Next.js, TypeScript, tRPC, and role-based access control for 20+ active business clients.
- Designed and maintained CI/CD pipelines via GitHub Actions, deploying across Vercel and Cloudflare Workers for high availability.
- Built the public-facing REST API with full OpenAPI documentation at [docs.adscrush.com](https://docs.adscrush.com), enabling third-party integrations.
- Containerized services with Docker and improved environment consistency across development and production.`,
        skills: [
          "TypeScript",
          "Next.js",
          "Node.js",
          "tRPC",
          "OpenAPI",
          "GitHub Actions",
          "Vercel",
          "Cloudflare Workers",
          "Docker",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "01.2022",
        },
        employmentType: "Self-employed",
        icon: "code",
        description: `- Delivered end-to-end web solutions for 6+ international clients across media, architecture, fashion, and e-commerce.
- Managed full project lifecycles from requirements gathering and product planning through development and deployment.`,
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "E-commerce",
          "CMS",
          "Performance Optimization",
          "Deployment",
          "Client Communication",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "contentegy",
    companyName: "Contentegy Pvt. Ltd.",
    companyLogo:
      "https://assets.akashlayal.dev/images/companies/contentegy.png",
    companyWebsite: "https://contentegy.com",
    positions: [
      {
        id: "1",
        title: "Web Developer",
        employmentPeriod: {
          start: "06.2022",
          end: "06.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed full-stack web applications using React.js, Next.js, Node.js, and TypeScript, including WordPress and Shopify CMS work for 10+ client projects.
- Resolved critical performance bottlenecks through code splitting, lazy loading, and image optimization, improving average page load time by 40%.`,
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "WordPress",
          "Shopify",
          "Node.js",
          "Image Optimization",
          "Code Splitting",
          "Lazy Loading",
        ],
      },
    ],
  },
  {
    id: "insta-pc-services",
    companyName: "Insta PC Services Pvt. Ltd.",
    positions: [
      {
        id: "1",
        title: "Web Developer Intern",
        employmentPeriod: {
          start: "10.2021",
          end: "12.2021",
        },
        employmentType: "Internship",
        icon: "code",
        description:
          "- Built landing pages for 7+ product concepts using HTML5, CSS3, and Bootstrap; contributed to 15+ live projects.",
        skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      },
    ],
  },
]
