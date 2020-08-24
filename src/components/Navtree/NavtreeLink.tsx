import { INavtree } from './types'
import * as React from 'react'
import { forwardRef } from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Variant
 */
const variants = {
  Primary: 'navtree__link--primary',
  ExpandX: 'navtree__link--expand-x',
  ExpandY: 'navtree__link--expand-y'
}

/**
 * A Navtree link
 */
const NavtreeLink: React.FC<INavtree.ILinkProps> = (
  {
    className,
    variant = 'Primary',
    component,
    href,
    to,
    target,
    active,
    external,
    icon,
    children,
    onMouseEnter,
    onMouseLeave,
    onClick
  },
  ref: React.Ref<HTMLButtonElement>
) => {
  const Tag: React.FC<{ [key: string]: any }> | string = component || (onClick ? 'button' : 'a')

  return (
    <Tag
      className={cx(
        className,
        'navtree__link',
        variants[variant],
        { 'navtree__link--active': active },
        { 'navtree__link--back': children === 'Back' }
      )}
      ref={ref}
      href={href}
      to={to}
      target={target}
      rel={external ? 'noopener' : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {icon && <Icon className="navtree__icn" {...icon} size={icon.size || 'Large'} />}
      <span className="navtree__link-text">{children}</span>
      {(variant === 'ExpandX' || variant === 'ExpandY') && (
        <Icon
          className="navtree__icn navtree__icn--expand"
          size="Small"
          name={variant === 'ExpandX' ? 'Chevron-right' : 'Chevron-down'}
        />
      )}
    </Tag>
  )
}

export default forwardRef(
  NavtreeLink as (props: INavtree.ILinkProps & { ref?: React.Ref<HTMLButtonElement> }) => React.ReactElement
)
