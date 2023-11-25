import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex h-full w-full justify-center bg-red-400">
      <div className="flex flex-col">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <div className="flex flex-col ">
          <Link href="/">
            <span className="text-h1 text-white">Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
