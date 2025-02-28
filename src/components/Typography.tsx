const styles = {
  header: 'text-3xl font-bold text-primary',
  subheader: 'text-xl font-bold text-primary',
  body: 'text-base text-secondary',
  caption: 'text-xs text-secondary',
}

export const Typography = ({
  className,
  variant = 'body',
  children,
  as = 'p',
}: {
  className?: string
  variant?: 'header' | 'subheader' | 'body' | 'caption'
  children: React.ReactNode
  as?: React.ElementType
}) => {
  const Element = as
  return (
    <Element className={`${styles[variant]} ${className}`}>{children}</Element>
  )
}
