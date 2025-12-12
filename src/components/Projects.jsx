import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="A few projects that highlight responsive UI, interaction design, and performance-aware builds."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
