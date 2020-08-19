import { ISwitch } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Switch.scss'

/**
 * A checkbox
 */
const Switch: React.FC<ISwitch.IProps> = ({ className, id, name, value, disabled, onChange }) => (
  <span className={cx(className, 'switch', { 'switch--checked': value }, { 'switch--disabled': disabled })} data-testid={id}>
    <input
      className="switch__input"
      id={id}
      name={name}
      data-testid={`${id}-input`}
      type="checkbox"
      checked={value || false}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
    />
    <span className={cx('switch__icn', { 'switch__icn--checked': value })} />
  </span>
)

export default Switch
