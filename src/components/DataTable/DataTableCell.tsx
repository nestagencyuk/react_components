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
  if (props.tableType === 'standard') {
    return (
      <Text className="p--sm " variant="P">
        {JSON.stringify(props.value || '')
          .replace(/['"]+/g, '')
          .replace(/\W+/g, ' ')
          .replace('null', '')}
      </Text>
    )
  } else {
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
            {props.value?.substring(0, 80)}...
          </Text>
        )
    }
  }
}

/**
 * Render a table cell
 */
const DataTableCell: React.FC<IDataTable.ICellProps> = ({ id, config, tableType }) => {
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
          tableType={tableType}
        />
      </td>
    ),
    [value, config]
  )
}

export default DataTableCell
