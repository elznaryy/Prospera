"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const stats = [
  { value: 200, label: "Meetings Booked", suffix: "+" },
  { value: 40, label: "Response Rate", suffix: "%" },
  { value: 72, label: "Meeting Conversion", suffix: "%" },
  { value: 12, label: "Industries Served", suffix: "" },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        const duration = 2000 // 2 seconds for the count animation
        const increment = stat.value / (duration / 16) // 60fps

        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            if (newCounts[index] < stat.value) {
              newCounts[index] = Math.min(newCounts[index] + increment, stat.value)
            }
            return newCounts
          })
        }, 16)
      })

      return () => intervals.forEach(clearInterval)
    }
  }, [isInView])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-prospera-gradient">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white font-space-grotesk tracking-wider">PROVEN RESULTS</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-sans">
            Our lead generation campaigns deliver measurable outcomes for B2B companies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className="text-5xl font-bold text-white font-space-grotesk tracking-wider mb-2">
                {Math.round(counts[index])}
                {stat.suffix}
              </p>
              <p className="text-white/80 font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

