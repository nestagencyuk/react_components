import ISelect from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/select.scss'

/**
 * Components
 */
import { Icon } from '../../components/Icon'

/**
 * My component
 */
const Select = ({ className, placeholder = '-- Select --', options = [], value, onChange }: ISelect.IProps) => (
  <span className={cx(className, 'select')}>
    <select className={cx(className, 'select__input')} value={value || ''} onChange={(e) => onChange(e.target.value)}>
      <option value={''} disabled>
        {placeholder}
      </option>
      {options.map((x) => (
        <option>{x.label}</option>
      ))}
    </select>

    <Icon className={cx('select__icn')} name={'chevron-down'} size={'Small'} colour={'Dark'} />
  </span>
)

export default Select
