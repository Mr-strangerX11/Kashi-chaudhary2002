import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import logoLight from '../logo-black.png'
import logoDark from '../logo.png'

export default function NavBar({ sections, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg text-primary">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Logo" className="h-9 w-9 rounded-full object-cover" />
          <span className="text-slate-900 dark:text-slate-100">Kashi Chaudhary</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/blog"
            className={`hover:text-primary transition-colors ${pathname === '/blog' ? 'text-primary' : ''}`}
          >
            Blog
          </Link>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur"
          >
            <div className="flex flex-col gap-3 px-4 py-3 text-sm text-slate-800 dark:text-slate-100">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left py-2 border-b border-slate-200/70 dark:border-slate-800/70 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <Link to="/blog" className="py-2 hover:text-primary" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
