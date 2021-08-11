import { IMultiSelect } from './types'
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { debounce } from '@nestagencyuk/typescript_lib-frontend'
import { useManageArray } from '../../hooks/useManageArray'
import { useFocus } from '../../hooks/useFocus'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import { useWindowSize } from '../../hooks/useWindowSize'
import cx from 'classnames'

/**
 * Styles
 */
import './MultiSelect.scss'

/**
 * Components
 */
import { MultiSelectOptions } from '.'
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
const MultiSelect: React.FC<IMultiSelect.IProps> = ({
  className,
  id,
  variant = 'Checkbox',
  tabIndex,
  size,
  filterable,
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
  const { width } = useWindowSize()
  const { array: values, addItem, deleteItem, resetItems } = useManageArray({
    initialArray: Array.isArray(value) ? value : null
  })

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
    resetItems([])
    setFocused(false)
    ref.current.parentElement.focus()
  }

  /**
   * Set value and placeholders if multi-select
   */
  const handleValues = () => {
    const num = value ? (value.length < 10 ? value.length : '10+') : 0
    if (filterable) {
      setPlaceholder(num > 0 ? `${num} Selected` : initialPlaceholder)
    } else {
      setShownValue(num > 0 ? `${num} Selected` : null)
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
    if (variant === 'Tags') ref.current.focus()
    const index = values ? values.indexOf(value) : -1
    if (index === -1) {
      addItem(value)
    } else {
      deleteItem(value)
    }
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
    handleValues()
  }, [value])

  /**
   * Send the value to the parent onChange fn
   */
  useEffect(() => {
    if (values !== null) {
      onChange(values?.length === 0 ? null : (values as string[]))
    }
  }, [values])

  return width > 768 ? (
    <div
      ref={ref}
      className={cx(className, 'multiselect', { 'multiselect--disabled': disabled })}
      data-testid={id}
      tabIndex={-1}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <div style={{ position: 'relative' }}>
        <input
          className={cx('multiselect__input', sizes[size])}
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

        <Icon
          className="multiselect__icn"
          colour="Inherit"
          {...(icon || {
            name: focused ? 'Chevron-up' : 'Chevron-down',
            size: 'Small'
          })}
        />
      </div>

      {focused && (
        <MultiSelectOptions
          id={id}
          trigger={ref.current}
          values={values as string[]}
          options={options}
          filtered={filtered}
          variant={variant}
          onClick={(val) => (val === null ? handleReset() : handleClick(val))}
        />
      )}
    </div>
  ) : (
    <div className={cx(className, 'multiselect', { 'multiselect--disabled': disabled })}>
      <div style={{ position: 'relative' }}>
        <select
          className={cx('multiselect__input', sizes[size])}
          size={1}
          multiple
          value={value || ['']}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onChange(Array.from(e.target.selectedOptions, (x) => x.value).filter((x) => !!x))
          }
        >
          {placeholder && (
            <option className="multiselect__option" value="" disabled>
              {placeholder || '-- Select --'}
            </option>
          )}

          {options.map((x, i) => (
            <option
              key={`${x.value}-${i}`}
              className={cx('multiselect__option', { 'multiselect__option--hide': placeholder || i > 0 })}
              value={x.value}
              disabled={x.disabled}
            >
              {options.find((y) => y.value === x.value)?.label}
            </option>
          ))}
        </select>

        <Icon
          className="multiselect__icn"
          colour="Inherit"
          {...(icon || {
            name: focused ? 'Chevron-up' : 'Chevron-down',
            size: 'Small'
          })}
        />
      </div>
    </div>
  )
}

/**
 * Export with the search fn debounced
 */
const DebouncedMultiSelect = ({ onSearch, ...props }: IMultiSelect.IProps) =>
  onSearch ? <MultiSelect {...props} onSearch={debounce(onSearch, 500)} /> : <MultiSelect {...props} />

export default DebouncedMultiSelect
