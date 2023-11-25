import * as React from "react"
import Link from "next/link"

import { Icons } from "../components/icons"
import { siteConfig } from "../config/site"
import { cn } from "../lib/utils"
import { type NavItem } from "../types/nav"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex  w-full gap-6 md:gap-10">
      <Link href="/" className="group flex items-center space-x-2">
        <Icons.logo className="h-6 w-6 text-text transition-all ease-in-out group-hover:text-primary" />
        <span className="inline-block font-bold text-text transition-all ease-in-out group-hover:text-primary">
          {siteConfig.name}
        </span>
      </Link>

      {items?.length ? (
        <nav className="flex flex-1 justify-center space-x-5 ">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-text transition-all ease-in-out hover:text-primary",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
