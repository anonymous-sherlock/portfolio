import { GeistMono } from "geist/font/mono"
import { GeistPixelSquare } from "geist/font/pixel"
import { GeistSans } from "geist/font/sans"
import { Instrument_Serif } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = GeistSans
const fontMono = GeistMono
const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

// export const fontPixel = localFont({
//   src: "../assets/fonts/DepartureMono-Regular.woff2",
//   weight: "400",
//   variable: "--font-pixel",
// })

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  GeistPixelSquare.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]",
  "[--font-serif:var(--font-instrument-serif)]"
)
