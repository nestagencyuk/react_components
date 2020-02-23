/// <reference types="react" />
import IFooter from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/footer.scss';
import '@nestagencyuk/scss_lib/dist/keyframes.scss';
/**
 * My component
 */
declare const Footer: ({ className, image, links, social, subInfo }: IFooter.IProps) => JSX.Element;
export default Footer;
