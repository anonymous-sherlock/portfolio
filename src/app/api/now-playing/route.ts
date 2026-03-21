import { NextResponse } from "next/server"

import { getSpotifyNowPlaying } from "@/features/portfolio/data/spotify"

export async function GET() {
  const nowPlaying = await getSpotifyNowPlaying()
  console.log(nowPlaying)
  return NextResponse.json(nowPlaying)
}
