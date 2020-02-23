/// <reference types="react" />
import ILink from './types';
/**
 * Styles
 */
import 'scss-lib/dist/link.scss';
/**
 * A simple link using React Router
 */
declare const Link: ({ className, type, href, children }: ILink.IProps) => JSX.Element;
export default Link;
