import { IList } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link } from '../Link'

/**
 * List link
 */
const ListLink = ({ className, children, ...props }: IList.ILinkProps) => (
  <Link className={cx(className, 'list__link')} {...props}>
    {children}
  </Link>
)

export default ListLink
