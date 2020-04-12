import { IHeader } from './types'
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
 * A simple header component with a heading and subheading
 */
const Header = ({ className, heading, subheading }: IHeader.IProps) => (
  <header className={cx(className, 'header')}>
    <Text tag={'h2'} type={'Gamma'}>
      {heading}
    </Text>

    <Text tag={'h3'} type={'Intro'}>
      {subheading}
    </Text>
  </header>
)

export default Header
