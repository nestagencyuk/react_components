/// <reference types="react" />
import ITextarea from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/textarea.scss';
/**
 * My component
 */
declare const Textarea: ({ className, id, name, value, onChange }: ITextarea.IProps) => JSX.Element;
export default Textarea;
