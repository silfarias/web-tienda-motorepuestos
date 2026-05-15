type SectionHeadProps = {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'center',
  className = '',
}: SectionHeadProps) {
  return (
    <div
      className={`section__head ${align === 'left' ? 'section__head--left' : ''} ${className}`.trim()}
    >
      {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="section__lead">{lead}</p>}
    </div>
  )
}
