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
  to,
  variant = 'Primary',
  size = 'Medium',
  icon,
  submit,
  disabled,
  children,
  onClick
}: IButton.IProps) => {
  const Tag: React.FC<{ [key: string]: any }> | string = component || (href ? 'a' : 'button')

  /**
   * Icon alignment
   */
  const iconStart = icon?.align === 'Start'
  const iconEnd = icon?.align === 'End'

  return children ? (
    <Tag
      className={cx(className, 'btn', variants[variant], sizes[size], { 'btn--disabled': disabled })}
      type={submit ? 'submit' : !href ? 'button' : undefined}
      href={href}
      to={to}
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
