import { ISelect } from './types'
import * as React from 'react'
import { useRef, createRef, useEffect, useState } from 'react'
import cx from 'classnames'
import { usePopper } from '../../hooks/usePopper'

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
  triggerRef,
  open,
  values,
  cursor,
  options,
  filtered,
  multi,
  multiVariant,
  optional,
  onClick
}) => {
  const refs = useRef<Array<React.RefObject<HTMLButtonElement>>>(
    Array.from(Array(filtered?.length).keys()).map(() => createRef())
  )

  const [targetRef, setTarget] = useState<any>()
  const [length, setLength] = useState(filtered.length)
  const [styles, attributes] = usePopper({ align: 'Bottom', triggerRef, targetRef })

  /**
   * Listen to the cursor index
   */
  useEffect(() => {
    if (!refs.current[cursor]) return
    refs.current[cursor].current.focus()
  }, [cursor])

  /**
   * Add new items to refs
   */
  useEffect(() => {
    if (length === filtered.length) return
    setLength(filtered.length)
    refs.current = refs.current.splice(0, filtered.length)
    for (let i = 0; i < filtered.length; i++) {
      refs.current[i] = refs.current[i] || createRef()
    }
    refs.current = refs.current.map((item) => item || createRef())
  }, [filtered])

  return (
    <ul
      ref={setTarget}
      className="select__options animate animate--fade-in"
      data-testid={`${id}-options`}
      style={{ ...styles.popper, width: triggerRef?.current?.clientWidth }}
      {...attributes.popper}
    >
      {multi && multiVariant === 'Tags' && values && (
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

      {(multi && multiVariant === 'Tags' ? filtered.filter((x) => !values?.includes(x.value)) : filtered).map((x, i) => (
        <li key={x.value} className="select__option">
          <button
            ref={refs.current[i]}
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
}

export default SelectOptions
