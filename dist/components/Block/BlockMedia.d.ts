/// <reference types="react" />
import IBlock from './types';
/**
 * Block media - image, video, canvas etc
 */
declare const BlockMedia: ({ type, src, alt }: IBlock.IMediaProps) => JSX.Element;
export default BlockMedia;
