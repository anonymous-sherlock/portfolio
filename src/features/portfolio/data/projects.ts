import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "swing-boudoir-magazine",
    title: "Swing Boudoir Magazine",
    theme: true,
    logo: "https://assets.akashlayal.dev/images/project-logos/swing-boudoir-magazine.png",
    period: {
      start: "06.2023",
    },
    link: "https://app.swingboudoirmag.com",
    skills: [
      "TanStack Router",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "OpenAPI",
      "Node.js",
      "MySQL",
      "Redis",
      "Cron Jobs",
      "Paypal",
      "Stripe",
      "Email Marketing",
    ],
    description: `- Built a full-stack talent competition and digital magazine platform for a brand with 33K+ Instagram followers.
- Added submission portal, user authentication, profile management, and magazine browsing.
- Delivered a responsive, brand-matched experience backed by a private production codebase.`,
    isExpanded: true,
  },
  {
    id: "evlovve",
    title: "Evlovve",
    logo: "https://assets.akashlayal.dev/images/project-logos/evlovve.webp",
    period: {
      start: "04.2026",
      end: "06.2026",
    },
    link: "https://app.evlovve.com/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "tRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis",
      "Shopify",
      "Liquid",
      "Turborepo",
    ],
    description: `- Built a dynamic jewelry pricing platform with a Turborepo monorepo architecture (Hono.js + tRPC backend, Next.js 16 dashboard).
- Implemented auto-pricing engine using live gold/silver/platinum spot prices with configurable margins and diamond pricing tiers.
- Integrated bidirectional Shopify product sync via GraphQL Admin API with Shopify Payments and scheduled cron jobs for automated price updates.
- Revamped the full Shopify storefront (113 sections, 84 blocks) with a custom 360° product viewer and an engraving tool featuring live preview, symbol picker, and font selection.`,
  },
  {
    id: "the-mac-magazines",
    title: "The MAC Magazines",
    logo: "https://assets.akashlayal.dev/images/project-logos/mac-magazine.webp",
    period: {
      start: "06.2022",
      end: "06.2023",
    },
    link: "https://themacmagazines.com",
    skills: ["WordPress", "PHP", "WooCommerce", "CSS3", "JavaScript"],
    description: `- Built a fashion and celebrity magazine platform with a model submission portal and custom editorial flows.
- Integrated WooCommerce payment flows for paid cover and billboard submissions.
- Structured the content model around custom post types across fashion, beauty, and culture categories.`,
  },
  {
    id: "kara-mowad",
    title: "Kara Mowad",
    logo: "https://assets.akashlayal.dev/images/project-logos/kara-mowad.webp",
    theme: true,
    period: {
      start: "01.2022",
    },
    link: "https://karamowad.com",
    skills: ["HTML5", "CSS3", "JavaScript", "GSAP", "Figma", "SEO"],
    description: `- Designed and developed a high-impact animated portfolio for a Texas-based commercial model.
- Built GSAP-powered page transitions and motion-heavy interactions while keeping the experience responsive and SEO-friendly.
- Delivered the full design-to-development workflow from Figma to launch.`,
  },
  {
    id: "um-architects",
    title: "UM Architects",
    logo: "https://assets.akashlayal.dev/images/project-logos/um-architects.webp",
    period: {
      start: "02.2025",
      end: "04.2025",
    },
    link: "https://umarchitects.com",
    skills: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO"],
    description: `- Built a professional portfolio and services website for a Delhi-based architecture and interior design firm.
- Structured content across residential, commercial, hospitality, and industrial project categories with a full portfolio gallery.
- Delivered a responsive, brand-aligned experience showcasing architectural consultancy, interior design, Vastu, and structural engineering services.`,
  },
  {
    id: "con-magazine",
    title: "Con Magazine & Brand Suite",
    logo: "https://assets.akashlayal.dev/images/project-logos/con-magazine.webp",
    period: {
      start: "05.2023",
    },
    link: "https://www.conmagazines.com/",
    skills: [
      "Zapier",
      "Shopify API",
      "Wix API",
      "Google APIs",
      "Email Marketing",
    ],
    description: `- Built a Zapier-powered automation ecosystem for Con, Alphero, Envy, and Will magazine brands.
- Implemented order-driven digital delivery: fetches emails from Wix and Shopify, detects combo/digital products, and auto-sends digital copies to customers.
- Built a model submission pipeline: Google Form upload → Zapier categorization by magazine and model name → Google Drive organization → Shopify record updates → automated welcome emails.
- Created a verification sub-agent that validates model leads, sends verified status emails, and notifies admin of genuine leads.`,
  },
  {
    id: "glam-model",
    title: "The Glam Model",
    logo: "https://assets.akashlayal.dev/images/project-logos/glam-model.png",
    period: {
      start: "03.2025",
      end: "04.2025",
    },
    link: "https://github.com/anonymous-sherlock/the-glam-model",
    skills: ["Shopify", "Liquid", "CSS3", "JavaScript"],
    description: `- Developed a custom Shopify theme for a fashion and modelling brand from the ground up.
- Built structured layouts using Liquid templating across sections, snippets, and templates for a fully modular theme architecture.
- Localisation-ready with a multi-locale config and custom asset pipeline.`,
  },
  {
    id: "velora",
    title: "Velora",
    logo: "https://assets.akashlayal.dev/images/project-logos/velora.webp",
    period: {
      start: "05.2026",
    },
    link: "https://velora.akashlayal.dev/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "FFmpeg",
      "sharp",
      "Docker",
    ],
    description: `- Built a full-stack app that converts product videos into interactive 360° spin experiences.
- Architected a standalone Hono.js video processing service with FFmpeg frame extraction, sharp optimisation, and ZIP packaging.
- Implemented real-time progress updates via Server-Sent Events and a responsive 360° viewer with grid/list frame preview.`,
  },
  {
    id: "all-that-is",
    title: "All That Is",
    logo: "https://assets.akashlayal.dev/images/project-logos/all-that-is.webp",
    period: {
      start: "04.2025",
    },
    link: "https://allthatis.in",
    skills: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO"],
    description: `- Built a Bollywood and Indian cinema editorial platform covering news, reviews, box office reports, and exclusive editorial series.
- Structured content across custom categories including CinePedia, Cinema Mein Darshan, Spoiler Alert, and Post-Credit Scene.
- Delivered a fully responsive, brand-aligned reading experience with a dark/light mode toggle and newsletter integration.`,
  },
  {
    id: "bohot-simple-hai",
    title: "Bohot Simple Hai",
    logo: "https://assets.akashlayal.dev/images/project-logos/bohot-simple-hai.webp",
    period: {
      start: "04.2025",
    },
    link: "https://bohotsimplehai.com",
    skills: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO"],
    description: `- Built a Hindi personal development and analysis platform covering psychology, philosophy, business, and spirituality.
- Structured content across editorial series including Art of Seduction, 48 Laws of Power, Analysis with Aman, and stock market content.
- Delivered a responsive bilingual-friendly experience with YouTube video embeds, e-book integration, and newsletter support.`,
  },
  {
    id: "nakhraa",
    title: "Nakhraa",
    logo: "https://assets.akashlayal.dev/images/project-logos/nakhraa.webp",
    period: {
      start: "09.2025",
      end: "11.2025",
    },
    link: "https://www.instagram.com/shop.nakhraa",
    skills: ["Shopify", "Liquid", "CSS3", "JavaScript"],
    description: `- Built a trendy jewellery e-commerce store on Shopify for an Indian fashion jewellery brand.
  - Implemented custom collection pages, product filtering, and a promotional banner system for seasonal sales.
  - Delivered a fully responsive storefront with optimised product listings across jewellery categories.`,
  },
  {
    id: "carspartshop",
    title: "Cars Part Shop",
    logo: "https://assets.akashlayal.dev/images/project-logos/carspartshop.webp",
    period: {
      start: "05.2025",
      end: "07.2025",
    },
    link: "https://carspartshop.com",
    skills: ["WordPress", "PHP", "WooCommerce", "CSS3", "JavaScript"],
    description: `- Developed an online auto parts marketplace specialising in refurbished and aftermarket parts for a wide range of vehicle brands.
- Integrated a parts finder tool enabling customers to search by brand, make, model, and year.
- Built a customer-centric storefront with 365-day support workflows and streamlined order dispatch flows.`,
  },
  {
    id: "sherlock-discord-bot",
    title: "Sherlock Discord Bot",
    period: {
      start: "01.2025",
      end: "02.2025",
    },
    link: "https://github.com/anonymous-sherlock/sherlock-discord-bot",
    skills: ["TypeScript", "Node.js", "Discord.js"],
    description: `- Built a feature-rich Discord bot in TypeScript with a modular command architecture.
- Structured with ESLint and strict TypeScript config for maintainability and type safety.`,
  },
  {
    id: "file-uploader",
    title: "File Uploader",
    period: {
      start: "07.2025",
      end: "08.2025",
    },
    link: "https://github.com/anonymous-sherlock/adscrush-file-uploader",
    skills: ["TypeScript", "Node.js", "Express", "multer"],
    description: `- Built a RESTful file upload API using Node.js, Express, multer and the express middleware.
- Configured nodemon for a smooth local development workflow with TypeScript compilation.
- Clean project structure with ESLint, Prettier, and strict TS settings for code quality.`,
  },
  {
    id: "7dollar-shop",
    title: "7Dollar Shop",
    period: {
      start: "10.2025",
      end: "11.2025",
    },
    link: "https://github.com/anonymous-sherlock/7dollarShop",
    skills: ["Shopify", "Liquid", "CSS3", "JavaScript"],
    description: `- Built a multi-brand e-commerce store on Shopify with support for multiple product categories and vendors.
- Implemented custom collection pages, product filtering, and a streamlined checkout experience.
- Delivered a fully responsive storefront optimised for discoverability and conversion.`,
  },
]
