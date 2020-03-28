import IInput from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/input.scss'

/**
 * A user input
 */
const Input = ({ className, id, name, type, value, onChange }: IInput.IProps) => (
  <input
    className={cx(className, 'input')}
    id={id}
    name={name}
    type={type}
    value={value || ''}
    onChange={(e: any) => onChange(e.target.value)}
  />
)

export default Input
