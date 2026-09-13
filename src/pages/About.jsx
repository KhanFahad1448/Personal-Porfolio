import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const stackItems = [
  {
    number: '01',
    letter: 'H',
    title: 'HTML',
    copy: 'Semantic, accessible markup that gives every interface a meaningful and search-friendly foundation.',
  },
  {
    number: '02',
    letter: 'C',
    title: 'CSS',
    copy: 'Responsive systems, crafted motion and precise visual details that hold together on every screen.',
  },
  {
    number: '03',
    letter: 'J',
    title: 'JavaScript',
    copy: 'Modern, performance-aware logic for fast interactions, predictable state and useful behavior.',
  },
  {
    number: '04',
    letter: 'R',
    title: 'React',
    copy: 'Composable interfaces built from reusable components with maintainable data flow and structure.',
  },
]

const services = [
  { no: '/01', title: 'UI Development', copy: 'Turning Figma designs into precise, reusable React interfaces that stay faithful to the source.' },
  { no: '/02', title: 'Responsive Design', copy: 'Fluid layouts that feel intentional on phones, tablets and desktops.' },
  { no: '/03', title: 'Performance', copy: 'Fast first paints, clean bundles and smooth interactions as products grow.' },
  { no: '/04', title: 'Accessibility', copy: 'Keyboard-friendly, semantic and screen-reader-conscious experiences built for more people.' },
]

const aboutProjects = [
  {
    title: 'Moon Battery & Tyre',
    type: 'Premium Battery and Tyre',
    copy: 'Build a real-world battery and tyre platform that enables customers to purchase and get batteries and tyres delivered with end-to-end fitment services. The platform should support seamless online payment integration and allow customers to conveniently book automotive services online.The goal is to provide customers with a seamless, end-to-end experience—from purchasing batteries and tyres online to delivery, fitment, servicing, and roadside assistance.',
    tags: ['#React.js' , '#Redux', '#Razorpay', '#MongoDB', '#Express.js', '#Node.js', '#Tailwind.css' ],
    index: '01',
  },
  {
    title: 'Lavish Living',
    type: 'Interior Design Solution',
    copy: 'Build a real-world interior design platform which helps customers explore, plan and book interior design services, connecting them with designers for personalized home and office makeovers with online consultation and project tracking.',
    tags: ['#React.js', '#Node.js', '#Express.js', '#Figma', '#MongoDB', '#Tailwind.css', '#JavaScript', '#Resend'],
    index: '02',
  },
  {
    title: 'Fahad Fashion Hub',
    type: 'Ecommerce Shopping Application',
    copy: 'An interactive fashion store with cart management, live order tracking, Razorpay checkout and notifications.',
    tags: ['#React.js', '#Redux', '#Razorpay', '#Axios','#Firebase', '#Tailwind.css', '#JavaScript', '#Vite'],
    index: '03',
  },
  {
    title: 'Your Pharmacy',
    type: 'Ecommerce Shopping Application',
    copy: 'Build a real-world pharmacy platform which delivers medicines the same day, that integrates authentication, payments, and real-time Firestore data — practice advanced React development with a hands-on, full-stack project which fixes a real-world problem.',
    tags: ['#React.js', '#Redux', '#Razorpay', '#Axios','#Firebase', '#Tailwind.css', '#JavaScript', '#Vite'],
    index: '04',
  },
]

const steps = [
  { no: '01', title: 'Understand', copy: 'I start with the problem and the people — what should this interface enable, and what friction exists today?' },
  { no: '02', title: 'Design the system', copy: 'I establish the tokens, layout rhythm, components and data shape so the whole product stays consistent.' },
  { no: '03', title: 'Build in the open', copy: 'Small, reviewable increments; responsive from the first pass, accessible by default and faithful to the design.' },
  { no: '04', title: 'Refine & ship', copy: 'I profile, test and polish the details, then deploy and watch how the experience performs in the real world.' },
]

const tickerTags = ['#HTML', '#CSS', '#JavaScript', '#React.js', '#Redux', '#Tailwind.css', '#Firebase', '#Figma', '#Axios', '#Vite']

