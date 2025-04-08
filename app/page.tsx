import Hero from "./components/Hero"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Stats from "./components/Stats"
import ContactForm from "./components/ContactForm"
import BookCall from "./components/BookCall"
import Pipeline from "./components/Pipeline"
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pipeline />
      <Stats />
      <Testimonials />
      <BookCall />
      <ContactForm />
    </>
  )
}

