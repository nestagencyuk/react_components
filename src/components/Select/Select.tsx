import { ISelect } from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/select.scss'

/**
 * Components
 */
import { SelectOptions } from '.'
import { Icon } from '../Icon'

/**
 * Determine which select type to render
 */
const Select = ({ id, options, value, optional, searchable, disabled, onChange }: ISelect.IProps) => {
  const [tempValue, setTempValue] = useState(null)
  const [open, setOpen] = useState(false)

  /**
   * Handle change
   */
  const handleChange = (value: string) => {
    const isOption = value && options.find((x) => x.label.toLowerCase() === value.toLowerCase())
    setTempValue(value)
    if (isOption) {
      onChange(isOption.value)
      setTempValue(isOption.label)
    } else {
      onChange(null)
    }
  }

  /**
   * Handle when an option is selected
   */
  const handleClick = (value: string) => {
    handleChange(value)
    setOpen(false)
  }

  /**
   * Filter the options if a search value has been entered
   */
  const filtered = searchable
    ? options.filter((x) => x.label?.toLowerCase().includes(tempValue?.toLowerCase() || ''))
    : options

  return (
    <span className={cx('select', { 'select--disabled': disabled })} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} tabIndex={-1}>
      <input
        className="select__input"
        id={id}
        name={id}
        value={tempValue || ''}
        readOnly={!searchable}
        placeholder={searchable ? 'Type to search...' : '-- Select --'}
        disabled={disabled}
        onFocus={() => setOpen(true)}
        onChange={(e) => handleChange(e.target.value)}
      />

      <SelectOptions open={open} options={filtered} optional={optional} handleClick={handleClick} />
      <Icon className="select__icn" name={open ? 'chevron-up' : 'chevron-down'} colour="Dark" size="Small" />
    </span>
  )
}

export default Select
