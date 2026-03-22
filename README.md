# [akashlayal.dev](https://akashlayal.dev) &middot; [![GitHub License](https://img.shields.io/github/license/anonymous-sherlock/portfolio?label=License)](https://github.com/anonymous-sherlock/portfolio/blob/main/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/anonymous-sherlock/portfolio?style=flat&label=Stars)](https://github.com/anonymous-sherlock/portfolio)

A minimal, pixel-perfect portfolio and blog for **Akash Layal** (Sherlock), a full stack developer building SaaS, e-commerce, and CMS experiences.

Live site: [https://akashlayal.dev](https://akashlayal.dev/)

## Overview

### Stack

- Next.js 16
- Tailwind CSS v4
- shadcn/ui

### Featured

- Clean, responsive layout with light/dark themes
- vCard download
- SEO ([JSON-LD](https://json-ld.org), sitemap, robots)
- AI-friendly [`/llms.txt`](https://llmstxt.org) and raw `.mdx` routes for posts
- Spam-protected contact fields on the profile
- PWA-ready
- Analytics via [PostHog](https://posthog.com) and [OpenPanel](https://openpanel.dev), gated behind [c15t](https://c15t.com) consent

### Content

MDX-powered docs in `src/features/doc/content/`:

- Blog posts rendered under `/blog`
- Syntax highlighting for code in posts
- Dynamic OG images for link previews
- RSS at `/blog/rss` (and `/rss` rewrite)

## Development

See the [Development Guide](./DEVELOPMENT.md).

## License

[MIT](./LICENSE). You may reuse this codebase; remove personal data and branding before publishing your own site.

## Acknowledgments

Upstream design and structure are heavily inspired by [chanhdai.com](https://chanhdai.com) / [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com). Thank you to the [shadcn/ui](https://ui.shadcn.com) ecosystem and related open-source projects.

## Repository

- Source: [github.com/anonymous-sherlock/portfolio](https://github.com/anonymous-sherlock/portfolio)
- Questions about privacy or data: [support@akashlayal.dev](mailto:support@akashlayal.dev)
