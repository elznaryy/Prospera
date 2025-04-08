"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [scrollIndicator, setScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false)
      } else {
        setScrollIndicator(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-prospera-dark overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-40 w-[70rem] h-[50rem] bg-prospera-navy/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-[70rem] h-[50rem] bg-prospera-maroon/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

        {/* Animated gradient lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full"
              style={{ top: `${15 + i * 15}%` }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 15 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-secondary/50 to-transparent h-full"
              style={{ left: `${20 + i * 15}%` }}
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{
                duration: 20 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-space-grotesk tracking-wider mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-prospera-maroon via-primary to-prospera-navy animate-flow bg-[length:200%_auto] font-space-grotesk font-bold tracking-wider">
                Fill Your Pipeline
              </span>
              {/* Glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-prospera-maroon via-primary to-prospera-navy opacity-30 blur-xl bg-clip-text">
                Fill Your Pipeline
              </span>
            </span>
            <br />
            <span className="text-white font-space-grotesk font-bold tracking-wider">
              with Qualified B2B Leads
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We use advanced cold email strategies and AI tools to bring you decision-makers ready to buy.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild className="prospera-button w-full sm:w-auto">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-background/10 border-primary/20 hover:bg-background/20 text-white"
            >
              <Link href="#services">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {scrollIndicator && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          exit={{ opacity: 0 }}
        >
          <span className="text-white/50 text-sm mb-2 font-normal">Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-6 w-6 text-white/50" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

