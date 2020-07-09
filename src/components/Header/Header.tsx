import { IHeader } from './types'
import * as React from 'react'
import * as cx from 'classnames'

/**
 * Styles
 */
import './Header.scss'

/**
 * Components
 */
import { Text } from '../Text'

/**
 * Sizes
 */
const sizes: IHeader.Sizes = {
  Small: {
    heading: 'P',
    subheading: 'Small'
  },
  Medium: {
    heading: 'Intro',
    subheading: 'Intro'
  },
  Large: {
    heading: 'Epsilon',
    subheading: 'Intro'
  }
}

/**
 * A simple header component with a heading and subheading
 */
const Header: React.FC<IHeader.IProps> = ({ className, size = 'Medium', heading, subheading }) => (
  <header className={cx(className, 'header')}>
    <Text className='text--medium' tag='h2' variant={sizes[size].heading}>
      {heading}
    </Text>

    <Text tag='h3' variant={sizes[size].subheading}>
      {subheading}
    </Text>
  </header>
)

export default Header
