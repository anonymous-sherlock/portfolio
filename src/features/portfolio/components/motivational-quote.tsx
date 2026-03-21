const CORNER_POSITIONS = [
  "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
] as const

function CornerPlus({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      className={`pointer-events-none absolute z-30 size-5 ${className}`}
      strokeWidth="1"
      stroke="currentColor"
    >
      <path
        d="M12.001 5.00003V19.002"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <path
        d="M19.002 12.002L4.99998 12.002"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  )
}

function SideBorder({ side }: { side: "left" | "right" }) {
  const sideClassName = side === "left" ? "left-0 border-l" : "right-0 border-r"

  return (
    <div
      className={`pointer-events-none absolute inset-y-0 w-px ${sideClassName}`}
    />
  )
}

export function MotivationalQuote() {
  return (
    <div className="w-full">
      <div className="pointer-events-none relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 overflow-hidden border-y px-4 py-8 dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]">
        {CORNER_POSITIONS.map((position) => (
          <CornerPlus key={position} className={position} />
        ))}

        <SideBorder side="left" />
        <SideBorder side="right" />

        <div className="group relative flex flex-col items-center overflow-hidden py-4 text-center sm:py-6">
          <div className="pointer-events-none absolute inset-0"></div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="mb-4 text-4xl text-muted-foreground/60 sm:mb-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
          </svg>
          <blockquote className="relative z-10 max-w-3xl px-1 sm:px-4">
            <p className="font-instrument-serif text-title/85 text-[22px] leading-snug font-semibold tracking-normal italic sm:text-[28px]">
              &ldquo;Do so much work that it would be unreasonable for
              <br className="hidden sm:block" /> you to not be
              successful.&rdquo;
            </p>
          </blockquote>
          <div className="z-10 mt-6 flex items-center gap-3 sm:mt-8">
            <div className="h-px w-8 bg-foreground/35"></div>
            <span className="text-xs font-semibold tracking-widest text-foreground/70 uppercase sm:text-sm">
              Alex Hormozi
            </span>
            <div className="h-px w-8 bg-foreground/35"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
