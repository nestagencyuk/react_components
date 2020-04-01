/// <reference types="react" />
import ILabel from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/label.scss';
/**
 * A label
 */
declare const Label: ({ className, for: htmlFor, children }: ILabel.IProps) => JSX.Element;
export default Label;
