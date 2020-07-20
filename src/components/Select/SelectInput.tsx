import { ISelect } from './types'
import * as React from 'react'
import { useEffect, useState } from 'react'

/**
 * Search input
 */
const SelectInput: React.FC<ISelect.IInputProps> = ({
  id,
  value,
  placeholder: initPlaceholder,
  filterValue,
  options,
  multi,
  multiVariant,
  filterable,
  disabled,
  onChange
}) => {
  const [shownValue, setShownValue] = useState('')
  const [placeholder, setPlaceholder] = useState(initPlaceholder)

  /**
   * Set value and placeholders if multi-select
   */
  const handleMulti = () => {
    const num = value ? (value.length < 10 ? value.length : '10+') : 0

    if (filterable) {
      setPlaceholder(`${num} Selected`)
    } else {
      setShownValue(`${num} Selected`)
    }
  }

  /**
   * Set value and placeholder if filterable
   */
  const handleFilterable = () => {
    setShownValue(filterValue || '')
    if (value === null) {
      setPlaceholder(initPlaceholder)
    }
    if (!multi) {
      const label = options.find((x) => x.value === value)?.label
      setPlaceholder(label || initPlaceholder)
    }
  }

  /**
   * Listen to changes to the actual value
   */
  useEffect(() => {
    if (multi) return
    const label = options.find((x) => x.value === value)?.label
    onChange(label)
  }, [value])

  /**
   * Listen to the value and filter value
   */
  useEffect(() => {
    if (multi) handleMulti()
    if (filterable) handleFilterable()
    if (!filterable && !multi) setShownValue(options.find((x) => x.value === value)?.label || '')
  }, [value, filterValue])

  return (
    <input
      className="select__input"
      id={id}
      data-testid={`${id}-input`}
      name={id}
      value={shownValue}
      readOnly={!filterable}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete="off"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  )
}

export default SelectInput
