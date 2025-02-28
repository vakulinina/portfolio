import { Skills } from './Skills'
import { Typography } from './Typography'

export const AboutSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="flex flex-col gap-6 ">
      <Typography variant="header" as="h2">
        Hi, I'm a software engineer
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        dolores qui sed, soluta laborum alias voluptas perferendis odio
        voluptates quae minus ullam natus maxime aliquid rerum optio
        exercitationem architecto quod. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptates debitis voluptatem delectus, consequatur
        eum maxime soluta magnam laborum perferendis sit, maiores quam?
        Molestias quos eius voluptate laudantium quas, ullam velit. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Quibusdam dolores qui sed,
        soluta laborum alias voluptas perferendis odio voluptates quae minus
        ullam natus maxime aliquid
      </Typography>
      <Typography variant="subheader" as="h3">
        Skills
      </Typography>
      <Skills />
    </section>
  )
}
