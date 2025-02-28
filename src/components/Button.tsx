type ButtonProps = {
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
  className?: string
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>

export const Button = ({
  children,
  as = 'button',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'bg-primary text-white px-4 rounded-xl h-10 flex items-center justify-center hover:bg-primary/80 cursor-pointer whitespace-nowrap'
  const Element = as

  return (
    <Element className={`${baseStyles} ${className}`} {...props}>
      {children}
    </Element>
  )
}
