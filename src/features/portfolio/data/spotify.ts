import { unstable_cache } from "next/cache"

const TOKEN_URL = "https://accounts.spotify.com/api/token"
const API_URL = "https://api.spotify.com/v1"

type AccessTokenResponse = {
  access_token: string
}

const getAccessToken = unstable_cache(
  async (): Promise<string | null> => {
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

    if (!clientId || !clientSecret || !refreshToken) return null

    const res = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    })

    if (!res.ok) return null

    const data = (await res.json()) as Partial<AccessTokenResponse> | null
    if (!data?.access_token) return null

    return data.access_token
  },
  ["spotify-token"],
  { revalidate: 3300 }
)

async function fetchSpotify<T>(path: string): Promise<T | null> {
  const token = await getAccessToken()
  if (!token) return null

  const res = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  })

  if (res.status === 204) return null
  if (!res.ok) return null

  return (await res.json()) as T
}

type SpotifyArtist = { name: string }

export type SpotifyTrack = {
  id: string
  name: string
  artists: SpotifyArtist[]
  imageUrl: string | null
  externalUrl: string
}

type SpotifyTrackItem = {
  id: string
  name: string
  artists: Array<{ id?: string; name: string }>
  album: { images?: Array<{ url?: string | null }> }
  external_urls: { spotify: string }
}

function mapSpotifyTrack(item: SpotifyTrackItem): SpotifyTrack {
  return {
    id: item.id,
    name: item.name,
    artists: item.artists.map((a) => ({ name: a.name })),
    imageUrl: item.album.images?.[0]?.url ?? null,
    externalUrl: item.external_urls.spotify,
  }
}

type CurrentPlayingResponse = {
  is_playing: boolean
  item: SpotifyTrackItem | null
}

type RecentlyPlayedResponse = {
  items: Array<{ track: SpotifyTrackItem | null; played_at?: string }>
}

type SpotifyPlaylistResponse = {
  name: string
  images?: Array<{ url?: string | null }> | null
  external_urls?: { spotify: string } | null
}

type SpotifyPlaylistTracksResponse = {
  items: Array<{ track: SpotifyTrackItem | null }>
}

function parsePlaylistIdFromEnv(): string | null {
  const playlistId = process.env.SPOTIFY_PLAYLIST_ID
  if (playlistId) return playlistId

  const playlistUrl = process.env.SPOTIFY_PLAYLIST_URL
  if (!playlistUrl) return null

  // Typical format: https://open.spotify.com/playlist/<id>
  const match = playlistUrl.match(/\/playlists\/([a-zA-Z0-9]+)(?:[/?#]|$)/)
  return match?.[1] ?? null
}

const PLAYLIST_ID = parsePlaylistIdFromEnv()

export const getSpotifyCurrentlyPlaying = unstable_cache(
  async (): Promise<{ isPlaying: boolean; track: SpotifyTrack } | null> => {
    const data = await fetchSpotify<CurrentPlayingResponse>(
      "/me/player/currently-playing"
    )

    if (!data?.item) return null

    return {
      isPlaying: data.is_playing,
      track: mapSpotifyTrack(data.item),
    }
  },
  ["spotify-now-playing"],
  { revalidate: 15 }
)

export const getSpotifyRecentlyPlayed = unstable_cache(
  async (limit: number): Promise<SpotifyTrack[]> => {
    const data = await fetchSpotify<RecentlyPlayedResponse>(
      `/me/player/recently-played?limit=${limit}`
    )

    const seen = new Set<string>()

    return (data?.items ?? [])
      .map((item) => item.track)
      .filter((t): t is SpotifyTrackItem => Boolean(t))
      .filter((t) => {
        if (seen.has(t.id)) return false
        seen.add(t.id)
        return true
      })
      .map(mapSpotifyTrack)
  },
  ["spotify-recent"],
  { revalidate: 60 }
)

export const getSpotifyPlaylistPreview = unstable_cache(
  async (
    trackLimit: number
  ): Promise<{
    name: string
    imageUrl: string | null
    externalUrl: string
    tracks: SpotifyTrack[]
  } | null> => {
    if (!PLAYLIST_ID) return null

    const playlist = await fetchSpotify<SpotifyPlaylistResponse>(
      `/playlists/${PLAYLIST_ID}`
    )
    if (!playlist) return null

    const tracksRes = await fetchSpotify<SpotifyPlaylistTracksResponse>(
      `/playlists/${PLAYLIST_ID}/tracks?limit=${trackLimit}`
    )

    const tracks = (tracksRes?.items ?? [])
      .map((i) => i.track)
      .filter((t): t is SpotifyTrackItem => Boolean(t))
      .map(mapSpotifyTrack)

    return {
      name: playlist.name,
      imageUrl: playlist.images?.[0]?.url ?? null,
      externalUrl:
        playlist.external_urls?.spotify ??
        `https://open.spotify.com/playlist/${PLAYLIST_ID}`,
      tracks,
    }
  },
  ["spotify-playlist-preview", PLAYLIST_ID ?? "missing"],
  { revalidate: 3600 }
)

export const getSpotifyNowPlaying = unstable_cache(
  async (): Promise<{
    isPlaying: boolean
    playedAt: string
    track: SpotifyTrack
  } | null> => {
    const data = await fetchSpotify<RecentlyPlayedResponse>(
      "/me/player/recently-played?limit=1"
    )

    const latest = data?.items?.[0]
    if (!latest?.track || !latest.played_at) return null

    const playedAtMs = Date.parse(latest.played_at)
    const elapsedMs = Number.isNaN(playedAtMs)
      ? Number.MAX_SAFE_INTEGER
      : Date.now() - playedAtMs

    return {
      // This endpoint does not expose true playback state; use a short freshness window.
      isPlaying: elapsedMs < 120000,
      playedAt: latest.played_at,
      track: mapSpotifyTrack(latest.track),
    }
  },
  ["spotify-now-playing-recent"],
  { revalidate: 15 }
)

// ---- Legacy exports (kept for any older usage) ----

export const getNowPlaying = unstable_cache(
  async (): Promise<{
    isPlaying: boolean
    title: string
    artist: string
    image: string | null
    url: string
  } | null> => {
    const data = await getSpotifyCurrentlyPlaying()
    if (!data) return null

    return {
      isPlaying: data.isPlaying,
      title: data.track.name,
      artist: data.track.artists.map((a) => a.name).join(", "),
      image: data.track.imageUrl,
      url: data.track.externalUrl,
    }
  },
  ["spotify-now-playing-legacy"],
  { revalidate: 15 }
)

export const getRecentlyPlayed = unstable_cache(
  async (): Promise<
    Array<{
      id: string
      title: string
      artist: string
      image: string | null
      url: string
    }>
  > => {
    const data = await getSpotifyRecentlyPlayed(10)
    return data.map((t) => ({
      id: t.id,
      title: t.name,
      artist: t.artists.map((a) => a.name).join(", "),
      image: t.imageUrl,
      url: t.externalUrl,
    }))
  },
  ["spotify-recent-legacy"],
  { revalidate: 60 }
)

export const SPOTIFY_PLAYLIST_ID = parsePlaylistIdFromEnv()
