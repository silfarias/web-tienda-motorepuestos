type SelectOption = {
  value: string
  label: string
}

type SelectFieldProps = {
  id: string
  label: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
}

export function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="field-select">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
