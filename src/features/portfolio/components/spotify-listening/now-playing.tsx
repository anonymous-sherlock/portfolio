"use client"

import { ExternalLink } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"

import type { SpotifyTrack } from "../../data/spotify"

const API_URL = "/api"

type NowPlayingResponse = {
  isPlaying: boolean
  playedAt: string
  track: SpotifyTrack
} | null

function TrackRow({
  track,
  className,
}: {
  track: SpotifyTrack
  className?: string
}) {
  return (
    <a
      href={track.externalUrl}
      target="_blank"
      rel="noopener"
      className={cn(
        "group flex items-center gap-3 rounded-lg p-2 pr-1 hover:bg-accent-muted",
        className
      )}
    >
      <div className="relative size-10 overflow-hidden rounded-lg bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">
        {track.imageUrl ? (
          <img
            src={track.imageUrl}
            alt={track.name}
            className="size-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full place-items-center text-xs text-muted-foreground">
            SP
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium">{track.name}</div>
        <div className="truncate text-xs text-muted-foreground">
          {track.artists.map((a) => a.name).join(", ")}
        </div>
      </div>

      <ExternalLink className="size-4 opacity-0 group-hover:opacity-100" />
    </a>
  )
}

export function SpotifyNowPlaying() {
  const [track, setTrack] = useState<NowPlayingResponse>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNowPlaying = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/now-playing`)
      if (!response.ok) throw new Error(`Failed with status ${response.status}`)

      const data = (await response.json()) as NowPlayingResponse
      setTrack(data)
      setError(null)
    } catch (err) {
      setError("Failed to fetch current song")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchNowPlaying()
    const interval = setInterval(() => {
      void fetchNowPlaying()
    }, 30000)
    return () => clearInterval(interval)
  }, [fetchNowPlaying])

  if (loading) {
    return (
      <div className="flex animate-pulse items-center gap-3 rounded-lg p-2">
        <div className="size-10 shrink-0 rounded-lg bg-muted" />
        <div className="flex-1">
          <div className="mb-2 h-4 w-40 rounded bg-muted" />
          <div className="h-3 w-28 rounded bg-muted/70" />
        </div>
      </div>
    )
  }

  if (error || !track) {
    return (
      <p className="text-sm text-muted-foreground">
        Nothing playing right now.
      </p>
    )
  }

  return (
    <div className="relative">
      {track.isPlaying && (
        <span className="absolute top-1 left-1 h-2 w-2 animate-pulse rounded-full bg-green-500" />
      )}

      <TrackRow track={track.track} className="bg-accent-muted/40" />
    </div>
  )
}
