"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Calendar, Rocket, FileCheck, Target, Settings, Send, Users, ChartBar, Sparkles } from "lucide-react"

const steps = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Free Consultation",
    description: "Book your 1-hour strategy session"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Free POC",
    description: "Test our service with no commitment"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Onboarding",
    description: "Quick setup of your requirements"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategy",
    description: "Custom lead generation planning"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Setup",
    description: "Infrastructure and campaign prep"
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "Launch",
    description: "Begin approved outreach campaigns"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Convert",
    description: "Receive qualified leads directly"
  },
  {
    icon: <ChartBar className="w-6 h-6" />,
    title: "Optimize",
    description: "Weekly reports and strategy calls"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Scale",
    description: "Your proven lead generation system"
  }
]

export default function Pipeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="process" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        {/* Subtle patterns */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 font-space-grotesk tracking-wider">
            <span className="text-gray-900">OUR</span>{" "}
            <span className="bg-clip-text text-transparent bg-prospera-gradient">PROCESS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Our proven process to deliver qualified B2B leads to your business
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-prospera-navy/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-prospera-navy/10 flex items-center justify-center text-prospera-navy">
                      {step.icon}
                    </div>
                    <span className="ml-4 text-4xl font-bold text-prospera-navy">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-prospera-navy mb-2 font-space-grotesk">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}