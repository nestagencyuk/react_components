import { IGrid } from './types';
import * as React from 'react';
import cx from 'classnames';

/**
 * Grid item that sits within the main grid component.
 */
const GridItem: React.FC<IGrid.IItemProps> = ({ className, style, span, children }, ref: React.Ref<HTMLDivElement>) => {
  const passRef = ref && (typeof ref === 'function' || Object.keys(ref).length > 0 ? { ref } : {});

  return (
    <div {...passRef} className={cx(className, 'grid__item', span && `grid__item--${span}`)} style={style}>
      {children}
    </div>
  );
};

export default GridItem;
