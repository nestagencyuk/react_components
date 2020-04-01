/// <reference types="react" />
import ICheckbox from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/checkbox.scss';
/**
 * A checkbox
 */
declare const Checkbox: ({ className, id, name, value, onChange }: ICheckbox.IProps) => JSX.Element;
export default Checkbox;
