import IList from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link } from '../Link'

/**
 * My component
 */
const ListLink = ({ className, href, children, ...other }: IList.ILinkProps) => (
  <Link className={cx(className, 'list__link')} href={href} {...other}>
    {children}
  </Link>
)

export default ListLink
