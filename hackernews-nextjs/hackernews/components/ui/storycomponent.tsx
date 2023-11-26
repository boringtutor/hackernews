import Link from "next/link"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StoryComponent({ child1, child2 }: any) {
  return (
    <div className="container-md m-1">
      <div className="height-[2.5rem] flex flex-col bg-secondary">
        {...child1}
        <div className="m-2 flex w-full">{...child2}</div>
      </div>
    </div>
  )
}
