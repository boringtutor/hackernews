import GenericStory from "../../components/ui/generic/generic.story"
import { STORY_TYPE, TOP_STORY_URL } from "../../lib/ const"

export default function Home() {
  //get top stories
  const URL = TOP_STORY_URL
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GenericStory url={URL} storytype={STORY_TYPE.top}></GenericStory>
    </main>
  )
}
