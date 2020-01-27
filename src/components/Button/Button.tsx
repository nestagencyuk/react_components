import * as React from 'react'
import cx from 'classnames'
import IButton from './types'

/**
 * Styles
 */
import './Button.scss'

/**
 * Components
 */
import { Link as RouterLink } from 'react-router-dom'

/**
 * Button classes
 */
const btnClasses: IButton.IClasses = {
  Primary: 'btn--primary',
  Secondary: 'btn--secondary',
  Tertiary: 'btn--tertiary',
  Action: 'btn--action'
}

/**
 * A visual button that will also render as <a> if it has a href
 */
const Button: React.FC<IButton.IProps> = ({ className, href, type, submit, children, onClick }) => {
  const Tag: any = href ? RouterLink : 'button'
  const btnType = submit ? 'submit' : !href ? 'button' : undefined

  return (
    <Tag className={cx(className, 'btn', btnClasses[type])} type={btnType} to={href} onClick={onClick}>
      {children}
    </Tag>
  )
}

export default Button
