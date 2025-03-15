"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 2018,
    title: "Prospera Founded",
    description: "Our journey began with a focus on innovative B2B lead generation strategies.",
    details:
      "Founded by industry veterans with over 20 years of combined experience in sales and marketing, Prospera started as a boutique agency focused on helping tech startups reach enterprise clients.",
  },
  {
    year: 2019,
    title: "Cold Email Mastery",
    description: "Developed our proprietary cold email methodology that consistently achieves 30%+ response rates.",
    details:
      "After testing hundreds of email sequences across different industries, we perfected our approach to cold outreach that cuts through inbox noise and generates meaningful conversations.",
  },
  {
    year: 2020,
    title: "Technology Integration",
    description: "Expanded our tech stack to include advanced tools like Apollo, SmartLead, and Clay.",
    details:
      "In response to growing client needs, we invested in enterprise-grade tools and developed custom integrations to streamline our lead generation processes and scale operations.",
  },
  {
    year: 2021,
    title: "SDR Team Expansion",
    description: "Built a team of specialized Sales Development Representatives trained in our methodology.",
    details:
      "We recruited and trained top talent to handle personalized outreach at scale, implementing rigorous quality standards and performance metrics to ensure exceptional results.",
  },
  {
    year: 2022,
    title: "Enterprise Client Success",
    description: "Secured our first Fortune 500 clients and expanded into new industry verticals.",
    details:
      "Our proven track record with mid-market companies attracted larger enterprises seeking to revitalize their outbound strategies, leading to several high-profile success stories.",
  },
  {
    year: 2023,
    title: "Global Expansion",
    description: "Launched international operations to serve clients across North America, Europe, and Asia.",
    details:
      "With a growing reputation for delivering results, we established regional teams with local expertise to help clients navigate cultural nuances in global outreach campaigns.",
  },
]

const ProspectIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    style={{ transform: `scale(${progress})` }}
  >
    <path d="M12 5L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 10L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 18L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 18L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 18L16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl font-equinox tracking-wider">OUR JOURNEY</h2>
          <p className="mt-4 text-lg text-muted-foreground">The evolution of Prospera's lead generation expertise</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5"
            style={{ scaleY: scaleX }}
          />

          {/* Icon */}
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <div className="bg-background p-2 rounded-full shadow-[0_0_15px_rgba(79,28,30,0.3)]">
              <ProspectIcon progress={useTransform(scrollYProgress, [0, 1], [0.8, 1.2]) as any} />
            </div>
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={`mb-16 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-[0_0_10px_rgba(79,28,30,0.5)]">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
      >
        <div className="p-6 bg-background rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-primary font-equinox tracking-wider">{event.year}</span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-equinox tracking-wider">{event.title}</h3>
            <p className="text-muted-foreground">{event.description}</p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-primary/10">
                <p className="text-muted-foreground">{event.details}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

