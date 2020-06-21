import { ISelect } from './types'
import * as React from 'react'
import { useEffect, useState } from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Checkbox } from '../Checkbox'

/**
 * Search input
 */
const SelectInput: React.FC<any> = ({ id, value, searchValue, options, multi, searchable, disabled, onChange, onSearchChange }) => {
  const [shownValue, setShownValue] = useState('')
  const [placeholder, setPlaceholder] = useState(searchable ? 'Type to search...' : '-- Select --')

  /**
   * Listen to changes to the actual value
   */
  useEffect(() => {
    if (multi) return
    const label = options.find((x: any) => x.value === value)?.label
    onSearchChange(label)
  }, [value])

  /**
   * Listen to the value and search value
   */
  useEffect(() => {
    if (multi) {
      const num = value ? value.length < 10 ? value.length : '10+' : 0

      if (searchable) {
        setPlaceholder(`${num} Selected`)
      } else {
        setShownValue(`${num} Selected`)
      }
    }

    if (searchable) {
      setShownValue(searchValue || '')
      if (value === null) {
        setPlaceholder('Type to search...')
      }
      if (!multi) {
        const label = options.find((x: any) => x.value === value)?.label
        if (label) {
          setPlaceholder(label || 'Type to search...')
        }
      }
    }

    if (!searchable && !multi) {
      setShownValue(options.find((x: any) => x.value === value)?.label || '')
    }
  }, [value, searchValue])

  return (
    <input
      className="select__input"
      id={id}
      name={id}
      value={shownValue}
      readOnly={!searchable}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete="off"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
    />
  )
}

export default SelectInput
