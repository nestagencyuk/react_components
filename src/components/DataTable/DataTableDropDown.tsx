import { IDataTable } from './types'
import * as React from 'react'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * A datatable that displays table controls
 */
const DataTableDropDown: React.FC<IDataTable.IDataTableDropDownProps> = ({ children }) => {
  return <div className="datatable__drop-down">{children}</div>
}

export default DataTableDropDown
