import { ISelect } from './types'
import * as React from 'react'

/**
 * Render a filtered list or the original list of options
 */
const SelectOptions = ({ open, options, optional, handleClick }: ISelect.IOptionsProps) => (
  <ul className='select__options' style={{ display: open ? 'block' : 'none' }}>
    {optional && (
      <li className='select__option' value='' onClick={() => handleClick(null)}>
          -- Select --
      </li>
    )}

    {options.map((x: any, i: number) => (
      <li key={`option-${i}`} className='select__option' onClick={() => handleClick(x.label)}>
        {x.label}
      </li>
    ))}
  </ul>
)

export default SelectOptions
