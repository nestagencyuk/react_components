/// <reference types="react" />
import IGrid from './types';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/grid.scss';
/**
 * A grid system using CSS Grid
 */
declare const Grid: ({ className, gutter, children }: IGrid.IProps) => JSX.Element;
export default Grid;
