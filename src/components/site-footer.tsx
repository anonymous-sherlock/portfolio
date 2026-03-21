import { RssIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import {
  PERONAL_SPOTIFY_URL,
  PERSONAL_GITHUB_URL,
  PERSONAL_LINKEDIN_URL,
  PERSONAL_X_URL,
  SITE_INFO,
  SOURCE_CODE_GITHUB_URL,
} from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com && @iamncdai
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link capitalize transition-[color] hover:text-foreground"
            href={PERSONAL_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            {USER.username}
          </a>
          {/* . 
          The source code is available on{" "}
          <a
            className="link transition-[color] hover:text-foreground"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          . */}
        </p>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground transition-[color] hover:text-foreground max-sm:hidden"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener"
            >
              llms.txt
            </a>

            <Separator className="max-sm:hidden" />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`${PERSONAL_X_URL}?utm_source=akashlayal.dev`}
              target="_blank"
              rel="noopener"
            >
              <Icons.x className="size-[22px]" />
              <span className="sr-only">X</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`${PERSONAL_GITHUB_URL}?utm_source=akashlayal.dev`}
              target="_blank"
              rel="noopener"
            >
              <Icons.github className="size-[22px]" />
              <span className="sr-only">GitHub</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`${PERSONAL_LINKEDIN_URL}?utm_source=akashlayal.dev`}
              target="_blank"
              rel="noopener"
            >
              <Icons.linkedin className="size-[22px]" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`${PERONAL_SPOTIFY_URL}?utm_source=akashlayal.dev`}
              target="_blank"
              rel="noopener"
            >
              <Icons.spotify className="size-[22px]" />
              <span className="sr-only">Spotify</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-[color] hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://www.dmca.com/ProtectionPro.aspx"
              }
              target="_blank"
              rel="noopener"
            >
              <Icons.dmca className="h-4.5 w-auto" />
              <span className="sr-only">DMCA.com Protection Status</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-edge", className)} {...props} />
}
