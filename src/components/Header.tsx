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
    <header className="sticky top-2 w-full left-0 z-10">
      <nav className="flex items-center top-0 left-0 z-10 rounded-2xl bg-white/60 backdrop-blur-sm p-1.5 pl-4 h-14">
        <img src={logo} alt="" className="h-[40px]" />

        <ul className="flex gap-1 justify-center items-center w-full">
          {navItems.map((item, index, array) => {
            if (index === array.length - 1) {
              return <li key={item.href}></li>
            } else {
              return (
                <li key={item.href} className="px-4">
                  <NavLink href={item.href} label={item.label} />
                </li>
              )
            }
          })}
        </ul>

        <Button as="a" href={navItems[3].href}>
          {navItems[3].label}
        </Button>
      </nav>
    </header>
  )
}
