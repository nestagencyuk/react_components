import { IInput } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Input.scss'

/**
 * A user input
 */
const Input: React.FC<IInput.IProps> = ({ className, id, name, type = 'Text', value, disabled, onChange }) => (
  <input
    className={cx(className, 'input', { 'input--disabled': disabled })}
    id={id}
    name={name}
    type={type.toLowerCase()}
    value={value || ''}
    disabled={disabled}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
  />
)

export default Input
