import { ProjectPreview } from './ProjectPreview'
import { Typography } from './Typography'

const ProjectTitle = ({ title }: { title: string }) => {
  return (
    <Typography variant="subheader" as="h3">
      {title}
    </Typography>
  )
}

const TechTag = ({ tech }: { tech: string }) => {
  return (
    <div className="rounded-md px-2 py-1 border border-secondary/70 text-secondary/70 text-xs">
      {tech}
    </div>
  )
}

const ProjectDescription = ({ description }: { description: string }) => {
  return <Typography>{description}</Typography>
}

export const ProjectArticle = ({
  className,
  images,
  tech,
  description,
  title,
}: {
  className?: string
  tech: string[]
  description: string
  images: string[]
  title: string
}) => {
  return (
    <article className={`flex flex-col gap-4 ${className}`}>
      <ProjectPreview images={images} />
      <ProjectTitle title={title} />
      <ul className="flex flex-wrap gap-2">
        {tech.map((techItem) => (
          <li key={techItem}>
            <TechTag tech={techItem} />
          </li>
        ))}
      </ul>
      <ProjectDescription description={description} />
    </article>
  )
}
