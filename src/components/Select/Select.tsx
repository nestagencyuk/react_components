import { ISelect } from './types'
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useManageArray } from '../../hooks/useManageArray'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/select.scss'

/**
 * Components
 */
import { SelectInput, SelectOptions } from '.'
import { Icon } from '../Icon'

/**
 * Determine which select type to render
 */
const Select: React.FC<ISelect.IProps> = ({
  id,
  options,
  value = null,
  optional,
  multi,
  searchable,
  disabled,
  onChange
}) => {
  const ref = useRef<HTMLDivElement>()
  const [focused, setFocused] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const { array: values, addItem, deleteItem, resetItems } = useManageArray()

  /**
   * Filter the options if a search value has been entered
   */
  const filtered = searchable
    ? options.filter((x) => x.label?.toLowerCase().includes(searchValue?.toLowerCase() || ''))
    : options

  /**
   * When we focus, open the options
   */
  const handleFocus = () => {
    setFocused(true)
  }

  /**
   * On blur
   *
   * @param {Event} e
   * The event
   */
  const handleBlur = (e: React.FocusEvent<HTMLDivElement> & { relatedTarget: HTMLElement }) => {
    if (!ref.current.contains(e.currentTarget) || !ref.current.contains(e.relatedTarget)) {
      setFocused(false)
      setSearchValue(null)
    }
  }

  /**
   * When clicking an option
   *
   * @param {string} value
   * The passed value
   */
  const handleClick = (value: string) => {
    if (multi) {
      const index = values ? values.indexOf(value) : -1
      if (index === -1) {
        addItem(value)
      } else {
        deleteItem(value)
      }
    } else {
      resetItems([value])
      setFocused(false)
    }
  }

  /**
   * Reset all items
   */
  const handleReset = () => {
    resetItems([])
    setFocused(false)
  }

  /**
   * Component mount
   */
  useEffect(() => {
    if (typeof value === 'string') {
      onChange(value)
    } else if (multi && Array.isArray(value)) {
      value.forEach((x) => handleClick(x))
    }
  }, [])

  /**
   * Send the value to the parent onChange fn
   */
  useEffect(() => {
    if (values === null) return
    if (multi) {
      onChange(values.length === 0 ? null : values)
    } else {
      onChange(values[0])
    }
  }, [values])

  return (
    <div
      ref={ref}
      className={cx('select', { 'select--disabled': disabled })}
      tabIndex={-1}
      data-testid={id}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div>
        <SelectInput
          id={id}
          value={value}
          searchValue={searchValue}
          options={options}
          multi={multi}
          searchable={searchable}
          disabled={disabled}
          onChange={setSearchValue}
        />

        {multi && values?.length > 0 && (
          <button className="select__clear" title="Clear" onClick={handleReset}>
            <Icon name="Cross" size="XSmall" />
          </button>
        )}

        <Icon className="select__icn" name={focused ? 'Chevron-up' : 'Chevron-down'} colour="Dark" size="Small" />
      </div>

      <SelectOptions
        id={id}
        open={focused}
        values={values}
        options={filtered}
        optional={optional}
        multi={multi}
        onClick={handleClick}
      />
    </div>
  )
}

export default Select
