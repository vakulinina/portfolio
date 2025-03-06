import { Button } from './Button'
import logo from '../assets/logo.png'

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

export const Header = () => {
  return (
    <header className="sticky top-2 gap-2 md:gap-4 w-full left-0 z-10">
      <nav className="flex items-center justify-between top-0 left-0 z-10 rounded-2xl bg-white/60 backdrop-blur-sm p-1.5 pl-4 h-14 gap-2 md:gap-4">
        <img src={logo} alt="" className="h-[40px]" />

        <ul
          className="justify-between items-center gap-4 sm:gap-8 max-w-fit hidden xs:flex"
          style={{ justifyContent: 'space-between' }}
        >
          {navItems.slice(0, 3).map((item) => {
            return (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            )
          })}
        </ul>

        <Button as="a" href={navItems[3].href}>
          {navItems[3].label}
        </Button>
      </nav>
    </header>
  )
}
