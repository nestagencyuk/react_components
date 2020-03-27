import ISelect from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Render a filtered list or the original list of options
 */
const SelectOptions = ({ open, options, optional, handleClick }: ISelect.IOptionsProps) => {
  return (
    <ul className={cx('select__options')} style={{ display: open ? 'block' : 'none' }}>
      {optional && <li className={cx('select__option')} value={''} onClick={() => handleClick(null)}>
        -- Select --
      </li>}

      {options.map((x: any) => (
        <li key={`option-${x.value}`} className={cx('select__option')} onClick={() => handleClick(x.label)}>
          {x.label}
        </li>
      ))}
    </ul>
  )
}

export default SelectOptions
