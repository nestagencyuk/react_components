import { IButton } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/button.scss'

/**
 * Components
 */
import { Icon } from '../Icon'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Variants
 */
const variants = {
  Primary: 'btn--primary',
  Secondary: 'btn--secondary',
  Tertiary: 'btn--tertiary',
  Action: 'btn--action'
}

/**
 * Icon alignments
 */
const iconAlignment = {
  Start: 'btn--start',
  End: 'btn--end'
}

/**
 * A visual button that will also render as <a> if it has a href
 */
const Button = ({
  className,
  component,
  href,
  variant = 'Primary',
  icon,
  submit,
  disabled,
  children,
  onClick
}: IButton.IProps) => {
  const Tag = component || (href ? RouterLink : 'button')
  const btnType = submit ? 'submit' : !href ? 'button' : undefined

  /**
   * Icon alignment
   */
  const iconStart = icon?.align === 'Start'
  const iconEnd = icon?.align === 'End'

  return (
    <Tag
      className={cx(className, 'btn', variants[variant], iconAlignment[icon?.align])}
      type={btnType}
      to={href}
      disabled={disabled}
      onClick={onClick}
    >
      {iconStart && <Icon className='btn__icn' {...icon} />}
      {children}
      {iconEnd && <Icon className='btn__icn' {...icon} />}
    </Tag>
  )
}

export default Button
