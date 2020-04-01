import ITooltip from './types';
import * as React from 'react';
/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/tooltip.scss';
/**
 * A tooltip
 */
declare const Tooltip: ({ attachTo, trigger, align, children }: ITooltip.IProps) => React.ReactPortal;
export default Tooltip;
