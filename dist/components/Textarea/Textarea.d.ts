/// <reference types="react" />
import ITextarea from './types';
/**
 * Styles
 */
import 'scss-lib/dist/input.scss';
/**
 * My component
 */
declare const Input: ({ className, value, onChange }: ITextarea.IProps) => JSX.Element;
export default Input;
