import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const res = await fetch(
      ` https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
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
