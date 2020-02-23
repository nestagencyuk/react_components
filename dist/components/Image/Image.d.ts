/// <reference types="react" />
import IImage from './types'
/**
 * Styles
 */
import 'scss-lib/dist/image.scss'
/**
 * My component
 */
declare const Image: ({ className, type, size, src, alt }: IImage.IProps) => JSX.Element
export default Image
