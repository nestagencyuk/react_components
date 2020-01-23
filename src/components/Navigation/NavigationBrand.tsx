import * as React from 'react'
import cx from 'classnames'
import Navigation from './types'

/**
 * Display a logo as a clickable link
 */
const NavigationBrand: React.FC<Navigation.IBrandProps> = ({ className, img }) => (
  <a className={cx(className, 'nav__brand')}>
    <img className={cx('nav__img')} src={img} />
  </a>
)

export default NavigationBrand
