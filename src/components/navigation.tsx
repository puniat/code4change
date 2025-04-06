'use client'
import Link from "next/link"
import Image from 'next/image'
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="border-b relative backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="group">
              <div className="relative">
                <Image
                  src="/images/Logo-61.png"
                  alt="Code4Change Logo"
                  width={70}
                  height={70}
                  className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur -z-10 transition-opacity duration-300"></div>
              </div>
            </Link>
            <h1 className="hidden sm:block text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Code4Change</h1>
          </div>
          <div className="flex items-center gap-5">
            {/* Home link */}
            <Link href="/">
              <Button 
                variant={pathname === "/" ? "default" : "ghost"} 
                size="lg" 
                className="text-base font-medium tracking-wide hover:scale-105 transition-all"
              >
                Home
              </Button>
            </Link>
            
            {/* About Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={pathname.startsWith("/about") ? "default" : "ghost"} 
                  size="lg" 
                  className="text-base font-medium tracking-wide hover:scale-105 transition-all flex items-center gap-1"
                >
                  About
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 ease-in-out group-hover:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-1 rounded-xl border border-blue-200 dark:border-blue-900 shadow-lg">
                <DropdownMenuItem asChild className="rounded-lg p-3 focus:bg-blue-50 dark:focus:bg-blue-950 transition-colors">
                  <Link href="/about" className="w-full text-base font-medium">
                    Our Mission
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg p-3 focus:bg-blue-50 dark:focus:bg-blue-950 transition-colors">
                  <Link href="/our-team" className="w-full text-base font-medium">
                    Our Team
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/courses">
              <Button 
                variant={pathname === "/courses" ? "default" : "ghost"} 
                size="lg" 
                className="text-base font-medium tracking-wide hover:scale-105 transition-all"
              >
                Courses
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}