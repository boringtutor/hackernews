import GenericStory from "../../components/ui/generic/generic.story"
import { STORY_TYPE, TOP_STORY_URL } from "../../lib/ const"

export default function Home() {
  //get top stories
  const URL = "/api/topstories"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <GenericStory url={URL} storytype={STORY_TYPE.top}></GenericStory>
    </main>
  )
}
