/// <reference types="react" />
import IAlert from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/alert.scss';
declare const Alert: ({ type, footer, children, onClose }: IAlert.IProps) => JSX.Element;
export default Alert;
