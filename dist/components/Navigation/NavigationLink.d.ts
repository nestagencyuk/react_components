/// <reference types="react" />
import INavigation from './types';
/**
 * A Navigation link using React Router
 */
declare const NavigationLink: ({ className, component, href, active, children, onClick }: INavigation.ILinkProps) => JSX.Element;
export default NavigationLink;
