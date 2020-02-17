import IButton from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/button.scss'

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
const Button = ({ className, href, type, submit, children, onClick }: IButton.IProps) => {
  const Tag: any = href ? RouterLink : 'button'
  const btnType = submit ? 'submit' : !href ? 'button' : undefined

  return (
    <Tag className={cx(className, 'btn', btnClasses[type])} type={btnType} to={href} onClick={onClick}>
      {children}
    </Tag>
  )
}

export default Button
