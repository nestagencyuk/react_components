/// <reference types="react" />
import ILoader from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/loader.scss';
/**
 * Loader
 */
declare const Loader: ({ className, type }: ILoader.IProps) => JSX.Element;
export default Loader;
