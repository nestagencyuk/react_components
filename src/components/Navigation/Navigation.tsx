import { INavigation } from './types'
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
const Navigation = ({ className, brand, links = [] }: INavigation.IProps) => {
  const [toggled, setToggled] = useState(false)
  const startLinks = links.filter((x) => x.align === 'Start')
  const centerLinks = links.filter((x) => x.align === 'Center')
  const endLinks = links.filter((x) => x.align === 'End')

  /**
   * Brand alignment
   */
  const brandStart = brand?.align === 'Start'
  const brandCenter = brand?.align === 'Center'
  const brandEnd = brand?.align === 'End'

  return (
    <nav className={cx(className, 'nav', brandAlignment[brand?.align], { 'nav--open': toggled })}>
      <div className="nav__bar">
        {brandStart && <NavigationBrand {...brand} />}
        <NavigationToggle toggled={toggled} onClick={setToggled} />
        {(brandCenter || brandEnd) && <NavigationBrand {...brand} />}
      </div>
      <div className="nav__lists">
        <NavigationList align={'Start'} items={startLinks} />
        <NavigationList align={'Center'} items={centerLinks} />
        <NavigationList align={'End'} items={endLinks} />
      </div>
    </nav>
  )
}

export default Navigation
