import { INavigation } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Navigation Toggle
 */
const NavigationToggle = ({ toggled, onClick }: INavigation.IToggleProps) => (
  <button className="nav__toggle" onClick={() => onClick(!toggled)}>
    Toggle
    <Icon name={toggled ? 'cross' : 'hamburger'} />
  </button>
)

export default NavigationToggle
