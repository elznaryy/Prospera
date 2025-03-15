import Hero from "./components/Hero"
import Services from "./components/Services"
import Tools from "./components/Tools"
import Timeline from "./components/Timeline"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import Stats from "./components/Stats"
import ContactForm from "./components/ContactForm"
import BookCall from "./components/BookCall"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Tools />
      <Timeline />
      <Process />
      <Stats />
      <Testimonials />
      <BookCall />
      <ContactForm />
    </>
  )
}

