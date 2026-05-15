import { cn } from '../../lib/cn'

type FilterChipProps = {
  label: string
  active?: boolean
  onClick: () => void
}

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      className={cn('catalog__filter', active && 'catalog__filter--active')}
      aria-pressed={active}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
