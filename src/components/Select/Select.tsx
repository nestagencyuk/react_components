import { ISelect } from './types'
import * as React from 'react'
import { useState, useEffect, useRef, Fragment } from 'react'
import { debounce } from '@nestagencyuk/typescript_lib-frontend'
import { useFocus } from '../../hooks/useFocus'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import cx from 'classnames'

/**
 * Styles
 */
import './Select.scss'

/**
 * Components
 */
import { SelectOptions } from '.'
import { Icon } from '../Icon'

/**
 * Sizes
 */
const sizes = {
  Small: 'select__input--sm',
  Medium: 'select__input--md',
  Large: 'select__input--lg'
}

/**
 * Determine which select type to render
 */
const Select: React.FC<ISelect.IProps> = ({
  className,
  id,
  variant = 'Native',
  tabIndex,
  size,
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
  const ref = useRef<HTMLDivElement>()

  const [placeholder, setPlaceholder] = useState(initialPlaceholder)
  const [filterValue, setFilterValue] = useState<string>('')
  const [shownValue, setShownValue] = useState<string>('')

  const [focused, onFocus, onBlur, setFocused] = useFocus()
  const [, , onKeyDown] = useKeyboardNav({ root: ref.current, skip: 0 })

  /**
   * Filter the options if a filter value has been entered
   */
  const filtered = filterable
    ? options.filter((x) => x.label?.toLowerCase().includes(filterValue?.toLowerCase() || ''))
    : options

  /**
   * Reset all items
   */
  const handleReset = () => {
    onChange(null)
    setFocused(false)
    ref.current.parentElement.focus()
  }

  /**
   * Set value and placeholder if filterable
   */
  const handleFilterable = () => {
    setShownValue(filterValue)
    if (value === null) {
      setPlaceholder(initialPlaceholder)
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
   * When clicking an option
   *
   * @param {string} value
   * The passed value
   */
  const handleClick = (value: string) => {
    onChange(value)
    setFocused(false)
    setShownValue('')
    ref.current.parentElement.focus()
  }

  /**
   * Listen to change in focused
   */
  useEffect(() => {
    if (!focused) document.body.style.overflow = null
  }, [focused])

  /**
   * Listen to change to filter value
   */
  useEffect(() => {
    if (filterable) handleFilterable()
  }, [filterValue])

  /**
   * Listen to changes to actual value
   */
  useEffect(() => {
    if (variant === 'Native') return
    const foundValue = options.find((x) => x.value === value)
    setPlaceholder(foundValue?.label || initialPlaceholder)
  }, [value])

  return (
    <div
      ref={ref}
      className={cx(className, 'select', { 'select--disabled': disabled })}
      data-testid={id}
      tabIndex={-1}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      {variant === 'Native' ? (
        <Fragment>
          <select
            className={cx('select__input', sizes[size])}
            data-testid="select-input"
            id={id}
            defaultValue={value}
            disabled={disabled}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
          >
            {placeholder && (
              <option className="multiselect__option" value="" disabled>
                {placeholder || '-- Select --'}
              </option>
            )}

            {options.map((option, i) => (
              <option
                key={`option-${i}`}
                className={cx('select__option', option.value, {
                  disabled: option.disabled
                })}
                data-testid="option"
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <Icon
            className="select__icn"
            colour="Inherit"
            {...(icon || {
              name: 'Chevron-down',
              size: 'Small'
            })}
          />
        </Fragment>
      ) : (
        <Fragment>
          <div style={{ position: 'relative' }}>
            <input
              className={cx('select__input', sizes[size])}
              id={id}
              data-testid={`${id}-input`}
              name={id}
              tabIndex={tabIndex}
              value={shownValue || ''}
              readOnly={!filterable}
              placeholder={placeholder}
              disabled={disabled}
              autoComplete="off"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
            />
          </div>

          <Icon
            className="select__icn"
            colour="Inherit"
            {...(icon || {
              name: focused ? 'Chevron-up' : 'Chevron-down',
              size: 'Small'
            })}
          />

          {focused && (
            <SelectOptions
              id={id}
              trigger={ref.current}
              options={options}
              filtered={filtered}
              optional={optional}
              onClick={(val) => (val === null ? handleReset() : handleClick(val))}
            />
          )}
        </Fragment>
      )}
    </div>
  )
}

/**
 * Export with the search fn debounced
 */
const DebouncedSelect = ({ onSearch, ...props }: ISelect.IProps) =>
  onSearch ? <Select {...props} onSearch={debounce(onSearch, 500)} /> : <Select {...props} />

export default DebouncedSelect
