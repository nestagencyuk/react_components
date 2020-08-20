import { IField } from '../Field/types'
import { IDataTable } from './types'
import * as React from 'react'
import { useEffect, useMemo } from 'react'
import { useFocus } from '../../hooks/useFocus'
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
          .replace('null', '')
          .substring(0, 80)}
      </Text>
    )
  }

  switch (props.type) {
    case 'Select':
    case 'Search':
      return <Select multiVariant="Tags" {...props} />
    case 'Text':
    case 'Number':
      return <Input {...props} />
    default:
      return (
        <Text className="p--sm" variant="P" muted={props.disabled}>
          {props.value?.length > 80 ? `${props.value.substring(0, 80)}...` : props.value}
        </Text>
      )
  }
}

/**
 * Render a table cell
 */
const DataTableCell: React.FC<IDataTable.ICellProps> = ({ id, config, tableType, onEvent = () => {} }) => {
  const { value, handleChange } = useField({ id })
  const [, onFocus, onBlurCB] = useFocus()
  const castType = config.type && (capitalise(config.type) as IField.IProps['type'])

  /**
   * Create payload
   */
  const payload = {
    id,
    sendOnBlur: config.sendOnBlur,
    sendOnChange: config.sendOnChange,
    sendOnWait: config.sendOnWait,
    sendToEndpoint: config.sendToEndpoint,
    sendMethod: config.sendMethod
  }

  /**
   * Send on trigger
   */
  useEffect(() => {
    if (config.sendOnTrigger) {
      onEvent({ type: 'CELL_TRIGGER', payload: { ...payload, data: value } })
    }
  }, [])

  return useMemo(
    () => (
      <td
        className="datatable__cell"
        tabIndex={-1}
        onFocus={onFocus}
        onBlur={(e) => onBlurCB(e, () => onEvent({ type: 'CELL_BLUR', payload: { ...payload, data: value } }))}
      >
        <DataTableCellPicker
          className="w--100 datatable__input"
          {...config}
          id={`${id}`}
          value={value}
          type={castType}
          disabled={config.locked || config.disabled}
          tabIndex={config.ignoreTab ? -1 : 0}
          tableType={tableType}
          onChange={(val: any) => {
            handleChange(val)
            onEvent({ type: 'CELL_CHANGE', payload: { ...payload, data: val } })
          }}
        />
      </td>
    ),
    [value, config]
  )
}

export default DataTableCell
