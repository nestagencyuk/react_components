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
const sizes: any = {
  Small: {
    heading: 'Intro',
    subheading: 'Small'
  },
  Medium: {
    heading: 'Epsilon',
    subheading: 'Intro'
  },
  Large: {
    heading: 'Gamma',
    subheading: 'Intro'
  }
}

/**
 * A simple header component with a heading and subheading
 */
const Header: React.FC<IHeader.IProps> = ({ className, size = 'Medium', heading, subheading }) => (
  <header className={cx(className, 'header')}>
    <Text tag="h2" variant={sizes[size].heading} className="text--bold">
      {heading}
    </Text>

    <Text tag="h3" variant={sizes[size].subheading}>
      {subheading}
    </Text>
  </header>
)

export default Header
