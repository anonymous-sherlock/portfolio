# Privacy Policy

**Last updated:** March 22, 2026

**Site:** [akashlayal.dev](https://akashlayal.dev/)  
**Operator / data controller:** Akash Layal (“I”, “me”, “my”)

This policy describes how I collect, use, and protect information when you visit my personal portfolio and blog. I aim to collect only what is useful to run and improve the site, and to be clear about third-party tools involved.

---

## 1. Scope

This policy applies to visitors of **akashlayal.dev** and related pages served from this project (for example blog posts, RSS, and static `.md` exports used for readability). It does **not** govern other websites you reach via outbound links (GitHub, LinkedIn, X, Spotify, etc.), which have their own policies.

---

## 2. Information you provide directly

- **Email or messages** if you contact me (including **support@akashlayal.dev** or other channels linked on the site). I use this only to respond and follow up; I do not sell it or use it for bulk marketing.
- **Content you choose to send** (e.g. message body, signature, attachments) is handled like normal correspondence.

---

## 3. Information collected automatically

### 3.1. Server and hosting logs

The site is hosted on **Vercel**. Like most hosts, Vercel may process technical data such as IP address, request path, timestamps, and headers for delivery, security, abuse prevention, and reliability. I do not use those logs to build individual profiles beyond what the platform provides by default.

### 3.2. Local storage on your device

- **Theme preference** (e.g. light / dark / system) may be stored in **localStorage** so the site remembers your choice between visits.

### 3.3. Analytics and product events (when enabled)

In **production**, if the corresponding environment variables are configured, the site may use:

| Tool        | Purpose (summary) |
| ----------- | ----------------- |
| **PostHog** | Product analytics: feature usage, funnels, and related metrics. |
| **OpenPanel** | Analytics, including **automatic screen / page views** and custom events mirrored from the same instrumentation as PostHog. |

**PostHog** is initialized only when `NEXT_PUBLIC_POSTHOG_KEY` is present. The configuration uses PostHog’s **cookieless** behavior when measurement cookies are not accepted (`cookieless_mode: "on_reject"` in code), to reduce identification before consent where that model applies. The codebase also supports tying **full capture** to a **measurement** consent choice via **c15t** (`posthog.opt_in_capturing` / `posthog.opt_out_capturing`) when that consent layer is active in the deployed app.

**OpenPanel** is used when `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` is set. Custom events sent to both PostHog and OpenPanel can include, for example:

- `blog_search`
- `open_command_menu`, `command_menu_search`, `command_menu_action`
- `copy_email`, `copy_phone_number`
- `copy_npm_command`, `copy_code_block`, `copy_block_code`
- `play_name_pronunciation`

Event payloads may include **non-sensitive properties** needed to understand usage (e.g. search terms or labels associated with the action). They should **not** include passwords or payment data; this site does not collect those through analytics.

If the analytics environment variables are **not** set in a given deployment, those tools are not loaded for that deployment.

### 3.4. Embedded and external content

The site may load resources from third parties when you open a page, for example:

- **Images and assets** from `assets.akashlayal.dev` or other CDNs configured for the project.
- **Images** from `images.unsplash.com` or similar hosts where used.
- **Avatars** from `unavatar.io` or similar services.
- **Spotify** embeds or links if shown on the site.

When your browser requests those resources, the third party may receive data such as your **IP address** and **User-Agent** as part of the HTTP request. I do not control their logging; see their respective privacy policies.

### 3.5. GitHub

Public data from **GitHub** (for example contribution graphs or repository metadata about **my** account) may be fetched for display. That processing concerns **my** public GitHub information, not your GitHub account, unless you interact with GitHub directly.

---

## 4. Cookies and similar technologies

- **Strictly necessary / functional:** needed for basic operation (e.g. theme storage as above).
- **Analytics:** PostHog and related identifiers may apply depending on PostHog’s mode and your choices; OpenPanel may use its own mechanisms as described in OpenPanel’s documentation.

You can often limit cookies through your browser settings. For analytics-specific controls, use any **cookie or consent UI** presented on the site (if present) in addition to browser controls.

---

## 5. Legal bases (EEA / UK and similar)

Where the GDPR or similar laws apply, I rely on:

- **Consent** for non-essential cookies or analytics where required.
- **Legitimate interests** in operating, securing, and improving a small personal site, balanced against your rights.
- **Performance of a request** when you email me and expect a reply.

---

## 6. Retention

- **Analytics:** governed by PostHog, OpenPanel, and Vercel retention settings for each product and project configuration.
- **Email and messages:** kept only as long as needed to handle the conversation or meet legal / tax obligations, unless you ask me to delete earlier and it is feasible.

---

## 7. Sharing and sale of data

I **do not sell** your personal information. I use **processors** (subcontractors such as Vercel, PostHog, OpenPanel) strictly to operate the site and understand usage. They process data under their own terms and privacy policies.

---

## 8. International transfers

If you access the site from outside the country where servers run, data may be processed in other countries (including the United States) where providers operate. Those transfers may rely on standard contractual clauses or other mechanisms the providers offer.

---

## 9. Your rights

Depending on where you live, you may have rights to **access**, **correct**, **delete**, **restrict**, or **object** to certain processing, or to **withdraw consent** for analytics. To exercise these rights or ask questions:

- **Email:** [support@akashlayal.dev](mailto:support@akashlayal.dev)  
- **GitHub:** [https://github.com/anonymous-sherlock](https://github.com/anonymous-sherlock)

I will respond within a reasonable time. If data sits with a vendor (e.g. PostHog), I may need to point you to their tools or assist where I can.

---

## 10. Children

The site is **not directed at children under 16**. I do not knowingly collect personal information from children. If you believe a child has provided data, contact me and I will take appropriate steps.

---

## 11. Security

I use **HTTPS**, limit access to accounts I control, and choose established providers. No method of transmission or storage is 100% secure.

---

## 12. Changes

I may update this policy when the site, tools, or laws change. The **Last updated** date at the top will change; substantive updates may also be noted on the site when practical.

---

## 13. Disclaimer

This document describes my practices in good faith but is **not legal advice**. If you fork this project, have it reviewed for your own jurisdiction and use case.
