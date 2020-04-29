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
 * Sizes
 */
const sizes = {
  Small: 'btn--sm',
  Medium: 'btn--md',
  Large: 'btn--lg'
}

/**
 * A visual button that will also render as <a> if it has a href
 */
const Button = ({
  className,
  component,
  href,
  variant = 'Primary',
  size = 'Medium',
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

  return children ? (
    <Tag
      className={cx(className, 'btn', variants[variant], sizes[size], { 'btn--disabled': disabled })}
      type={btnType}
      to={href}
      disabled={disabled}
      onClick={onClick}
    >
      {iconStart && <Icon className="btn__icn" {...icon} />}
      <span>{children}</span>
      {iconEnd && <Icon className="btn__icn" {...icon} />}
    </Tag>
  ) : null
}

export default Button
