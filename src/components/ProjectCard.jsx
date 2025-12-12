import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.05 } }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card"
    >
      <div className="relative h-52 overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          <div className="flex gap-2 text-slate-600 dark:text-slate-200">
            <a href={project.github} className="hover:text-primary" aria-label="GitHub" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <a href={project.demo} className="hover:text-primary" aria-label="Live demo" target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-primary/10 px-2 py-1 text-primary">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
