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
    'npm',
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
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </li>
  )
}

export const Skills = () => {
  return (
    <ul className="flex gap-4 justify-between">
      <SkillGroup title="Languages" skills={skills.languages} />
      <SkillGroup title="Frameworks & Libraries" skills={skills.frameworks} />
      <SkillGroup title="Tools & Platforms" skills={skills.tools} />
    </ul>
  )
}
