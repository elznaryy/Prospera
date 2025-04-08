import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-prospera-black border-t border-primary/10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="font-space-grotesk font-bold text-2xl tracking-wider text-white flex items-center mb-4">
              PROSPERA
              <span className="ml-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 10L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 18L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 18L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 18L16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 font-sans">
              Fueling growth, building success through strategic B2B lead generation and cold email campaigns.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-space-grotesk font-bold text-lg text-white mb-4 tracking-wider">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Cold Email Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Account-Based Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Sales Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Meeting Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-space-grotesk font-bold text-lg text-white mb-4 tracking-wider">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-sans">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white mb-4 font-space-grotesk">Contact</h3>
              <p className="flex items-center text-muted-foreground hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:tarek@prosperaa.net">tarek@prosperaa.net</a>
              </p>
              <p className="flex items-center text-muted-foreground hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+201114701688">+20 111 470 1688</a>
              </p>
              <p className="flex items-start text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                <span>Alexandria, Egypt</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground font-sans">
            &copy; {new Date().getFullYear()} Prospera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

