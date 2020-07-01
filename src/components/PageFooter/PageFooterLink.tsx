import { IPageFooter } from './types';
import * as React from 'react';
import cx from 'classnames';

/**
 * Components
 */
import { Link } from '../Link';

/**
 * My component
 */
const PageFooterLink: React.FC<IPageFooter.ILinkProps> = ({ className, children, ...props }) => (
  <Link className={cx(className, 'page-footer__link')} {...props}>
    {children}
  </Link>
);

export default PageFooterLink;
