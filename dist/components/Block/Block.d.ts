/// <reference types="react" />
import IBlock from './types';
/**
 * Styles
 */
import 'scss-lib/dist/block.scss';
/**
 * My component
 */
declare const Block: ({ className, type, header, media, children }: IBlock.IProps) => JSX.Element;
export default Block;
