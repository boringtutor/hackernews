"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"

type storyType = {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StoryContainer(props: { id: any }) {
  async function fetchStory() {
    return await axios(
      `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`
    )
  }

  function StoryState() {
    const [stories, setStories] = useState<storyType | null>(null)
    useEffect(() => {
      fetchStory()
        .then((res) => {
          console.log("stories")
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setStories(res.data)
        })
        .catch((err) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          throw new Error(err)
        })
    }, [])
    if (!stories) {
      return <div></div>
    } else {
      return (
        <div key={stories.id} className="container-md m-1">
          <div className="height-[2.5rem] flex flex-col truncate bg-secondary ">
            {stories.url ? (
              <Link
                href={stories.url}
                className=" align-middle uppercase text-text hover:underline hover:decoration-red-400 hover:decoration-solid"
              >
                {stories.title}
              </Link>
            ) : (
              <div>{stories.title}</div>
            )}
            <div className="m-2 flex w-full">
              <div className="text-text">
                {stories.score} points by {stories.by}
              </div>
              <div className="text-text"> | hide | {stories.descendants}</div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <StoryState></StoryState>
    </div>
  )
}
