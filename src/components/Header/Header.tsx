import * as React from 'react'
import * as cx from 'classnames'
import Header from './types'

/**
 * Styles
 */
import './Header.scss'

/**
 * Components
 */
import { Text } from '@components/Text'

/**
 * A simple header component with a heading and subheading
 */
const Header: React.FC<Header.IProps> = ({ className, heading, subheading, children }) => (
  <header className={cx(className, 'header')}>
    {heading && (
      <Text tag={'h1'} type={'Alpha'}>
        {heading}
      </Text>
    )}
    {subheading && (
      <Text tag={'h2'} type={'Beta'}>
        {subheading}
      </Text>
    )}
    {children}
  </header>
)

export default Header
