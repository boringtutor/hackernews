import GenericStory from "../../../components/ui/generic/generic.story"
import { NEW_STORY_URL, STORY_TYPE } from "../../../lib/ const"

// import Stories from "../../../components/ui/story/stories"

export default function New() {
  const URL = "/api/newstories"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* <Stories /> */}
      <GenericStory url={URL} storytype={STORY_TYPE.new}></GenericStory>
    </main>
  )
}
