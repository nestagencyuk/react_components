/// <reference types="react" />
import IAccordion from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/accordion.scss';
/**
 * My component
 */
declare const AccordionItem: ({ className, id, header, children }: IAccordion.IItemProps) => JSX.Element;
export default AccordionItem;
