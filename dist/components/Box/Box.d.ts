/// <reference types="react" />
import IBox from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/box.scss';
import '@nestagencyuk/scss_lib/dist/keyframes.scss';
import '@nestagencyuk/scss_lib/dist/utilities.scss';
/**
 * My component
 */
declare const Box: ({ className, align, children }: IBox.IProps) => JSX.Element;
export default Box;
