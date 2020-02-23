/// <reference types="react" />
import IFooter from './types'
/**
 * Styles
 */
import 'scss-lib/dist/footer.scss'
import 'scss-lib/dist/keyframes.scss'
/**
 * My component
 */
declare const Footer: ({ className, image, links, social, subInfo }: IFooter.IProps) => JSX.Element
export default Footer
