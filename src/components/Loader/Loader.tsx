import { ILoader } from './types';
import * as React from 'react';
import cx from 'classnames';

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/loader.scss';

/**
 * Types
 */
const variants = {
  Circle: 'loader--circle',
  Bounce: 'loader--bounce',
  Bars: 'loader--bars'
};

/**
 * Loader
 */
const Loader: React.FC<ILoader.IProps> = ({ className, variant = 'Circle' }) => {
  return <div className={cx(className, 'loader', variants[variant])} />;
};

export default Loader;
