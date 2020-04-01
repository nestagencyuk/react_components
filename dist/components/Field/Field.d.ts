/// <reference types="react" />
import IField from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/field.scss';
/**
 * Field wrapper component
 */
declare const Field: ({ className, label, state, msg, ...props }: IField.IProps) => JSX.Element;
export default Field;
