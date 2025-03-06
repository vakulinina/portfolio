import { Skills } from './Skills'
import { Typography } from './Typography'

export const AboutSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="flex flex-col gap-6 pt-24">
      <Typography className="mb-16 !text-lg">
        I'm Valeria, a <span className="text-primary">Frontend Developer</span>{' '}
        with a strong eye for detail and a passion for building seamless,
        high-quality digital experiences.
        <br />
        <br />
        My journey started in quality assurance, where I learned to spot the
        tiniest flaws and developed an obsession with{' '}
        <span className="text-primary">polished user experiences</span>. That
        mindset still drives me today—whether I'm fine-tuning performance,
        optimizing accessibility, or crafting{' '}
        <span className="text-primary">interactions that just click</span>.
        <br />
        <br />
        <span className="text-primary">With over six years in tech</span>, I
        bring both precision and creativity to every project, making the web a{' '}
        <span className="text-primary">more beautiful, intuitive place</span>
        —one line of code at a time.
      </Typography>

      <Skills />
    </section>
  )
}
