import { ISelect } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Checkbox } from '../Checkbox'
import { Tag } from '../Tag'

/**
 * Tags
 */
const SelectTags = ({ values, options, onClick }: any) =>
  values.map((x: any, i: any) => (
    <Tag
      key={`tag-${i}`}
      className="m--xs"
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
  open,
  values,
  options,
  filtered,
  multi,
  multiVariant,
  optional,
  onClick
}) => (
  <ul className="select__options" data-testid={`${id}-options`} style={{ display: open ? 'block' : 'none' }}>
    {multiVariant === 'Tags' && values && (
      <li className="select__option select__option--sticky">
        <SelectTags values={values} options={options} onClick={onClick} />
      </li>
    )}

    {optional && (
      <li className="select__option">
        <button className="select__option-btn" onClick={() => onClick(null)}>
          -- Select --
        </button>
      </li>
    )}

    {(multiVariant === 'Tags' ? filtered.filter((x) => !values?.includes(x.value)) : filtered).map((x) => (
      <li key={x.value} className="select__option">
        <button
          className={cx('select__option-btn', { 'p--l-xxl': multi && multiVariant === 'Checkbox' })}
          title={x.label}
          type="button"
          disabled={x.disabled}
          data-value={x.value}
          tabIndex={-1}
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

export default SelectOptions
