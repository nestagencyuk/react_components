/// <reference types="react" />
import IFloat from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/float.scss';
/**
 * Float content somewhere on the screen
 */
declare const Float: ({ className, align, portal, children }: IFloat.IProps) => JSX.Element;
export default Float;
