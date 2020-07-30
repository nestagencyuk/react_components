import { IInput } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Input.scss'

/**
 * Sizes
 */
const sizes = {
  Small: 'input--sm',
  Medium: 'input--md',
  Large: 'input--lg'
}

/**
 * A user input
 */
const Input: React.FC<IInput.IProps> = ({
  className,
  placeholder,
  id,
  name,
  type = 'Text',
  value,
  disabled,
  onChange,
  size = 'Medium'
}) => (
  <input
    className={cx(className, sizes[size], 'input', { 'input--disabled': disabled })}
    id={id}
    name={name}
    type={type.toLowerCase()}
    value={value || ''}
    disabled={disabled}
    placeholder={placeholder}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(type === 'Number' ? parseInt(e.target.value) : e.target.value)
    }
  />
)

export default Input
