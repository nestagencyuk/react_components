import { IOverlay } from './types';
import * as React from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/overlay.scss';

/**
 * Variants
 */
const variants = {
  Inverse: 'overlay--inverse'
};

/**
 * An overlay
 */
const Overlay: React.FC<IOverlay.IProps> = ({ className, variant, portal, fixed, children, onClick }) => {
  /**
   * Render the component
   */
  const renderOverlay = () => (
    <div className={cx(className, 'overlay', variants[variant], { 'overlay--fixed': fixed })} onClick={onClick}>
      {children}
    </div>
  );

  return portal ? createPortal(renderOverlay(), document.body) : renderOverlay();
};

export default Overlay;
