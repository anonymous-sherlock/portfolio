# AI Agent Guidelines for akashlayal.dev

Next.js 16 (App Router) portfolio and blog.

**Stack**: TypeScript, Tailwind CSS v4, shadcn/ui, MDX, pnpm, Vercel

## Project Structure

| Directory                              | Purpose                                                |
| -------------------------------------- | ------------------------------------------------------ |
| `src/app/`                             | App Router pages, layouts, API routes                  |
| `src/components/`                      | Shared UI components                                   |
| `src/features/`                        | Feature modules: `doc`, `blog`, `portfolio`, `sponsor`   |
| `src/config/`                          | Site configuration (`site.ts`)                         |
| `src/hooks/`, `src/lib/`, `src/utils/` | Hooks, libraries, utilities                            |

**Key files**: `components.json` (shadcn CLI / UI aliases), `src/features/portfolio/data/` (portfolio data), `.env.example` (env vars)

## Content System

Blog posts live in `src/features/doc/content/` as MDX files. `getBlogDocs()` returns posts where `category` is not `"components"` (legacy filter; new posts can omit `category`).

- **Data layer**: `src/features/doc/data/documents.ts` (`getAllDocs`, `getDocBySlug`, `getBlogDocs`)
- **Blog UI**: `src/features/blog/` (rendering only, imports data from `features/doc`)

## Coding Guidelines

- TypeScript strict mode; explicit types when necessary
- kebab-case file naming
- Descriptive names; comments only for "why", not "what"
- No emojis in code, comments, or commit messages
- Tailwind CSS v4 syntax; support dark/light modes
- Follow SOLID principles

## Commands

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm lint         # ESLint
pnpm format:write # Prettier
pnpm check-types  # Type checking
```
