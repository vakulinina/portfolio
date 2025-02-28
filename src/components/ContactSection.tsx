import { HTMLAttributes } from 'react'
import { Typography } from './Typography'

export const ContactSection = ({ id }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section id={id}>
      <Typography variant="header" as="h2">
        Contact me
      </Typography>
      <ul className="flex justify-between gap-4 mt-5">
        <li>
          <a href="https://github.com/johndoe">
            <Typography>GitHub</Typography>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/johndoe">
            <Typography>LinkedIn</Typography>
          </a>
        </li>
        <li>
          <a href="mailto:johndoe@example.com">
            <Typography>Email</Typography>
          </a>
        </li>
      </ul>
    </section>
  )
}
