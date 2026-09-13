import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#111] text-white font-Nunito">
      <section className="flex flex-col justify-between h-screen">
        <Header />
        <Hero />
      </section>

      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}
