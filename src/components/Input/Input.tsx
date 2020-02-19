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
const Input = ({ className, type }: IInput.IProps) => <input className={cx(className, 'input')} type={type} />

export default Input
