/// <reference types="react" />
import IIcon from './types';
/**
 * Styles
 */
import 'scss-lib/dist/icon.scss';
/**
 * Icon
 */
declare const Icon: ({ className, name, size, colour }: IIcon.IProps) => JSX.Element;
export default Icon;
