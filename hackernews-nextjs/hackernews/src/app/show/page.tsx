"use client"

import { useEffect, useState } from "react"
import axios from "axios"

async function getNewStories() {
  return await axios.get("/api/hackerfetch?id=90477")
}

type testType = {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}

function TestApi() {
  const [state, setNewState] = useState<testType | null>(null)

  useEffect(() => {
    getNewStories()
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        setNewState(res.data)
      })
      .catch((err) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        throw new Error(err)
      })
  }, [])

  if (!state) {
    return <div>..no data</div>
  } else {
    // console.log("state ois  >..", state)
    return <div>{state.title}</div>
  }
}

export default function Show() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TestApi />
    </main>
  )
}
