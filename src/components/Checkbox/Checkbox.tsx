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
const Checkbox = ({ className, id, name, value, disabled, onChange }: ICheckbox.IProps) => (
  <label className={cx(className, 'checkbox', { 'checkbox--checked': value }, { 'checkbox--disabled': disabled })}>
    <input
      className={cx('checkbox__input')}
      id={id}
      name={name}
      type="checkbox"
      checked={value || false}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        onChange(e.target.checked)
      }}
    />
    <Icon className={cx('checkbox__icn', { 'checkbox__icn--checked': value })} name="Tick" colour="Light" size="Small" />
  </label>
)

export default Checkbox
