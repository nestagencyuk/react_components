/// <reference types="react" />
import Page from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/page.scss';
/**
 * A simple page wrapper
 */
declare const Page: ({ className, config, data, children }: Page.IProps) => JSX.Element;
export default Page;
