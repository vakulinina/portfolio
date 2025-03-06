import { Typography } from './Typography'

const skills = {
  languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  frameworks: [
    'React.js',
    'Next.js',
    'Redux',
    'Tailwind CSS',
    'Styled Components',
    'React Query',
    'Sass / SCSS',
    'Playwright',
    'Storybook',
    'Jest / Vitest',
  ],
  tools: [
    'Git / GitHub / GitLab',
    'Vercel',
    'Npm',
    'Sentry',
    'Postman',
    'ESLint / Prettier',
    'VS Code',
    'Figma',
    'Jira / Asana',
  ],
}

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <li>
      <span className="uppercase mb-2 block">{title}</span>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            <Typography className="font-normal">{skill}</Typography>
          </li>
        ))}
      </ul>
    </li>
  )
}

export const Skills = () => {
  return (
    <>
      <Typography variant="subheader" as="h3">
        My toolbox
      </Typography>
      <ul className="flex gap-4 justify-between flex-col xs:flex-row">
        <SkillGroup title="Languages" skills={skills.languages} />
        <SkillGroup title="Frameworks & Libraries" skills={skills.frameworks} />
        <SkillGroup title="Tools & Platforms" skills={skills.tools} />
      </ul>
    </>
  )
}
