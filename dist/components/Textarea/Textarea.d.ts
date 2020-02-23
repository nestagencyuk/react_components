/// <reference types="react" />
import ITextarea from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/textarea.scss';
/**
 * My component
 */
declare const Input: ({ className, value, onChange }: ITextarea.IProps) => JSX.Element;
export default Input;
