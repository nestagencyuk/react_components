import { IField } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { Select } from '../Select'
import { Textarea } from '../Textarea'
import { DatePicker } from '../DatePicker'

/**
 * Field picker
 */
const FieldPicker: React.FC<IField.IProps> = ({ type = 'Text', ...props }) => {
  switch (type) {
    case 'Select':
      return <Select {...props} />
    case 'Checkbox':
      return <Checkbox {...props} />
    case 'Radio':
      return <Radio {...props} />
    case 'Textarea':
      return <Textarea {...props} />
    case 'DatePicker':
      return <DatePicker {...props} />
    default:
      return <Input type={type} {...props} />
  }
}

export default FieldPicker
