/// <reference types="react" />
import INavigation from './types';
/**
 * A Navigation link using React Router
 */
declare const NavigationLink: ({ className, href, target, external, active, children, onClick }: INavigation.ILinkProps) => JSX.Element;
export default NavigationLink;
