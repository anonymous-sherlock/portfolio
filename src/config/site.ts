import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://akashlayal.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

export const X_USERNAME = "@akashlayal_"
export const GITHUB_USERNAME = "anonymous-sherlock"
export const SOURCE_CODE_GITHUB_REPO = "anonymous-sherlock/portfolio"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/anonymous-sherlock/portfolio"
export const PERSONAL_X_URL = "https://x.com/akashlayal_"
export const PERSONAL_GITHUB_URL = "https://github.com/anonymous-sherlock"
export const PERSONAL_LINKEDIN_URL = "https://www.linkedin.com/in/akashlayal"
export const PERONAL_SPOTIFY_URL =
  "https://open.spotify.com/user/31brgiygjwccbjxkiyscyqmwtofq?si=9eb991142fe6430f"

export const SPONSORSHIP_URL = PERSONAL_GITHUB_URL

export const UTM_PARAMS = {
  utm_source: "akashlayal.dev",
}
