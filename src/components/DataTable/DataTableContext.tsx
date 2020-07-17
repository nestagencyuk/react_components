import * as React from 'react'
import { IDataTable } from './types'

/**
 * Initialise context
 */
export const DataTableContext = React.createContext<any>({
  config: {}
})

const DataTable: React.FC<IDataTable.IProps> = ({ children, config }) => {
  return (
    <DataTableContext.Provider value={{ config }}>
      <DataTableContext.Consumer>{children}</DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTable
