"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Users, Star } from "lucide-react"

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
    <section id="success" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        {/* Subtle patterns */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
            backgroundSize: '36px 36px'
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10">
              <Users className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 font-space-grotesk tracking-wider">
            <span className="text-gray-900">CLIENT</span>{" "}
            <span className="bg-clip-text text-transparent bg-prospera-gradient">SUCCESS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            See what our clients say about their experience working with Prospera
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">{testimonial.author}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 font-sans mb-6">{testimonial.quote}</blockquote>
              <div className="flex items-center text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

