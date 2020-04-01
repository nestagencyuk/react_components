/// <reference types="react" />
import IImage from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/image.scss';
/**
 * My component
 */
declare const Image: ({ className, type, aspect, src, alt }: IImage.IProps) => JSX.Element;
export default Image;
