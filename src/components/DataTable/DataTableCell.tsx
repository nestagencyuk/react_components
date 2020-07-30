import * as React from 'react'
import { IDataTable } from './types'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import CellPicker from './CellPicker'

/**
 * A datatable that displays table controls
 */
const DataTableCell: React.FC<IDataTable.ICellProps> = ({
  sendToEndpoint,
  sendOnWait,
  sendOnBlur,
  sendOnChange,
  sendOnTrigger,
  sendMethod,
  name,
  onChange,
  value,
  ...props
}) => {
  // const [cellState, setCellState] = useState(props.value)

  const handleBlur = () => {
    if (sendOnBlur && sendToEndpoint) {
      sendRequest()
    }
  }

  const sendRequest = () => {
    // console.log({
    //   value: value,
    //   method: sendMethod,
    //   sendToEndpoint: `${sendToEndpoint}${value}`
    // })
  }

  const handleRequest = () => {
    if (sendOnChange) {
      sendRequest()
    }

    if (sendOnWait) {
      sendRequest()
    }
  }

  const handleChange = (val: any) => {
    onChange(val)

    if (sendToEndpoint) {
      handleRequest()
    }
  }

  return (
    <td className="datatable-body__cell" onBlur={handleBlur}>
      <CellPicker
        {...props}
        value={value}
        filterable={props.searchable}
        disabled={props.disabled}
        onChange={handleChange}
        multi={props.multiple}
      />
    </td>
  )
}

export default DataTableCell
