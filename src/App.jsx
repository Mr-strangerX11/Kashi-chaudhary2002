import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

function LandingPage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  )
}

function BlogPlaceholder() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl text-center space-y-3">
        <p className="section-subtitle">Blog</p>
        <h1 className="section-title">Coming soon</h1>
        <p className="text-slate-600 dark:text-slate-300">
          A simple blog section can live here. Add routes, markdown rendering, or CMS integration when ready.
        </p>
      </div>
    </section>
  )
}

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  const toggleTheme = () => setTheme((mode) => (mode === 'dark' ? 'light' : 'dark'))

  return (
    <div className={theme === 'dark' ? 'dark bg-dark' : 'bg-light'}>
      <div className="min-h-screen text-slate-900 dark:text-slate-100">
        <NavBar sections={sections} theme={theme} onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPlaceholder />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
