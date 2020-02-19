/// <reference types="react" />
import IHeader from './types'
/**
 * Styles
 */
import 'scss-lib/dist/header.scss'
/**
 * A simple header component with a heading and subheading
 */
declare const Header: ({ className, type, heading, subheading, children }: IHeader.IProps) => JSX.Element
export default Header
