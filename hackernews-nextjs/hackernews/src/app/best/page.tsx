import GenericStory from "../../../components/ui/generic/generic.story"
import { BEST_STORY_URL, STORY_TYPE } from "../../../lib/ const"

export default function Best() {
  const URL = "/api/beststories"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <GenericStory url={URL} storytype={STORY_TYPE.best}></GenericStory>
    </main>
  )
}
