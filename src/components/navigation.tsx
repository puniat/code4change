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
    <nav className="border-b relative backdrop-blur-sm bg-background/80 sticky top-0 z-50 shadow-sm">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="group">
              <div className="relative">
                <Image
                  src="/images/Logo-61.png"
                  alt="Code4Change Logo"
                  width={60}
                  height={60}
                  className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur -z-10 transition-opacity duration-300"></div>
              </div>
            </Link>
            <h1 className="hidden sm:block text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Code4Change</h1>
          </div>
          
          {/* Navigation links with improved styling */}
          <div className="flex items-center gap-2">
            {/* Nav links container with subtle background */}
            <div className="flex items-center bg-gray-50/50 dark:bg-gray-900/20 rounded-full px-1.5 py-1 border border-gray-100 dark:border-gray-800">
              {/* Home link */}
              <Link href="/">
                <Button 
                  variant={pathname === "/" ? "default" : "ghost"} 
                  size="sm" 
                  className={cn(
                    "text-sm font-medium rounded-full transition-all",
                    pathname === "/" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm" : 
                    "hover:bg-gray-100/50 dark:hover:bg-gray-800/30"
                  )}
                >
                  Home
                </Button>
              </Link>
              
              {/* About Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={pathname.startsWith("/about") ? "default" : "ghost"} 
                    size="sm" 
                    className={cn(
                      "text-sm font-medium rounded-full transition-all flex items-center gap-1",
                      pathname.startsWith("/about") ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm" : 
                      "hover:bg-gray-100/50 dark:hover:bg-gray-800/30"
                    )}
                  >
                    About
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 ease-in-out group-hover:rotate-180" />
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
                  size="sm" 
                  className={cn(
                    "text-sm font-medium rounded-full transition-all",
                    pathname === "/courses" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm" : 
                    "hover:bg-gray-100/50 dark:hover:bg-gray-800/30"
                  )}
                >
                  Courses
                </Button>
              </Link>

              <Link href="/faq">
                <Button 
                  variant={pathname === "/faq" ? "default" : "ghost"} 
                  size="sm" 
                  className={cn(
                    "text-sm font-medium rounded-full transition-all",
                    pathname === "/faq" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm" : 
                    "hover:bg-gray-100/50 dark:hover:bg-gray-800/30"
                  )}
                >
                  FAQ
                </Button>
              </Link>
            </div>

            {/* Slightly separated theme toggle with decorative element */}
            <div className="relative pl-1">
              <div className="absolute -inset-0.5 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm"></div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}