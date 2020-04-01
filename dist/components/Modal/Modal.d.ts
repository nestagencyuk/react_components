/// <reference types="react" />
import IModal from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/modal.scss';
/**
 * A modal using React portal to render at the DOM body root
 */
declare const Modal: ({ header, footer, children, onClose }: IModal.IProps) => JSX.Element;
export default Modal;
