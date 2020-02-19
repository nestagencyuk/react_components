import ISelect from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/select.scss'

/**
 * My component
 */
const Select = ({ className, placeholder = '-- Select --', options = [] }: ISelect.IProps) => (
  <span className={cx(className, 'select')}>
    <select className={cx(className, 'select__input')}>
      <option>{placeholder}</option>
      {options.map((x) => (
        <option>{x.label}</option>
      ))}
    </select>
    <span className={'select__icn'}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
        <title>chevron-down</title>
        <path d="M6,8.72.51,5.06A.87.87,0,0,1,.27,3.85a.88.88,0,0,1,1.22-.24L6,6.61l4.51-3a.88.88,0,0,1,1.22.24.87.87,0,0,1-.24,1.21Z" />
      </svg>
    </span>
  </span>
)

export default Select
