import * as React from 'react'
import { useState } from 'react'
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
const DataTableCell: React.FC<IDataTable.ICell> = ({ ...props }) => {
  const [cellState, setCellState] = useState(props.value || props.responseDisplay || props.responseValue)

  return (
    <td className="datatable-body__cell">
      <CellPicker onChange={setCellState} value={cellState} {...props} />
    </td>
  )
}

export default DataTableCell
