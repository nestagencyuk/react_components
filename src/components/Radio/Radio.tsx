import { IRadio } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/radio.scss'

/**
 * A Radio button
 */
const Radio = ({ className, id, name, value, onChange }: IRadio.IProps) => (
  <label className={cx(className, 'radio', { 'radio--checked': value })}>
    <input
      className={cx('radio__input')}
      id={id}
      name={name}
      type='radio'
      checked={value || false}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
    />
    <span className={cx('radio__icn', { 'radio__icn--checked': value })} />
  </label>
)

export default Radio
