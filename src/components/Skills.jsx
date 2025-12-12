import SectionHeader from './SectionHeader'
import { skills } from '../data/skills'

export default function Skills() {
  const groups = [
    { title: 'Core', items: skills.core },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Tools', items: skills.tools },
  ]

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="Tech I work with"
          description="A compact set of technologies I use to ship responsive, maintainable experiences."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="glass-panel rounded-2xl p-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-primary/80">{group.items.length} items</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
