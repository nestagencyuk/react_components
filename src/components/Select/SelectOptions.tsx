import { ISelect } from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'
import { usePopper } from '../../hooks/usePopper'

/**
 * Components
 */
import { Icon } from '../Icon'
import { Flag } from '../Flag'

/**
 * Render a filtered list or the original list of options
 */
const SelectOptions: React.FC<ISelect.IOptionsProps> = ({ id, trigger, options, filtered, optional, onClick }) => {
  const [target, setTarget] = useState<HTMLUListElement>()
  const [styles, attributes] = usePopper({ align: 'Bottom', trigger, target })

  return (
    <ul
      ref={setTarget}
      className="select__options animate animate--fade-in"
      data-testid={`${id}-options`}
      style={{ ...styles.popper, width: trigger?.clientWidth }}
      {...attributes.popper}
    >
      {optional && (
        <li className="select__option">
          <button className="select__option-btn" onClick={() => onClick(null)}>
            -- Select --
          </button>
        </li>
      )}

      {filtered.map((x, i) => (
        <li key={`${x.value}-${i}`} className="select__option">
          <button
            className={cx('select__option-btn')}
            title={x.label}
            type="button"
            disabled={x.disabled}
            data-value={x.value}
            onClick={() => onClick(x.value)}
          >
            {x.flag && <Flag className="m--r-xs" name={x.flag.name} />}
            {x.icon && <Icon className="m--r-xs" name={x.icon.name} />}

            {options.find((y) => y.value === x.value)?.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default SelectOptions
