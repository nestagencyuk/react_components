import INavigation from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link } from 'react-router-dom'

/**
 * Display a logo as a clickable link
 */
const NavigationBrand = ({ className, img = {}, href = '/' }: INavigation.IBrandProps) => (
  <Link className={cx(className, 'nav__brand')} to={href}>
    <img className={cx('nav__img')} src={img.src} />
  </Link>
)

export default NavigationBrand
