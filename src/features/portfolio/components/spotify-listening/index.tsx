import { ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  getSpotifyRecentlyPlayed,
  SPOTIFY_PLAYLIST_ID,
  type SpotifyTrack,
} from "../../data/spotify"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel"
import { SpotifyNowPlaying } from "./now-playing"

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

export async function SpotifyListening() {
  const hasSpotifyCreds = Boolean(
    process.env.SPOTIFY_CLIENT_ID &&
      process.env.SPOTIFY_CLIENT_SECRET &&
      process.env.SPOTIFY_REFRESH_TOKEN
  )

  if (!hasSpotifyCreds) {
    return (
      <Panel id="spotify">
        <PanelHeader>
          <PanelTitle>Spotify</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <p className="text-sm text-muted-foreground">
            Spotify is not configured properly.
          </p>
        </PanelContent>
      </Panel>
    )
  }

  // ✅ safer fetching
  const [recentRes] = await Promise.allSettled([getSpotifyRecentlyPlayed(10)])

  const recentlyPlayed = recentRes.status === "fulfilled" ? recentRes.value : []

  return (
    <Panel id="spotify">
      <PanelHeader>
        <PanelTitle>Spotify</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="space-y-6">
          {/* NOW PLAYING */}
          {/* <section>
            <h3 className="mb-2 text-xs uppercase text-muted-foreground">
              Now Playing
            </h3>

            <SpotifyNowPlaying />
          </section> */}

          {/* RECENT */}
          {/* <section>
            <h3 className="mb-2 text-xs uppercase text-muted-foreground">
              Recently Played
            </h3>

            {recentlyPlayed.length > 0 ? (
              <div className="space-y-1">
                {recentlyPlayed.map((track) => (
                  <TrackRow key={track.id} track={track} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No recent tracks.
              </p>
            )}
          </section> */}

          {/* PLAYLIST */}
          <section>
            <h3 className="mb-2 text-xs text-muted-foreground uppercase">
              Playlist
            </h3>

            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=1`}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </section>
        </div>
      </PanelContent>
    </Panel>
  )
}
