import { IPageHeader } from './types';
import * as React from 'react';
import * as cx from 'classnames';

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/page-header.scss';

/**
 * Variants
 */
const variants = {
  Fixed: 'page-header--fixed'
};

/**
 * A simple page header component
 */
const PageHeader: React.FC<IPageHeader.IProps> = ({ className, variant, children }) => (
  <header className={cx(className, 'page-header', variants[variant])}>{children}</header>
);

export default PageHeader;
