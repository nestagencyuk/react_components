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
import { SelectOptions } from '.'
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
  placeholder: initialPlaceholder = '-- Select --',
  options,
  value = null,
  icon,
  disabled,
  onChange,
  onSearch
}) => {
  const { array: values, addItem, deleteItem, resetItems } = useManageArray({
    initialArray: Array.isArray(value) ? value : null
  })
  const [placeholder, setPlaceholder] = useState(initialPlaceholder)
  const [filterValue, setFilterValue] = useState<string>('')
  const [shownValue, setShownValue] = useState('')

  const [cursor, setCursor] = useState<number>(-1)
  const [focused, setFocused] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>()

  /**
   * Filter the options if a filter value has been entered
   */
  const prefiltered = filterable
    ? options.filter((x) => x.label?.toLowerCase().includes(filterValue?.toLowerCase() || ''))
    : options

  const filtered = multiVariant === 'Tags' ? prefiltered.filter((x) => !values?.includes(x.value)) : prefiltered

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
    const isOutside = !ref.current.contains(e.currentTarget) || !ref.current.contains(e.relatedTarget)
    if (isOutside) {
      setFocused(false)
      setFilterValue(null)
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
    setShownValue(filterValue)
    if (value === null) {
      setPlaceholder(initialPlaceholder)
    }
    if (!multi) {
      const foundValue = options.find((x) => x.value === filterValue)
      if (foundValue) {
        setPlaceholder(foundValue.label || initialPlaceholder)
        setFilterValue('')
        setShownValue('')
      }
    }
  }

  /**
   * Handle the text input change
   */
  const handleChange = (val: string) => {
    const same = options.find((y) => y.label === val)
    setFilterValue(val)
    if (onSearch && !same) onSearch(val)
  }

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        cursor > 0 ? setCursor((prev) => prev - 1) : setCursor(filtered.length - 1)
        break
      case 'ArrowDown':
        cursor < filtered.length - 1 ? setCursor((prev) => prev + 1) : setCursor(0)
        break
      default:
        break
    }
  }

  /**
   * Listen to change to filter value
   */
  useEffect(() => {
    if (filterable) handleFilterable()
  }, [filterValue])

  useEffect(() => {
    if (multi) {
      handleMulti()
    } else {
      const foundValue = options.find((x) => x.value === value)
      setPlaceholder(foundValue?.label || initialPlaceholder)
      setCursor(-1)
    }
  }, [value])

  /**
   * Send the value to the parent onChange fn
   */
  useEffect(() => {
    if (values !== null) {
      onChange(multi ? (values.length === 0 ? null : (values as string[])) : (values[0] as string))
    }
  }, [values])

  return (
    <div
      ref={ref}
      className={cx(className, 'select', { 'select--disabled': disabled })}
      data-testid={id}
      tabIndex={-1}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div>
        <input
          className="select__input"
          id={id}
          data-testid={`${id}-input`}
          tabIndex={tabIndex}
          name={id}
          value={shownValue || ''}
          readOnly={!filterable}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
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
        cursor={cursor}
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
