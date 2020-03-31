import ISelect from './types'
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
import SelectOptions from './SelectOptions'
import { Icon } from '../Icon'

/**
 * Determine which select type to render
 */
const Select = ({ id, options, value, optional, searchable, onChange }: ISelect.IProps) => {
  const [tempValue, setTempValue] = useState(null)
  const [open, setOpen] = useState(false)

  /**
   * Handle change
   */
  const handleChange = (value: any) => {
    const isOption = value && options.find((x: any) => x.label.toLowerCase() === value.toLowerCase())
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

  const filtered = searchable 
    ? options.filter((x: any) => x.label?.toLowerCase().includes(tempValue?.toLowerCase() || '')) 
    : options

  return (
    <span className={cx('select')} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} tabIndex={-1}>
      <input
        className={cx('select__input')}
        id={id}
        name={id}
        value={tempValue || ''}
        readOnly={!searchable}
        placeholder={searchable ? 'Type to search...' : '-- Select --'}
        onFocus={() => setOpen(true)}
        onChange={(e) => handleChange(e.target.value)}
      />

      <SelectOptions open={open} options={filtered} optional={optional} handleClick={handleClick} />
      <Icon className={cx('select__icn')} name={open ? 'chevron-up' : 'chevron-down'} colour='Dark' size='Small' />
    </span>
  )
}

export default Select
