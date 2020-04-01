/// <reference types="react" />
import IFooter from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/footer.scss';
/**
 * My component
 */
declare const Footer: ({ className, image, links, subInfo }: IFooter.IProps) => JSX.Element;
export default Footer;
