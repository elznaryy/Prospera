"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"

export default function BookCall() {
  return (
    <section id="book" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-6 text-foreground">BOOK A STRATEGY CALL</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a 30-minute call with our lead generation experts to discuss your goals and how we can help you
              achieve them.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Personalized strategy tailored to your industry and target audience
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Insights into the most effective tools and approaches for your goals
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Clear pricing and timeline expectations with no hidden costs</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">No obligation consultation with actionable takeaways</p>
              </div>
            </div>

            <Button asChild className="prospera-button">
              <Link href="https://calendly.com" target="_blank">
                SCHEDULE NOW
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-prospera-gradient p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6 font-equinox">WHAT TO EXPECT</h3>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 font-equinox">Discovery Call</h4>
                    <p className="text-white/80">
                      We'll discuss your current challenges and goals for lead generation.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 font-equinox">30 Minutes</h4>
                    <p className="text-white/80">
                      Focused conversation to respect your time while covering all essentials.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 font-equinox">Expert Consultation</h4>
                    <p className="text-white/80">
                      Speak directly with our lead generation specialists, not sales representatives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-center text-white/90 italic">
                  "Our strategy call with Prospera provided more actionable insights than months of working with our
                  previous agency."
                </p>
                <p className="text-center text-white/70 mt-2">— David Miller, CMO at EnterpriseFlow</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

