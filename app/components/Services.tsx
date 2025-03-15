"use client"

import { motion, useInView } from "framer-motion"
import { Mail, Users, BarChart3, Target, Zap, Calendar } from "lucide-react"
import { useRef } from "react"

const services = [
  {
    icon: <Mail className="w-12 h-12 mb-4 text-primary" />,
    title: "Cold Email Campaigns",
    description:
      "Personalized, high-converting email sequences that engage decision-makers and generate qualified responses.",
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-primary" />,
    title: "Lead Generation",
    description:
      "Targeted prospect lists built with precision using advanced tools like Apollo, Clay, and LinkedIn Sales Navigator.",
  },
  {
    icon: <BarChart3 className="w-12 h-12 mb-4 text-primary" />,
    title: "Campaign Analytics",
    description:
      "Comprehensive reporting and insights to optimize performance and maximize ROI on your outreach efforts.",
  },
  {
    icon: <Target className="w-12 h-12 mb-4 text-primary" />,
    title: "Account-Based Marketing",
    description: "Strategic targeting of high-value accounts with personalized multi-channel outreach campaigns.",
  },
  {
    icon: <Zap className="w-12 h-12 mb-4 text-primary" />,
    title: "Sales Automation",
    description: "Streamlined workflows using SmartLead, Outreach, and other tools to scale your prospecting efforts.",
  },
  {
    icon: <Calendar className="w-12 h-12 mb-4 text-primary" />,
    title: "Meeting Booking",
    description: "Qualified appointments with decision-makers, delivered directly to your calendar.",
  },
]

export default function Services() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-prospera-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-40 w-[50rem] h-[50rem] bg-prospera-maroon/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-[50rem] h-[50rem] bg-prospera-navy/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto relative z-10" ref={containerRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-white font-equinox tracking-wider">OUR SERVICES</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive B2B lead generation solutions designed to fill your pipeline with qualified opportunities
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-background/5 backdrop-blur-sm p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                    {service.icon}
                  </div>
                  <span className="text-4xl font-bold text-white/10 font-equinox">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-equinox tracking-wider">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>

                <div className="mt-6 pt-6 border-t border-primary/10">
                  <a href="#contact" className="text-primary font-medium flex items-center group/link">
                    Learn more
                    <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

