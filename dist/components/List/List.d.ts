/// <reference types="react" />
import IList from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/list.scss';
/**
 * List of items
 */
declare const List: ({ className, items, children }: IList.IProps) => JSX.Element;
export default List;
