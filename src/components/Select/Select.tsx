import { ISelect } from './types'
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { debounce } from '@nestagencyuk/typescript_lib-frontend'
import { useManageArray } from '../../hooks/useManageArray'
import cx from 'classnames'

/**
 * Styles
 */
import './Select.scss'

/**
 * Components
 */
import { SelectInput, SelectOptions } from '.'
import { Button } from '../Button'
import { Icon } from '../Icon'

/**
 * Determine which select type to render
 */
const Select: React.FC<ISelect.IProps> = ({
  className,
  id,
  tabIndex,
  multi,
  multiVariant = 'Checkbox',
  filterable,
  optional,
  placeholder = '-- Select --',
  options,
  value = null,
  icon,
  disabled,
  onChange,
  onSearch
}) => {
  const { array: values, addItem, deleteItem, resetItems } = useManageArray()
  const [filterValue, setSearchValue] = useState<string>('')
  const [focused, setFocused] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>()

  /**
   * Filter the options if a filter value has been entered
   */
  const filtered = filterable
    ? options.filter((x) => x.label?.toLowerCase().includes(filterValue?.toLowerCase() || ''))
    : options

  /**
   * When we focus, open the options
   */
  const handleFocus = (): void => {
    setFocused(true)
  }

  /**
   * On blur
   *
   * @param {Event} e
   * The event
   */
  const handleBlur = (e: React.FocusEvent<HTMLDivElement> & { relatedTarget: HTMLElement }) => {
    const isOutside = !ref.current.contains(e.currentTarget) || !ref.current.contains(e.relatedTarget)
    if (isOutside) {
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
      if (multiVariant === 'Tags') ref.current.focus()
      const index = values ? values.indexOf(value) : -1
      if (index === -1) {
        addItem(value)
      } else {
        deleteItem(value)
      }
    } else {
      resetItems([value])
      setFocused(false)
      ref.current.parentElement.focus()
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
   * Handle the text input change
   */
  const handleChange = (val: string) => {
    setSearchValue(val)
    const same = options.find((y) => y.label === val)
    if (onSearch && !same) onSearch(val)
  }

  /**
   * Component mount
   */
  useEffect(() => {
    if (typeof value === 'string') {
      onChange(value)
    } else if (multi && Array.isArray(value)) {
      value.forEach((x) => addItem(x))
    }
  }, [])

  /**
   * Send the value to the parent onChange fn
   */
  useEffect(() => {
    if (values === null) return
    if (multi) {
      onChange(values.length === 0 ? null : (values as string[]))
    } else {
      onChange(values[0] as string)
    }
  }, [values])

  return (
    <div
      ref={ref}
      className={cx(className, 'select', { 'select--disabled': disabled })}
      data-testid={id}
      tabIndex={disabled ? -1 : 0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div>
        <SelectInput
          id={id}
          value={value}
          placeholder={placeholder}
          filterValue={filterValue}
          options={options}
          multi={multi}
          multiVariant={multiVariant}
          filterable={filterable}
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onChange={handleChange}
        />

        {multi && values?.length > 0 && (
          <Button
            className="select__clear"
            variant="Tertiary"
            size="XSmall"
            tabIndex={disabled ? -1 : 0}
            onClick={handleReset}
          >
            Clear
          </Button>
        )}

        <Icon
          className="select__icn"
          colour="Inherit"
          {...(icon || {
            name: focused ? 'Chevron-up' : 'Chevron-down',
            size: 'Small'
          })}
        />
      </div>

      <SelectOptions
        id={id}
        open={focused}
        values={values as string[]}
        options={options}
        filtered={filtered}
        optional={optional}
        multi={multi}
        multiVariant={multiVariant}
        onClick={handleClick}
      />
    </div>
  )
}

/**
 * Export with the search fn debounced
 */
const DebouncedSelect = ({ onSearch, ...props }: ISelect.IProps) =>
  onSearch ? <Select {...props} onSearch={debounce(onSearch, 500)} /> : <Select {...props} />

export default DebouncedSelect
