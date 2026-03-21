"use client"

import { useTheme } from "next-themes"
import { toast } from "sonner"

import { copyText } from "@/utils/copy"

import { ALMark, getALMarkSVG } from "./al-mark"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            const svg = getALMarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            )
            copyText(svg)
            toast.success("Monogram as SVG copied")
          }}
        >
          <ALMark />
          Copy Monogram as SVG
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
