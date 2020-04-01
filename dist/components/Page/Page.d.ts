/// <reference types="react" />
import IPage from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/page.scss';
/**
 * A simple page wrapper
 */
declare const Page: ({ className, config, data, children }: IPage.IProps) => JSX.Element;
export default Page;
