import SectionHeader from './SectionHeader'

export default function About() {
  const highlights = [
    'Focused on fast, accessible interfaces with React and Tailwind.',
    'Comfortable collaborating with designers and stakeholders.',
    'Enjoy shipping micro-interactions and thoughtful UX details.',
  ]

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 md:items-start">
        <SectionHeader
          eyebrow="About"
          title="A quick snapshot"
          description="Frontend developer blending code, design, and motion to build user-friendly products."
        />

        <div className="space-y-6">
          <p className="text-base text-slate-600 dark:text-slate-300">
            I&apos;m a frontend developer who enjoys translating ideas into responsive, production-ready experiences. I work with
            React, Tailwind, and modern tooling to keep interfaces reliable, fast, and easy to maintain.
          </p>
          <ul className="space-y-3 text-slate-700 dark:text-slate-200">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:kashichaudhary2002@gmail.com"
              className="rounded-full bg-primary px-4 py-2 text-white shadow-card hover:bg-primary/90"
            >
              Email Me
            </a>
            <a
              href="/kashi.pdf"
              download
              className="rounded-full border border-slate-300 px-4 py-2 text-slate-800 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-100"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
