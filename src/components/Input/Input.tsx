import { IInput } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/input.scss'

/**
 * A user input
 */
const Input = ({ className, id, name, type = 'Text', value, disabled, onChange }: IInput.IProps) => (
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
