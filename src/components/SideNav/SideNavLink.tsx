import * as React from 'react'
import { Fragment } from 'react'
import cx from 'classnames'
import { ISideNav } from './types'

/**
 * Components
 */
import { Icon } from '../Icon'
import { Link as RouterLink } from 'react-router-dom'

/**
 * The link to render within the  navigation
 */
const NavigationLink: React.FC<ISideNav.ILinkProps> = ({ className, component, href, icon, children, onClick }) => {
  const renderChildren = (
    <Fragment>
      {icon && <Icon {...icon} className="m--r-xs" />}
      {children}
    </Fragment>
  )

  if (href) {
    if (component) {
      const Tag: any = component
      return (
        <Tag className={cx(className, 'sideNav__link')} to={href}>
          {renderChildren}
        </Tag>
      )
    } else {
      return (
        <RouterLink className={cx(className, 'sideNav__link')} to={href}>
          {renderChildren}
        </RouterLink>
      )
    }
  } else {
    return (
      <button className={cx(className, 'sideNav__link')} onClick={onClick}>
        {renderChildren}
      </button>
    )
  }
}

export default NavigationLink
