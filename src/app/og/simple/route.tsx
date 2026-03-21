import { readFileSync } from "node:fs"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { ALMark } from "@/components/al-mark"

const geistMedium = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-Medium.ttf")
)

const geistSemiBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-SemiBold.ttf")
)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get("title")
  const description = searchParams.get("description")

  return new ImageResponse(
    <div tw="w-full h-full flex text-white" style={{ background: "#000" }}>
      {/* ── Gradient background ── */}
      <div
        tw="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 20% 110%, #1a0533 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 60% at 80% -10%, #0d1f40 0%, transparent 55%), " +
            "radial-gradient(ellipse 50% 50% at 50% 50%, #0f0f1a 0%, #000000 100%)",
        }}
      />

      {/* ── SVG noise overlay ── */}
      <svg
        // tw="absolute inset-0"
        width="1200"
        height="630"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18 }}
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="1200" height="630" filter="url(#noise)" />
      </svg>

      {/* ── Subtle inner glow ring ── */}
      <div
        tw="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(120,60,220,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Corner border lines ── */}
      <div
        tw="absolute flex inset-y-0 w-px left-16"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
      <div
        tw="absolute flex inset-y-0 w-px right-16"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
      <div
        tw="absolute flex inset-x-0 h-px top-16"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
      <div
        tw="absolute flex inset-x-0 h-px bottom-16"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />

      {/* ── Accent gradient line at top ── */}
      <div
        tw="absolute flex inset-x-0 h-px top-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #7c3aed 30%, #3b82f6 60%, #06b6d4 80%, transparent 100%)",
        }}
      />

      {/* ── Mark / logo ── */}
      <div tw="absolute flex bottom-16 right-16" style={{ opacity: 0.85 }}>
        <ALMark width={128} height={64} />
      </div>

      {/* ── Text content ── */}
      <div tw="absolute inset-32 flex flex-col w-[896px] justify-center">
        <div
          style={{
            fontFamily: "GeistSans",
            fontWeight: 600,
            fontSize: 64,

            textWrap: "balance",
            letterSpacing: "-0.025em",
            background:
              "linear-gradient(135deg, #ffffff 40%, rgba(180,140,255,0.85) 100%)",
            backgroundClip: "text",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </div>

        {description && (
          <div
            tw="mt-4"
            style={{
              fontFamily: "GeistSans",
              fontWeight: 500,
              fontSize: 32,

              textWrap: "balance",
              color: "rgba(180,180,210,0.75)",
            }}
          >
            {description}
          </div>
        )}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "GeistSans",
          data: geistMedium,
          weight: 500,
        },
        {
          name: "GeistSans",
          data: geistSemiBold,
          weight: 600,
        },
      ],
    }
  )
}
