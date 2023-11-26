"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import GenericStoryContainer from "./generic.storycontainer"

async function getNewStories(url: string) {
  return await axios.get(url)
}

export default function Story(props: { url: string; storytype: string }) {
  function NewStories() {
    const [newStoriesState, setNewStoriesState] = useState<number[] | null>(
      null
    )
    useEffect(() => {
      getNewStories(props.url)
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
                <GenericStoryContainer
                  id={res}
                  storyType={props.storytype}
                ></GenericStoryContainer>
              </div>
            )
          })}
        </div>
      )
    }
  }

  return <NewStories></NewStories>
}
