import { IPageFooter } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link } from '../Link'

/**
 * My component
 */
const PageFooterLink = ({ className, children, ...props }: IPageFooter.ILinkProps) => (
  <Link className={cx(className, 'page-footer__link')} {...props}>
    {children}
  </Link>
)

export default PageFooterLink
