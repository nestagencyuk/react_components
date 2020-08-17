import { ISelect } from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'
import { usePopper } from '../../hooks/usePopper'

/**
 * Components
 */
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Checkbox } from '../Checkbox'
import { Tag } from '../Tag'

/**
 * Tags
 */
const SelectTags = ({ values, options, onClick }: any) =>
  values.map((x: any, i: any) => (
    <Tag
      key={`tag-${i}`}
      className="select__tag"
      onClick={(e) => {
        e.preventDefault()
        onClick(x)
      }}
    >
      {options.find((y: any) => y.value === x)?.label}
    </Tag>
  ))

/**
 * Render a filtered list or the original list of options
 */
const SelectOptions: React.FC<ISelect.IOptionsProps> = ({
  id,
  trigger,
  open,
  values,
  options,
  filtered,
  multi,
  multiVariant,
  optional,
  onClick
}) => {
  const [target, setTarget] = useState<any>()
  const [styles, attributes] = usePopper({ align: 'Bottom', trigger, target })

  return (
    <ul
      ref={setTarget}
      className="select__options animate animate--fade-in"
      data-testid={`${id}-options`}
      style={{ ...styles.popper, width: trigger?.clientWidth }}
      {...attributes.popper}
    >
      {multi && values?.length > 0 && (
        <li className="select__option select__option--sticky">
          <button className="select__option-btn select__option-btn--clear" onClick={() => onClick(null)}>
            Clear selection <Icon name="Cross" size="Small" />
          </button>

          {multiVariant === 'Tags' && <SelectTags values={values} options={options} onClick={onClick} />}
        </li>
      )}

      {optional && (
        <li className="select__option">
          <button className="select__option-btn" onClick={() => onClick(null)}>
            -- Select --
          </button>
        </li>
      )}

      {(multi && multiVariant === 'Tags' ? filtered.filter((x) => !values?.includes(x.value)) : filtered).map((x, i) => (
        <li key={x.value} className="select__option">
          <button
            className={cx('select__option-btn', { 'p--l-xxl': multi && multiVariant === 'Checkbox' })}
            title={x.label}
            type="button"
            disabled={x.disabled}
            data-value={x.value}
            onClick={() => onClick(x.value)}
          >
            {multi && multiVariant === 'Checkbox' && (
              <Checkbox
                className="select__checkbox"
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

export default SelectOptions
