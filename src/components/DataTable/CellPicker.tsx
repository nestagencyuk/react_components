import * as React from 'react'
import { capitalise } from '@nestagencyuk/typescript_lib-frontend'

/**
 * Components
 */
import { Input } from '../Input'
import { Select } from '../Select'
import { Text } from '../Text'
import { IDataTable } from './types'

/**
 * Field picker
 */
const CellPicker: React.FC<any> = (props) => {
  switch (props.type) {
    case 'select':
      return <Select {...props} />
    case 'search':
      return <Select {...props} filterable />
    case 'string':
      return <Text variant="P" children={props.value} />
    case 'text':
      return <Input type="Text" {...props} />
    case 'number':
      return <Input {...props} type={capitalise(props.type)} />
    default:
      return <Input {...props} />
  }
}

export default CellPicker
