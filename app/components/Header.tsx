"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import FullScreenMenu from "./FullScreenMenu"
import Image from "next/image"

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

  const navigation = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Clients", href: "#success" },
    { name: "Contact", href: "#contact" }
  ]

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
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/prospera logo.png"
                alt="Prospera Logo"
                width={120}
                height={16}
                className="h-auto w-[100px] sm:w-[120px] md:w-[150px]"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
            <Button
              asChild
              className="prospera-button px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="#book">Book a Meeting</Link>
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

