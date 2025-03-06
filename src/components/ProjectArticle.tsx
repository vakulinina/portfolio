import { ProjectPreview } from './ProjectPreview'
import { Typography } from './Typography'

const ProjectTitle = ({ title, link }: { title: string; link?: string }) => {
  if (!link) {
    return (
      <Typography variant="subheader" as="h3">
        {title}
      </Typography>
    )
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Typography
        variant="subheader"
        as="h3"
        className="hover:text-secondary transition-all duration-300"
      >
        {title}
      </Typography>
    </a>
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
  imageStyles,
  tech,
  description,
  title,
  liveLink,
  githubLink,
}: {
  className?: string
  tech: string[]
  description: string
  images: string[]
  imageStyles: string
  title: string
  liveLink: string
  githubLink: string
}) => {
  return (
    <article className={`flex flex-col gap-4 ${className}`}>
      <ProjectPreview images={images} className={imageStyles} />
      <ProjectTitle title={title} link={liveLink || githubLink} />
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
