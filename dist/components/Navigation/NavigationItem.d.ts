/// <reference types="react" />
import INavigation from './types';
/**
 * A navigation list item, with an active state
 */
declare const NavigationItem: ({ active, children }: INavigation.IItemProps) => JSX.Element;
export default NavigationItem;
