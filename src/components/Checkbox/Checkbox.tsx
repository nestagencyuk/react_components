import { ICheckbox } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/checkbox.scss'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * A checkbox
 */
const Checkbox: React.FC<ICheckbox.IProps> = ({ className, id, name, value, disabled, onChange }) => (
  <label
    className={cx(className, 'checkbox', { 'checkbox--checked': value }, { 'checkbox--disabled': disabled })}
    data-testid={id}
  >
    <input
      className={cx('checkbox__input')}
      id={id}
      name={name}
      data-testid={`${id}-input`}
      type="checkbox"
      checked={value || false}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
    />
    <Icon className={cx('checkbox__icn', { 'checkbox__icn--checked': value })} name="Tick" colour="Dark" />
  </label>
)

export default Checkbox
