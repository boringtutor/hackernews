import GenericStory from "../../../components/ui/generic/generic.story"
import { NEW_STORY_URL, STORY_TYPE } from "../../../lib/ const"

// import Stories from "../../../components/ui/story/stories"

export default function New() {
  const URL = NEW_STORY_URL
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Stories /> */}
      <GenericStory url={URL} storytype={STORY_TYPE.new}></GenericStory>
    </main>
  )
}
