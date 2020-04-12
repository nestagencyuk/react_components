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
 * Types
 */
const types = {
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
const Button = ({ className, href, type, icon, submit, children, onClick }: IButton.IProps) => {
  const Tag = href ? RouterLink : 'button'
  const btnType = submit ? 'submit' : !href ? 'button' : undefined

  return (
    <Tag className={cx(className, 'btn', types[type], iconAlignment[icon?.align])} type={btnType} to={href} onClick={onClick}>
      {icon?.align === 'Start' && <Icon className={'btn__icn'} {...icon} />}
      {children}
      {icon?.align === 'End' && <Icon className={'btn__icn'} {...icon} />}
    </Tag>
  )
}

export default Button
