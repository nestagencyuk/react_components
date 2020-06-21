import { ISelect } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Checkbox } from '../Checkbox'

/**
 * Render a filtered list or the original list of options
 */
const SelectOptions: React.FC<ISelect.IOptionsProps> = ({ open, values, options, multi, optional, onClick }) => (
  <ul className="select__options" style={{ display: open ? 'block' : 'none' }}>
    {optional && (
      <li className="select__option">
        <button className="select__btn" onClick={() => onClick(null)}>
          -- Select --
        </button>
      </li>
    )}

    {options.map((x) => (
      <li key={x.value} className="select__option">
        <button className={cx('select__btn', { 'p--l-xxl': multi })} title={x.label} onClick={() => onClick(x.value)}>

          {multi && <Checkbox
            className="select__checkbox"
            id={x.label}
            value={values?.includes(x.value)}
            onChange={() => {}}
          />}

          {options.find((y) => y.value === x.value)?.label}
        </button>
      </li>
    ))}
  </ul>
)

export default SelectOptions
