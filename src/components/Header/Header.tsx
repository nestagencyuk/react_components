import IHeader from './types'
import * as React from 'react'
import * as cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/header.scss'

/**
 * Components
 */
import { Text } from '../Text'

/**
 * Header classes
 */
const headerClasses: any = {
  Fixed: 'header--fixed'
}

/**
 * A simple header component with a heading and subheading
 */
const Header = ({ className, type, heading, subheading, children }: IHeader.IProps) => (
  <header className={cx(className, 'header', headerClasses[type])}>
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
