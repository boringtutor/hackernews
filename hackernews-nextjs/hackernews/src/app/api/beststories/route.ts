import { NextResponse } from "next/server"

import { BEST_STORY_URL } from "../../../../lib/ const"

export async function GET() {
  try {
    const res = await fetch(BEST_STORY_URL)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const news = await res.json()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return NextResponse.json(news)
  } catch (err) {
    return NextResponse.json(
      { msg: "Error fetching data", err: err },
      { status: 500 }
    )
  }
}
