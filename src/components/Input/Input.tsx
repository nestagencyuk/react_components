import IInput from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/input.scss'

/**
 * My component
 */
const Input = ({ className, type, value, onChange }: IInput.IProps) => (
  <input
    className={cx(className, 'input')}
    type={type}
    value={value || ''}
    onChange={(e: any) => onChange(e.target.value)}
  />
)

export default Input
