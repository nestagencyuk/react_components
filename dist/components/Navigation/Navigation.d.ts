/// <reference types="react" />
import INavigation from './types'
/**
 * Styles
 */
import 'scss-lib/dist/navigation.scss'
/**
 * A simple, single level navigation component, allowing for lists to be positioned left,
 * right, or centrally.
 */
declare const Navigation: ({ className, style, brand, links, children }: INavigation.IProps) => JSX.Element
export default Navigation
