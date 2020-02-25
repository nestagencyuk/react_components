import IList from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link as RouterLink } from 'react-router-dom'

/**
 * My component
 */
const ListLink = ({ className, href, external, children }: IList.ILinkProps) => {
  const Tag = external ? 'a' : RouterLink

  return (
    <Tag className={cx(className, 'list__link')} type={'Primary'} to={href} href={href} target={external ? '_blank' : null}>
      {children}
    </Tag>
  )
}

export default ListLink
