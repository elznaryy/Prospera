"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Prospera transformed our outbound strategy. Their cold email campaigns generated 47 qualified meetings in the first month alone, resulting in 12 new enterprise clients.",
    author: "Sarah Johnson",
    position: "VP of Sales, TechSolutions Inc.",
    image: "/placeholder.svg?height=100&width=100",
    stats: {
      meetings: "47",
      deals: "12",
      roi: "387%",
    },
  },
  {
    quote:
      "The quality of leads we receive from Prospera is exceptional. Their team's expertise with tools like Apollo and LinkedIn Sales Navigator has helped us reach decision-makers we couldn't access before.",
    author: "Michael Chen",
    position: "Director of Growth, CloudSecure",
    image: "/placeholder.svg?height=100&width=100",
    stats: {
      meetings: "32",
      deals: "8",
      roi: "295%",
    },
  },
  {
    quote:
      "Working with Prospera has been game-changing for our B2B sales process. Their SDR team is professional, persistent, and delivers consistent results month after month.",
    author: "Emma Rodriguez",
    position: "CEO, DataInsights",
    image: "/placeholder.svg?height=100&width=100",
    stats: {
      meetings: "63",
      deals: "15",
      roi: "412%",
    },
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-foreground">CLIENT RESULTS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real outcomes from our lead generation campaigns
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-lg shadow-lg overflow-hidden border border-border p-8 md:p-12"
          >
            <div className="absolute top-8 right-8 text-primary opacity-20">
              <Quote size={60} />
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <p className="text-lg md:text-xl text-foreground mb-8 relative z-10">"{testimonials[current].quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].author}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonials[current].author}</p>
                    <p className="text-muted-foreground">{testimonials[current].position}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 bg-prospera-gradient rounded-lg p-6 text-white">
                <h4 className="font-equinox text-lg mb-4 text-center">CAMPAIGN RESULTS</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold font-equinox">{testimonials[current].stats.meetings}</p>
                    <p className="text-sm">Meetings</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-equinox">{testimonials[current].stats.deals}</p>
                    <p className="text-sm">Deals</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-equinox">{testimonials[current].stats.roi}</p>
                    <p className="text-sm">ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-background border border-border hover:border-primary transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${current === index ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-background border border-border hover:border-primary transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

