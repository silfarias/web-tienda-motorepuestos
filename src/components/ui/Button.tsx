import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '../../lib/cn'

type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'ghost'
  | 'whatsapp'
  | 'soft'

type ButtonSize = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  block?: boolean
  className?: string
  children: React.ReactNode
}

function buttonClass({
  variant = 'primary',
  size = 'md',
  block,
  className,
}: CommonProps) {
  return cn(
    'btn',
    `btn--${variant}`,
    size !== 'md' && `btn--${size}`,
    block && 'btn--block',
    className,
  )
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonAsRouterLink = CommonProps &
  LinkProps & { as: 'link' }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

export function Button(props: ButtonProps) {
  const { variant, size, block, className, children, as = 'button', ...rest } =
    props

  const classes = buttonClass({ variant, size, block, className, children })

  if (as === 'link') {
    return (
      <Link className={classes} {...(rest as LinkProps)}>
        {children}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
