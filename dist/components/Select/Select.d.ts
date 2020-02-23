/// <reference types="react" />
import ISelect from './types'
/**
 * Styles
 */
import 'scss-lib/dist/select.scss'
/**
 * My component
 */
declare const Select: ({ className, placeholder, options, value, onChange }: ISelect.IProps) => JSX.Element
export default Select
