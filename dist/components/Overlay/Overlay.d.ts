/// <reference types="react" />
import IOverlay from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/overlay.scss';
/**
 * An overlay
 */
declare const Overlay: ({ className, type, portal, onClick }: IOverlay.IProps) => JSX.Element;
export default Overlay;
