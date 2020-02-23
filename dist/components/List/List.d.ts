/// <reference types="react" />
import IList from './types';
/**
 * Styles
 */
import 'scss-lib/dist/list.scss';
/**
 * My component
 */
declare const List: ({ className, children }: IList.IProps) => JSX.Element;
export default List;
