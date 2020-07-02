import { IFloat } from './types';
import * as React from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/float.scss';

/**
 * Alignment classes
 */
const alignX = {
  Start: 'float--start-x',
  End: 'float--end-x',
  Center: 'float--center-x'
};

const alignY = {
  Start: 'float--start-y',
  End: 'float--end-y',
  Center: 'float--center-y'
};

/**
 * Float content somewhere on the screen
 */
const Float: React.FC<IFloat.IProps> = ({ className, align = { x: 'Center', y: 'Start' }, portal, children }) => {
  /**
   * Render the actual componetn
   */
  const renderFloat = () => <div className={cx(className, 'float', alignX[align?.x], alignY[align?.y])}>{children}</div>;

  return portal ? createPortal(renderFloat(), document.body) : renderFloat();
};

export default Float;
