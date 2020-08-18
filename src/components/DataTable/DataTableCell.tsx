import { IField } from '../Field/types'
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
      return <Select multiVariant="Tags" {...props} />
    case 'Text':
    case 'Number':
      return <Input {...props} />
    default:
      return (
        <Text className="p--sm" variant="P">
          {props.value?.length > 80 ? `${props.value.substring(0, 80)}...` : props.value}
        </Text>
      )
  }
}

/**
 * Render a table cell
 */
const DataTableCell: React.FC<IDataTable.ICellProps> = ({ id, config }) => {
  const { value, handleChange } = useField({ id })
  const castType = capitalise(config.type) as IField.IProps['type']

  return React.useMemo(
    () => (
      <td className="datatable__cell" tabIndex={-1}>
        <DataTableCellPicker
          className="w--100 datatable__input"
          {...config}
          value={value}
          type={castType}
          disabled={config.locked}
          tabIndex={config.ignoreTab ? -1 : 0}
          onChange={handleChange}
        />
      </td>
    ),
    [value, config]
  )
}

export default DataTableCell
