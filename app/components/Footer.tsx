import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-prospera-black border-t border-primary/10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="font-equinox text-2xl tracking-wider text-white flex items-center mb-4">
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
            <p className="text-muted-foreground mb-6">
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
            <h3 className="font-equinox text-lg text-white mb-4">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cold Email Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Account-Based Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sales Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Meeting Booking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-equinox text-lg text-white mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-equinox text-lg text-white mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="text-primary mr-2" />
                <Link
                  href="mailto:info@prospera.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@prospera.com
                </Link>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-primary mr-2" />
                <Link href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-primary mr-2 mt-1" />
                <span className="text-muted-foreground">
                  123 Business Avenue, Suite 500
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Prospera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

