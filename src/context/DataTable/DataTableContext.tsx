import { createContext } from 'react'
import { IDataTable } from './types'

/**
 * Context for displaying something that opens
 */
const DataTableContext = createContext<IDataTable.IValue>({
  data: [],
  addRow: () => {},
  editRow: () => {},
  deleteRow: () => {},
  shapeData: () => []
})

export default DataTableContext
