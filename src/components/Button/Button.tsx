import * as React from 'react'
import cx from 'classnames'

// Styles
import './Button.scss'

const Button: React.FunctionComponent<Button.IProps> = (props) => {
  const { className, href, type, submit, children, onClick } = props
  const Tag: any = href ? 'a' : 'button'

  const btnClasses: Button.IClasses = {
    Primary: 'btn--primary',
    Secondary: 'btn--secondary',
    Tertiary: 'btn--tertiary',
    Action: 'btn--action'
  }

  return (
    <Tag className={cx(className, 'btn', btnClasses[type])} type={submit ? 'submit' : 'button'} onClick={onClick}>
      {children}
    </Tag>
  )
}

export default Button