export default function About() {
  const [activeStack, setActiveStack] = useState(0)
  const pageRef = useRef(null)

  // Load the Google Fonts this page relies on, and clean up on unmount.
  useEffect(() => {
    const preconnect1 = document.createElement('link')
    preconnect1.rel = 'preconnect'
    preconnect1.href = 'https://fonts.googleapis.com'

    const preconnect2 = document.createElement('link')
    preconnect2.rel = 'preconnect'
    preconnect2.href = 'https://fonts.gstatic.com'
    preconnect2.crossOrigin = 'anonymous'

    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap'

    document.head.append(preconnect1, preconnect2, fontLink)

    return () => {
      preconnect1.remove()
      preconnect2.remove()
      fontLink.remove()
    }
  }, [])

  // Reveal-on-scroll, matching the original IntersectionObserver behavior.
  useEffect(() => {
    const revealEls = pageRef.current.querySelectorAll('.reveal')
    const stepsEl = pageRef.current.querySelector('.steps')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    revealEls.forEach((el) => observer.observe(el))
    if (stepsEl) observer.observe(stepsEl)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-page" ref={pageRef}>
      <header className="nav">
        <nav className="wrap nav-inner" aria-label="Main navigation">
          <a className="logo" href="#top">
            fahad<i>.</i>dev
          </a>
          <div className="nav-links">
            <Link to="/">← Portfolio</Link>
            <a href="#about">About</a>
            <a href="#stack">Stack</a>
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a className="nav-cta" href="#contact">
              Get in touch
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="wrap hero-content reveal">
            <div className="availability mono">Available for freelance work</div>
            <h1>
              Fahad
              <br />
              Akhtar.
            </h1>
            <p className="hero-role">Frontend Developer</p>
            <p className="hero-copy">
              I build highly interactive, accessible and visually sharp web applications — turning thoughtful
              designs into fast, pixel-perfect realities with React and modern JavaScript.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">
                Let's work together ↗
              </a>
              <a className="btn" href="#work">
                Explore my work ↓
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap intro-grid">
            <div className="intro-kicker reveal">
              <span className="eyebrow">About me / 01</span>
              <h2>
                Design sense.
                <br />
                Engineering discipline.
              </h2>
            </div>
            <div className="intro-copy reveal">
              <p>
                I am a results-driven Frontend Developer focused on creating interfaces that feel as good as they
                look. I care about the details people feel but rarely notice — the timing of motion, clarity of
                labels and steadiness of a layout on every screen.
              </p>
              <p>
                My expertise is rooted in React, clean state management and scalable component architecture.
                Accessibility, performance and responsive behavior are part of the foundation, not finishing
                touches.
              </p>
              <div className="stats">
                <div className="stat">
                  <strong>04</strong>
                  <span>Core technologies</span>
                </div>
                <div className="stat">
                  <strong>05+</strong>
                  <span>Full projects</span>
                </div>
                <div className="stat">
                  <strong>100%</strong>
                  <span>Responsive thinking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section stack" id="stack">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Core stack / 02</span>
                <h2>
                  The four pillars
                  <br />I build on.
                </h2>
              </div>
              <p>Tap a technology to open it. Each layer plays a distinct role in turning an idea into a dependable experience.</p>
            </div>
            <div className="stack-panels reveal">
              {stackItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={`stack-card ${activeStack === index ? 'active' : ''}`}
                  onClick={() => setActiveStack(index)}
                  onMouseEnter={() => {
                    if (window.innerWidth > 760) setActiveStack(index)
                  }}
                >
                  <span className="stack-number">{item.number}</span>
                  <span className="stack-letter">{item.letter}</span>
                  <h3 className="stack-title">{item.title}</h3>
                  <p className="stack-copy">{item.copy}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...tickerTags, ...tickerTags].map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>

        <section className="section" id="services">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">What I do / 03</span>
                <h2>
                  Useful work,
                  <br />
                  carefully executed.
                </h2>
              </div>
              <p>From a design file to a production interface, I focus on quality throughout the full frontend process.</p>
            </div>
            <div className="services">
              {services.map((s) => (
                <article className="service reveal" key={s.no}>
                  <span className="service-no">{s.no}</span>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Selected work / 04</span>
                <h2>
                  Projects shipped
                  <br />
                  end to end.
                </h2>
              </div>
              <p>Real-world applications that combine responsive interfaces with authentication, payments and live data.</p>
            </div>
            <div className="work-list">
              {aboutProjects.map((p) => (
                <article className="project reveal" key={p.title}>
                  <div className="project-card">
                    <h3>{p.title}</h3>
                    <span className="project-type mono">{p.type}</span>
                    <p>{p.copy}</p>
                    <div className="tags">
                      {p.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-index">{p.index}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">How I work / 05</span>
                <h2>
                  A clear path from
                  <br />
                  problem to polish.
                </h2>
              </div>
            </div>
            <div className="steps reveal">
              <i className="step-progress"></i>
              {steps.map((step) => (
                <article className="step" key={step.no}>
                  <span className="step-no">{step.no}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy">
          <div className="wrap reveal">
            <span className="eyebrow" style={{ color: 'white' }}>
              Philosophy / 06
            </span>
            <blockquote>
              "Good frontend work is invisible. People shouldn't notice the framework — they should simply get
              where they're going, fast and without friction."
            </blockquote>
            <cite>— Fahad Khan</cite>
          </div>
        </section>

        <section id="contact">
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i}>
                  LET'S BUILD SOMETHING <b>✦</b>
                </span>
              ))}
            </div>
          </div>
          <div className="section">
            <div className="wrap contact-grid">
              <div className="contact-copy reveal">
                <span className="eyebrow">Get in touch / 07</span>
                <h2>Have a project in mind?</h2>
                <p>I'm open to freelance work and full-time roles. Send a message and I'll get back to you soon.</p>
                <span className="location">Kolkata, India · UTC+5:30</span>
              </div>
              <div className="contact-links reveal">
                <a className="contact-link" href="mailto:fk9719650@gmail.com">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">fk9719650@gmail.com</span>
                  <span className="contact-arrow">↗</span>
                </a>
                <a className="contact-link" href="https://github.com/KhanFahad1448" target="_blank" rel="noreferrer">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">KhanFahad1448</span>
                  <span className="contact-arrow">↗</span>
                </a>
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/fahad-akhtar-1119b017b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Fahad Akhtar</span>
                  <span className="contact-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <span>fahad.dev</span>
          <span>© {new Date().getFullYear()} Fahad Khan — built with focus and care.</span>
        </div>
      </footer>
    </div>
  )
}
