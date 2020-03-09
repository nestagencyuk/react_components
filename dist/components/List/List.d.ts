/// <reference types="react" />
import IList from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/list.scss';
/**
 * My component
 */
declare const List: ({ className, items }: IList.IProps) => JSX.Element;
export default List;
