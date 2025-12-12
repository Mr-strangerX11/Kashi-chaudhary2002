export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && <p className="section-subtitle">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="text-base text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  )
}
