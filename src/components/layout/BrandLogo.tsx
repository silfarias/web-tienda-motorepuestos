import { STORE } from '../../config/store'

type BrandLogoProps = {
  compact?: boolean
}

export function BrandLogo({ compact }: BrandLogoProps) {
  return (
    <>
      <span className="header__logo" aria-hidden="true">
        MM
      </span>
      {!compact && (
        <span className="header__name">
          <strong>{STORE.name}</strong>
          <small>{STORE.tagline}</small>
        </span>
      )}
    </>
  )
}
