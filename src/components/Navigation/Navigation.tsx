import * as React from 'react'
import cx from 'classnames'
import Navigation from './types'

/**
 * Styles
 */
import './Navigation.scss'

/**
 * HOC
 */
import { withRouter } from 'react-router-dom'

/**
 * Components
 */
import { NavigationBrand, NavigationList, NavigationItem, NavigationLink } from './'

/**
 * A simple, single level navigation component, allowing for lists to be positioned left,
 * right, or centrally.
 */
const Navigation: React.FC<Navigation.IProps> = ({ className, style, history, brand, links, onClick }) => {
  const leftLinks: Navigation.Link[] = links.filter((x) => x.location === 'left')
  const rightLinks: Navigation.Link[] = links.filter((x) => x.location === 'right')

  const leftBrand = brand && brand.location === 'left'
  const centerBrand = brand && brand.location === 'center'
  const rightBrand = brand && brand.location === 'right'

  const isActive = (url: string) => history.location.pathname === url

  const renderList = (links: Navigation.Link[]) =>
    links.length > 0 && (
      <NavigationList>
        {links.map((x) => (
          <NavigationItem key={`navItem-${x.text}`} active={isActive(x.href)}>
            <NavigationLink {...x} active={isActive(x.href)}>
              {x.text}
            </NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
    )

  return (
    <nav className={cx(className, 'nav')} style={style} onClick={onClick}>
      {leftBrand && <NavigationBrand {...brand} />}

      {renderList(leftLinks)}

      {centerBrand && <NavigationBrand {...brand} />}

      {renderList(rightLinks)}

      {rightBrand && <NavigationBrand {...brand} />}
    </nav>
  )
}

export default withRouter<any, any>(Navigation)
