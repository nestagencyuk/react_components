import { IField } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { Select } from '../Select'

/**
 * Field picker
 */
const FieldPicker = ({ type, ...props }: IField.IProps) => {
  if (typeof type === 'object') {
    return type
  }

  switch (type) {
    case 'Select':
      return <Select {...props} />
    case 'Checkbox':
      return <Checkbox {...props} />
    case 'Radio':
      return <Radio {...props} />
    default:
      return <Input type={type} {...props} />
  }
}

export default FieldPicker
