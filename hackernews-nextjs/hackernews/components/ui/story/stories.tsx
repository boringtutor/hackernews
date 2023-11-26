"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import StoryContainer from "./story.container"

async function getNewStories() {
  return await axios.get(
    "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
  )
}

export default function Stories() {
  function NewStories() {
    const [newStoriesState, setNewStoriesState] = useState<number[] | null>(
      null
    )
    useEffect(() => {
      getNewStories()
        .then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          setNewStoriesState(res.data.slice(0, 10))
          console.log(res)
        })
        .catch((err) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          throw new Error(err)
        })
    }, [])
    if (!newStoriesState) {
      return <div>no new stories</div>
    } else {
      return (
        <div className="m-3 flex flex-col">
          {newStoriesState.map((res) => {
            return (
              <div key={res}>
                <StoryContainer id={res}></StoryContainer>
              </div>
            )
          })}
        </div>
      )
    }
  }

  return <NewStories></NewStories>
}
