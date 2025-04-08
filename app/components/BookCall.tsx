"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, Users, CheckCircle, Check } from "lucide-react"

const benefits = [
  "Personalized strategy consultation",
  "Review of your current lead generation process",
  "Custom solution recommendations",
  "ROI and timeline projections",
  "Live demo of our tools and processes"
]

// Temporary Calendar Widget Component
const CalendarWidget = () => (
  <div className="text-center p-8">
    <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
    <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Your Call</h3>
    <Button className="prospera-button w-full">
      <Link href="https://calendly.com/your-link">Book Your Consultation</Link>
    </Button>
  </div>
)

export default function BookCall() {
  return (
    <section id="book" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        {/* Subtle patterns */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 font-space-grotesk tracking-wider mb-6">
                Ready to Transform Your Lead Generation?
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-sans">
                Schedule a consultation with our team to discuss your goals and discover how we can help you achieve them.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="ml-3 text-gray-600 font-sans">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:pl-12">
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CalendarWidget />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

