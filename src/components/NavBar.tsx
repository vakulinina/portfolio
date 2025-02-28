import { Button } from './Button'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Get in touch', href: '#contact' },
]

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      className="font-[500] text-gray-400 visited:text-gray-400 hover:text-primary"
    >
      {label}
    </a>
  )
}

export const NavBar = () => {
  return (
    <nav className="flex max-w-fit items-center mx-auto top-0 left-0 z-10 rounded-2xl bg-white/60 backdrop-blur-sm p-1.5 h-14">
      <ul className="flex gap-6 justify-center items-center w-full">
        {navItems.map((item, index, array) => {
          if (index === array.length - 1) {
            return (
              <li key={item.href}>
                <Button as="a" href={item.href}>
                  {item.label}
                </Button>
              </li>
            )
          } else {
            return (
              <li key={item.href} className="px-4">
                <NavLink href={item.href} label={item.label} />
              </li>
            )
          }
        })}
      </ul>
    </nav>
  )
}
