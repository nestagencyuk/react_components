import { INavigation } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Image } from '../Image'

/**
 * Display a logo as a clickable link
 */
const NavigationBrand = ({ image, href = '/' }: INavigation.IBrandProps) => (
  <a className={'nav__brand'} href={href}>
    <Image className={'nav__img'} aspect="1x1" src={image.src} alt={image.alt} />
  </a>
)

export default NavigationBrand
