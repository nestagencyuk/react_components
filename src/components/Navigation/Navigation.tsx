import INavigation from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/navigation.scss'

/**
 * Components
 */
import { NavigationToggle, NavigationBrand, NavigationList } from '.'

/**
 * Brand align styles
 */
const brandAlignment = {
  Start: 'nav--b-s',
  Center: 'nav--b-c',
  End: 'nav--b-e'
}

/**
 * A simple, single level navigation component, allowing for lists to be positioned left,
 * right, or centrally.
 */
const Navigation = ({ className, style, brand, links = [], children }: INavigation.IProps) => {
  const [open, setOpen] = useState(false)
  const startLinks = links.filter((x) => x.align === 'Start')
  const endLinks = links.filter((x) => x.align === 'End')

  /**
   * Brand positions
   */
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
  const renderList = (links: INavigation.IProps['links'], align: INavigation.IListProps['align']) => (
    <NavigationList align={align} items={links} />
  )

  return (
    <nav className={cx(className, 'nav', brandAlignment[brand?.align], { 'nav--open': open })} style={style}>
      <div className='nav__bar'>
        {brandStart && <NavigationBrand {...brand} />}
        <NavigationToggle open={open} onClick={setOpen} />
        {(brandCenter || brandEnd) && <NavigationBrand {...brand} />}
      </div>
      <div className='nav__lists'>
        {renderList(startLinks, 'Start')}
        {renderList(endLinks, 'End')}
        {children}
      </div>
    </nav>
  )
}

export default Navigation
