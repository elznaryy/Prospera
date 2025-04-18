import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import FloatingActionButton from "./components/FloatingActionButton"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "Prospera | B2B Lead Generation Agency",
  description: "Specialized in cold emailing and lead generation tools to accelerate your business growth",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/equinox" />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  )
}



