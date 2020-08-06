import { createContext } from 'react'
import { IDataTable } from './types'

/**
 * Context for displaying something that opens
 */
const DataTableContext = createContext<IDataTable.IValue>({
  rows: [],
  addRow: () => {},
  editRow: () => {},
  deleteRow: () => {},
  handleSubmit: () => {}
})

export default DataTableContext
