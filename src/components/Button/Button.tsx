import { IButton } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Button.scss'

/**
 * Components
 */
import { ButtonIcon } from '.'

/**
 * Variants
 */
const variants = {
  Primary: 'btn--primary',
  Secondary: 'btn--secondary',
  Tertiary: 'btn--tertiary',
  Inverse: 'btn--inverse',
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
  type = 'button',
  disabled,
  children,
  onClick,
  onBlur
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
      type={type}
      href={href}
      to={to}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
    >
      {iconStart && <ButtonIcon {...icon} />}
      <span>{children}</span>
      {iconEnd && <ButtonIcon {...icon} />}
    </Tag>
  ) : null
}

export default Button
