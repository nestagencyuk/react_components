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
const NavigationBrand = ({ img = {}, href = '/' }: INavigation.IBrandProps) => (
  <Link className={'nav__brand'} to={href}>
    <img className={'nav__img'} src={img.src} />
  </Link>
)

export default NavigationBrand
