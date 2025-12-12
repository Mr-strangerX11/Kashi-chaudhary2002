export default function Footer() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-100">Kashi Chaudhary</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-primary">
          <a href="https://github.com/Mr-strangerX11" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/stranger-x21" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <button onClick={scrollToContact} className="hover:underline">Contact</button>
        </div>
      </div>
    </footer>
  )
}
