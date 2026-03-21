import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Akash",
  lastName: "Layal",
  displayName: "Akash Layal / Sherlock",
  username: "sherlock",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack Developer building SaaS, e-commerce, and CMS platforms.",
  flipSentences: [
    "Full Stack Developer",
    "React, Next.js, and Node.js",
    "SaaS, e-commerce, and CMS",
  ],
  address: "Noida, Uttar Pradesh, India",
  phoneNumber: "KzkxIDk4NyAwNDcgNDE4MQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YWthc2hsYXlhbC5kZXNpZ25AZ21haWwuY29t", // base64 encoded
  website: "https://akashlayal.dev",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "AdsCrush",
      website: "https://adscrush.com",
      experienceId: "adscrush",
    },
    {
      title: "Freelance Developer",
      company: "Freelance",
      website: "https://akashlayal.dev",
      experienceId: "freelance",
    },
  ],
  about: `
- Full Stack Developer with 4+ years of experience delivering production-grade platforms for international clients using **React**, **Next.js**, **Node.js**, and **TypeScript**.
- Build across the stack, from REST and tRPC APIs to database design, CI/CD automation, and edge deployments on **Vercel** and **Cloudflare Workers**.
- Focused on maintainable architecture, performance, and polished interfaces for SaaS products, marketplaces, and CMS-driven experiences.
- Based in **Noida, India**, currently working across remote product and freelance engagements.
`,
  avatar: "/avatar.jpg",
  ogImage: `/og/simple?title=${encodeURIComponent("Akash Layal")}&description=${encodeURIComponent("Full Stack Developer building SaaS, e-commerce, and CMS platforms.")}`,
  namePronunciationUrl:
    "https://assets.akashlayal.dev/sounds/akash-layal-pronunciation.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Akash Layal",
    "Sherlock",
    "akashlayal",
    "anonymous-sherlock",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Noida",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
