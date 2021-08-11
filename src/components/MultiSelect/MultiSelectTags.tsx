import * as React from 'react'

/**
 * Components
 */
import { Tag } from '../Tag'

/**
 * Render a list of clickable Tags
 */
const MultiSelectTags = ({ values, options, onClick }: any) =>
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

export default MultiSelectTags
