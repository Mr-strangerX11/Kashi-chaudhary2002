import { motion } from 'framer-motion'
import profileImage from '../assets/kk.png'

export default function Hero() {
  return (
    <section id="home" className="section-padding bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Building Digital Kingdoms
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Hi, I&apos;m Kashi Chaudhary — a frontend developer crafting fast, accessible, and delightful web experiences.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            I design and build responsive sites, interactive UI, and performant experiences using React and modern tooling.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-primary px-5 py-3 text-white shadow-card hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-5 py-3 text-slate-800 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-100"
            >
              Contact Me
            </a>
            <a
              href="/kashi.pdf"
              download
              className="rounded-full border border-slate-300 px-5 py-3 text-slate-800 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-100"
            >
              Download Resume
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-sm text-slate-600 dark:text-slate-300">
            {['React', 'Tailwind', 'Accessibility', 'Responsive Design'].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              <img
                src={profileImage}
                alt="Kashi Chaudhary"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white">
                <p className="text-sm uppercase tracking-[0.25em]">Frontend Developer</p>
                <p className="text-lg font-semibold">React • UI/UX • Motion</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
