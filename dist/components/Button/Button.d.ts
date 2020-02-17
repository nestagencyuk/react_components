/// <reference types="react" />
import IButton from './types'
/**
 * Styles
 */
import 'scss-lib/dist/button.scss'
/**
 * A visual button that will also render as <a> if it has a href
 */
declare const Button: ({ className, href, type, submit, children, onClick }: IButton.IProps) => JSX.Element
export default Button
