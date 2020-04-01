/// <reference types="react" />
import IRadio from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/radio.scss';
/**
 * A Radio button
 */
declare const Radio: ({ className, id, name, value, onChange }: IRadio.IProps) => JSX.Element;
export default Radio;
