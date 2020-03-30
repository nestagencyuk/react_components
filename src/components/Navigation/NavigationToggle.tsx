import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Navigation Toggle
 */
const NavigationToggle = ({ open, onClick }: any) => (
  <button className={cx('nav__toggle')} onClick={() => onClick(!open)}>
    Toggle
    <Icon name={open ? 'cross' : 'hamburger'} />
  </button>
)

export default NavigationToggle
