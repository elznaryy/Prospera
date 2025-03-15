"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

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
    <div className="relative min-h-screen flex items-center isolate overflow-hidden bg-prospera-black">
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

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-primary/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              B2B Lead Generation Experts
            </span>
          </motion.div>

          <motion.h1
            className="mt-10 text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient font-equinox">ACCELERATE</span>
            <br />
            <span className="text-white font-equinox">YOUR GROWTH</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-xl leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Prospera connects you with decision-makers through advanced cold emailing strategies and cutting-edge lead
            generation tools. Transform your outreach, elevate your pipeline.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#book" className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-white">
              <div className="absolute inset-0 w-3/12 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[20deg] group-hover:animate-shine" />
              <span className="relative z-10 flex items-center font-equinox tracking-wider text-lg">
                BOOK A STRATEGY CALL
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="#services"
              className="group flex items-center text-lg font-semibold text-foreground transition-colors hover:text-primary"
            >
              <span className="font-equinox tracking-wider">EXPLORE SERVICES</span>
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 flex flex-wrap items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-sm font-medium text-muted-foreground">TRUSTED TOOLS & PARTNERS:</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
              {["Apollo", "SmartLead", "Clay", "LinkedIn", "Outreach"].map((tool, index) => (
                <motion.span
                  key={tool}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative w-[40rem] h-[30rem] sm:w-[57rem] md:-ml-4 lg:-ml-0">
              <div className="w-full h-full bg-gradient-to-br from-prospera-navy to-prospera-maroon rounded-2xl shadow-[0_0_50px_rgba(79,28,30,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center max-w-lg">
                    <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5L12 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 10L8 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M16 10L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 18L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 18L8 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M16 18L16 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4 font-equinox tracking-wider">FUELING GROWTH</h3>
                    <p className="text-xl text-white/80">Building Success Through Strategic Lead Generation</p>

                    <div className="mt-8 flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Response Rate</span>
                        <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1.5, delay: 1 }}
                          />
                        </div>
                        <span className="text-white font-bold">85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Meeting Conversion</span>
                        <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: "72%" }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                          />
                        </div>
                        <span className="text-white font-bold">72%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Client Retention</span>
                        <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: "92%" }}
                            transition={{ duration: 1.5, delay: 1.4 }}
                          />
                        </div>
                        <span className="text-white font-bold">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
          <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-6 w-6 text-white/50" />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

