/// <reference types="react" />
import IInput from './types'
/**
 * Styles
 */
import 'scss-lib/dist/input.scss'
/**
 * My component
 */
declare const Input: ({ className, type, value, onChange }: IInput.IProps) => JSX.Element
export default Input
