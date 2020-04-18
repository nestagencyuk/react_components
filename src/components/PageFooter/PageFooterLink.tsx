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
const PageFooterLink = ({ className, href, children, ...other }: IPageFooter.ILinkProps) => (
  <Link className={cx(className, 'page-footer__link')} variant='Inverse' href={href} {...other}>
    {children}
  </Link>
)

export default PageFooterLink
