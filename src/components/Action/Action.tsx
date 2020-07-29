import * as React from 'react'
import cx from 'classnames'
import { IAction } from './types'

/**
 * Styles
 */
import './Action.scss'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Variants
 */
const variants = {
  Primary: 'action--primary',
  Secondary: 'action--secondary',
  Tertiary: 'action--tertiary',
  Inverse: 'action--inverse'
}

/**
 * Sizes
 */
const sizes = {
  XSmall: 'action--xs',
  Small: 'action--sm',
  Medium: 'action--md',
  Large: 'action--lg'
}

/**
 * A visual button that will also render as <a> if it has a href
 */
const Action: React.FC<IAction.IProps> = (
  {
    className,
    component,
    href,
    to,
    variant = 'Primary',
    size = 'Medium',
    type = 'button',
    icon,
    disabled,
    children,
    onFocus,
    onBlur,
    onClick
  },
  ref?: React.Ref<HTMLDivElement>
) => {
  const passRef = ref && (typeof ref === 'function' || Object.keys(ref).length > 0 ? { ref } : {})
  const Tag: React.FC<{ [key: string]: any }> | string = component || (href ? 'a' : 'button')

  return children ? (
    <Tag
      {...passRef}
      className={cx(className, 'action', variants[variant], sizes[size], {
        'action--disabled': disabled
      })}
      title={children}
      type={type}
      href={href}
      to={to}
      disabled={disabled}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <Icon className="action__icn" colour="Inherit" {...icon} />
      <span className="text--screen-reader">{children}</span>
    </Tag>
  ) : null
}

export default Action
