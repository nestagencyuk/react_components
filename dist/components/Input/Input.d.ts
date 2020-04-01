/// <reference types="react" />
import IInput from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/input.scss';
/**
 * A user input
 */
declare const Input: ({ className, id, name, type, value, onChange }: IInput.IProps) => JSX.Element;
export default Input;
