import { INavbar } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Image } from '../Image'

/**
 * Display a logo as a clickable link
 */
const NavbarBrand: React.FC<INavbar.IBrandProps> = ({ image, href = '/' }) => (
  <a className='navbar__brand' href={href}>
    <Image className='navbar__img' {...image} />
  </a>
)

export default NavbarBrand
