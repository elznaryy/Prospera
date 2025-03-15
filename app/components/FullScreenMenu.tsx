"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Tools", href: "#tools" },
    { name: "Process", href: "#process" },
    { name: "Results", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Book a Call", href: "#book" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-prospera-black z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors" onClick={onClose}>
            <X className="w-8 h-8" />
          </button>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GGvjPg078UuJCqJgtGl6N0oR2jVuFO.png')] bg-cover bg-center"></div>
          </div>

          <nav className="text-center relative z-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block text-4xl font-bold text-white mb-6 hover:text-primary transition-colors font-equinox tracking-wider"
                  onClick={onClose}
                >
                  {item.name.toUpperCase()}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

