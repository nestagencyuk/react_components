import { IMultiSelect } from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'
import { usePopper } from '../../hooks/usePopper'

/**
 * Components
 */
import { MultiSelectTags } from '.'
import { Checkbox } from '../Checkbox'
import { Icon } from '../Icon'
import { Flag } from '../Flag'

/**
 * Render a filtered list or the original list of options
 */
const MultiSelectOptions: React.FC<IMultiSelect.IOptionsProps> = ({
  id,
  trigger,
  values,
  options,
  filtered,
  variant,
  onClick
}) => {
  const [target, setTarget] = useState<HTMLUListElement>()
  const [styles, attributes] = usePopper({ align: 'Bottom', trigger, target })

  return (
    <ul
      ref={setTarget}
      className="multiselect__options animate animate--fade-in"
      data-testid={`${id}-options`}
      style={{ ...styles.popper, width: trigger?.clientWidth }}
      {...attributes.popper}
    >
      {values?.length > 0 && (
        <li className="multiselect__option multiselect__option--sticky">
          <button className="multiselect__option-btn multiselect__option-btn--clear" onClick={() => onClick(null)}>
            Clear selection <Icon name="Cross" size="Small" />
          </button>

          {variant === 'Tags' && <MultiSelectTags values={values} options={options} onClick={onClick} />}
        </li>
      )}

      {(variant === 'Tags' ? filtered.filter((x) => !values?.includes(x.value)) : filtered).map((x, i) => (
        <li key={`${x.value}-${i}`} className="multiselect__option">
          <button
            className={cx('multiselect__option-btn', { 'p--l-xxl': variant === 'Checkbox' })}
            title={x.label}
            type="button"
            disabled={x.disabled}
            data-value={x.value}
            onClick={() => onClick(x.value)}
          >
            {x.flag && <Flag className="m--r-xs" name={x.flag.name} />}
            {x.icon && <Icon className="m--r-xs" name={x.icon.name} />}

            {variant === 'Checkbox' && (
              <Checkbox
                className="multiselect__checkbox"
                id={x.label}
                value={values?.includes(x.value)}
                tabIndex={-1}
                onChange={() => {}}
              />
            )}

            {options.find((y) => y.value === x.value)?.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default MultiSelectOptions
