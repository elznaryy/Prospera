"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tools = [
  {
    name: "SmartLead",
    description: "Advanced email automation platform for high-deliverability cold email campaigns.",
    image: "/placeholder.svg?height=80&width=200",
    features: ["Email Warm-up", "Unlimited Sending", "Advanced Analytics"],
  },
  {
    name: "Apollo.io",
    description: "Comprehensive B2B database with over 220+ million contacts to find your ideal prospects.",
    image: "/placeholder.svg?height=80&width=200",
    features: ["Contact Data", "Company Intelligence", "Email Verification"],
  },
  {
    name: "LinkedIn Sales Navigator",
    description: "Premium LinkedIn tool for advanced search and relationship-building with decision makers.",
    image: "/placeholder.svg?height=80&width=200",
    features: ["Advanced Search", "Lead Recommendations", "InMail Credits"],
  },
  {
    name: "Clay",
    description: "Powerful data enrichment platform to build and refine targeted prospect lists.",
    image: "/placeholder.svg?height=80&width=200",
    features: ["Data Enrichment", "List Building", "Workflow Automation"],
  },
  {
    name: "Outreach",
    description: "Sales engagement platform to manage and optimize multi-channel outreach sequences.",
    image: "/placeholder.svg?height=80&width=200",
    features: ["Sequence Management", "Performance Analytics", "AI Assistance"],
  },
  {
    name: "Calendly",
    description: "Scheduling automation tool to streamline the meeting booking process.",
    image: "/placeholder.svg?height=80&width=200",
    features: ["Automated Scheduling", "Calendar Integration", "Reminder Notifications"],
  },
]

export default function Tools() {
  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-foreground font-space-grotesk tracking-wider">OUR TOOLKIT</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
            We leverage industry-leading tools and technologies to maximize your lead generation results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="bg-background rounded-lg shadow-lg overflow-hidden border border-border hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.name}
                    width={200}
                    height={80}
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground font-space-grotesk tracking-wider">{tool.name}</h3>
                <p className="text-muted-foreground mb-4 font-sans">{tool.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Our team of SDR professionals is certified and experienced with these tools, ensuring maximum efficiency and
            results for your campaigns.
          </p>
          <Button asChild className="prospera-button">
            <Link href="#contact">DISCUSS YOUR REQUIREMENTS</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

