"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Search, UserCheck, MessageSquare, BarChart, Calendar, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Research & Targeting",
    description: "We identify your ideal customer profile and build targeted prospect lists using advanced data tools.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-primary" />,
    title: "Prospect Verification",
    description: "Our team verifies contact information and enriches data to ensure high-quality outreach.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Campaign Creation",
    description: "We craft personalized messaging and multi-touch sequences designed to engage decision-makers.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Execution & Optimization",
    description: "Campaigns are launched and continuously optimized based on performance metrics.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: "Meeting Booking",
    description: "Qualified leads are converted into scheduled meetings directly on your calendar.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
    title: "Reporting & Refinement",
    description: "Comprehensive analytics and insights drive continuous improvement of your campaigns.",
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-prospera-maroon">
      <div className="container mx-auto" ref={containerRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity, scale }}
        >
          <h2 className="text-5xl font-bold mb-4 text-white">OUR PROCESS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to generating high-quality B2B leads and booked meetings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-background/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mr-4">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-white/30 font-equinox">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white font-equinox">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

