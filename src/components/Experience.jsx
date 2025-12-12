import SectionHeader from './SectionHeader'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeader
          eyebrow="Experience"
          title="Where I&apos;ve worked"
          description="Roles and responsibilities that shaped how I build and collaborate."
        />
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="glass-panel rounded-2xl p-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-primary/80">{exp.period}</p>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                <p className="text-slate-600 dark:text-slate-300">{exp.company}</p>
              </div>
              <ul className="space-y-2 text-slate-700 dark:text-slate-200 max-w-2xl">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
