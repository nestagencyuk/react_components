import * as React from 'react'

/**
 * Components
 */
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Radio } from '../Radio'
import { Select } from '../Select'
import { Textarea } from '../Textarea'
import { Text } from '../Text'

/**
 * Field picker
 */
const CellPicker: React.FC<any> = ({ readOnly, ...props }) => {
  switch (props.type) {
    case 'select':
      return <Select {...props} disabled={readOnly} />
    case 'search':
      return <Select {...props} filterable disabled={readOnly} />
    case 'string':
      return <Text variant="P" children={props.value} />
    case 'text':
      return <Input type="Text" {...props} />
    case 'number':
      return <Input type="Number" {...props} />
    default:
      return <Text variant="P" children={props.value || props.displayValue || props.responseDisplay} />
  }
}

export default CellPicker
