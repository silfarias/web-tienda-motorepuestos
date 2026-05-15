import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from '../../config/paths'
import { STORE } from '../../config/store'

type AuthCardProps = {
  title: string
  subtitle: string
  children: ReactNode
  footer: ReactNode
}

export function AuthCard({ title, subtitle, children, footer }: AuthCardProps) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to={PATHS.home} className="auth-card__brand">
          <span className="header__logo">MM</span>
          <span>
            <strong>{STORE.name}</strong>
            <small>{STORE.tagline}</small>
          </span>
        </Link>
        <h1>{title}</h1>
        <p className="auth-card__subtitle">{subtitle}</p>
        {children}
        <div className="auth-card__footer">{footer}</div>
      </div>
    </div>
  )
}
