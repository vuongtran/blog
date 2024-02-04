// "use client"

// import { useState } from "react"
import Link from "next/link"
// import { MenuIcon } from "lucide-react"

import { ThemeSwitcher } from "./theme-switcher"

export function Header() {
  // const [isMobileOpen, setIsMobileOpen] = useState(false)
  // const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <nav className="mb-12 ">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="text-xl font-bold">
                {process.env.NEXT_PUBLIC_SITE_NAME}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-between">
          <div className="sm:flex sm:items-center">
            <div className="space-x-6 text-base font-semibold ">
              <Link href="/">Trang chủ</Link>
              <Link href="/about">Giới thiệu</Link>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
