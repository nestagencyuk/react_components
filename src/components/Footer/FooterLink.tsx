import IFooter from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link } from '../Link'

/**
 * My component
 */
const FooterLink = ({ className, href, children, ...other }: IFooter.ILinkProps) => (
  <Link className={cx(className, 'footer__link')} type={'Inverse'} href={href} {...other}>
    {children}
  </Link>
)

export default FooterLink
