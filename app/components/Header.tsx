"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import FullScreenMenu from "./FullScreenMenu"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Prospera</span>
              <div className="font-equinox text-2xl tracking-wider text-foreground flex items-center">
                PROSPERA
                <span className="ml-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 10L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 18L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 18L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 18L16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex gap-x-8">
            <Link
              href="#services"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#tools"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Tools
            </Link>
            <Link
              href="#process"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Process
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Results
            </Link>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex rounded-full hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
            <Button className="hidden md:flex rounded-full bg-primary hover:bg-primary/90" asChild>
              <Link href="#book">Book a Call</Link>
            </Button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

