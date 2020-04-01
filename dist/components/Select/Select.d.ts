/// <reference types="react" />
import ISelect from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/select.scss';
/**
 * Determine which select type to render
 */
declare const Select: ({ id, options, value, optional, searchable, onChange }: ISelect.IProps) => JSX.Element;
export default Select;
