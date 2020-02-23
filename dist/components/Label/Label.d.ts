/// <reference types="react" />
import ILabel from './types';
/**
 * Styles
 */
import 'scss-lib/dist/label.scss';
/**
 * My component
 */
declare const Label: ({ className, for: htmlFor, children }: ILabel.IProps) => JSX.Element;
export default Label;
