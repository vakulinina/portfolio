import { HTMLAttributes } from 'react'
import { Typography } from './Typography'

const ArrowRightIcon = () => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4 group-hover:opacity-100 opacity-0 transition-all"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  )
}

const ContactLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li className="border rounded-lg border-secondary/30 bg-background hover:translate-x-2 hover:border-highlight transition-all duration-300 cursor-pointer group">
      <a
        href={href}
        className="flex items-center justify-between gap-2 py-3 px-6 "
      >
        <Typography variant="body" className="group-hover:!text-highlight">
          {label}
        </Typography>
        <ArrowRightIcon />
      </a>
    </li>
  )
}

export const ContactSection = ({ id }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section id={id} className="pt-24">
      <Typography variant="header" as="h2">
        Contact
      </Typography>
      <div className="flex gap-4 w-full mt-12">
        <p className="basis-1/2">
          <Typography as="span">Based in</Typography>
          <br />
          <Typography
            as="span"
            variant="subheader"
            className="whitespace-nowrap"
          >
            Calgary, Canada
          </Typography>
        </p>
        <ul className="flex gap-4 flex-col w-full basis-1/2">
          <ContactLink href="https://github.com/vakulinina" label="GitHub" />
          <ContactLink
            href="https://www.linkedin.com/in/valeriia-akulinina/"
            label="LinkedIn"
          />
          <ContactLink
            href="mailto:valeriia.akulinina@gmail.com"
            label="Email"
          />
        </ul>
      </div>
    </section>
  )
}
