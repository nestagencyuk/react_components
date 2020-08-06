import { IDataTable } from './types'
import * as React from 'react'
import { capitalise } from '@nestagencyuk/typescript_lib-frontend'
import { useField } from '@nestagencyuk/react_form-factory'

/**
 * Components
 */
import { Input } from '../Input'
import { Select } from '../Select'
import { Text } from '../Text'

/**
 * Pick an input to render
 */
const DataTableCellPicker: React.FC<any> = (props) => {
  switch (props.type) {
    case 'Select':
    case 'Search':
      return <Select {...props} />
    case 'Text':
    case 'Number':
      return <Input {...props} />
    default:
      return <Text variant="P">{props.value}</Text>
  }
}

/**
 * Render a table cell
 */
const DataTableCell: React.FC<IDataTable.ICellProps> = ({ id, config }) => {
  const { value, handleChange } = useField({ id })

  return (
    <td className="datatable__cell">
      <DataTableCellPicker
        {...config}
        value={value}
        type={capitalise(config.type)}
        disabled={config.locked}
        onChange={handleChange}
      />
    </td>
  )
}

export default DataTableCell
