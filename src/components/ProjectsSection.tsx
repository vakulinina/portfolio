import { Project, projects } from '../constants'
import { ProjectArticle } from './ProjectArticle'
import { Typography } from './Typography'

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Typography variant="header" as="h2">
      {title}
    </Typography>
  )
}

const Section = ({
  id,
  title,
  projects,
}: {
  id?: string
  title: string
  projects: Project[]
}) => {
  return (
    <div className="flex flex-col gap-12 py-12" id={id}>
      <SectionTitle title={title} />
      {projects.map((project) => (
        <ProjectArticle
          key={project.title}
          images={project.images}
          tech={project.tech}
          description={project.description}
          title={project.title}
          className="mb-12"
        />
      ))}
    </div>
  )
}

export const ProjectsSection = ({ id }: { id: string }) => {
  return (
    <>
      <Section id={id} title="Featured Work" projects={projects.work} />

      <Section title="Side Projects" projects={projects.side} />
    </>
  )
}
