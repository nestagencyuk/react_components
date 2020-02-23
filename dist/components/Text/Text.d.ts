/// <reference types="react" />
import IText from './types';
/**
 * Styles
 */
import 'scss-lib/dist/text.scss';
/**
 * A text component
 */
declare const Text: ({ className, type, tag, children }: IText.IProps) => JSX.Element;
export default Text;
