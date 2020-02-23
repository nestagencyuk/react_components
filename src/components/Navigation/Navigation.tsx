import INavigation from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/navigation.scss'

/**
 * Components
 */
import { NavigationBrand, NavigationList, NavigationItem, NavigationLink } from '.'

/**
 * Brand align styles
 */
const brandAlignClasses = {
  Start: 'nav--b-s',
  Center: 'nav--b-c',
  End: 'nav--b-e'
}

const NavigationToggle = () => <button className={cx('nav__toggle')}>X</button>

/**
 * A simple, single level navigation component, allowing for lists to be positioned left,
 * right, or centrally.
 */
const Navigation = ({ className, style, brand = {}, links = [], children }: INavigation.IProps) => {
  const leftLinks = links.filter((x) => x.align === 'Start')
  const rightLinks = links.filter((x) => x.align === 'End')

  const brandStart = brand.align === 'Start'
  const brandCenter = brand.align === 'Center'
  const brandEnd = brand.align === 'End'

  /**
   * Render nav list sub components
   *
   * @param {Array} links
   * An array of links
   *
   * @param {String} align
   * Where to render the list
   */
  const renderList = (links: INavigation.IProps['links'], align: INavigation.IListProps['align']) =>
    links.length > 0 && (
      <NavigationList align={align}>
        {links.map((x: any) => (
          <NavigationItem key={`navItem-${x.text}`} active={x.active}>
            <NavigationLink {...x}>{x.text}</NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
    )

  return (
    <nav className={cx(className, 'nav', brandAlignClasses[brand.align])} style={style}>
      {brandStart && <NavigationBrand {...brand} />}
      {brandEnd && <NavigationToggle />}
      {renderList(leftLinks, 'Start')}

      {brandCenter && <NavigationBrand {...brand} />}

      {renderList(rightLinks, 'End')}
      {brandEnd && <NavigationBrand {...brand} />}
      {(brandStart || brandCenter) && <NavigationToggle />}

      {children}
    </nav>
  )
}

export default Navigation
