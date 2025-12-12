import { testimonials } from '../data/testimonials'
import SectionHeader from './SectionHeader'

export default function Testimonials() {
  if (!testimonials.length) return null

  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Kind words"
          description="Feedback from collaborators and clients."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-panel rounded-2xl p-6 space-y-3">
              <p className="text-lg text-slate-900 dark:text-white">“{t.quote}”</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t.name} · {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
