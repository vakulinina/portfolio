const styles = {
  header: 'text-3xl font-bold text-primary',
  subheader: 'text-xl font-bold text-primary',
  body: 'text-base text-secondary',
  caption: 'text-xs text-secondary',
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'header' | 'subheader' | 'body' | 'caption'
  children: React.ReactNode
  as?: React.ElementType
}

export const Typography = ({
  className,
  variant = 'body',
  children,
  as = 'p',
  ...props
}: TypographyProps) => {
  const Element = as
  return (
    <Element className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </Element>
  )
}
