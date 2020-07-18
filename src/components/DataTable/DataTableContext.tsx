import * as React from 'react'
import { useState, useEffect } from 'react'
import { IDataTable } from './types'
import { useToggleGroup } from '../../hooks/useToggleGroup'

/**
 * Initialise context
 */
export const DataTableContext = React.createContext<any>({
  config: {}
})

const DataTable: React.FC<IDataTable.IDataTableContextProps> = ({ children, config }) => {
  const [columnsState, setToggledColumns] = useToggleGroup({ multi: true })

  const toggleColumn = (id: string) => {
    setToggledColumns(id)
  }

  useEffect(() => {
    // Load columns into state
    config.columns.forEach((col: IDataTable.IDataTableColumn) => {
      col.hidden && toggleColumn(col.name)
    })
  }, [])

  return (
    <DataTableContext.Provider value={{ config, toggleColumn, columnsState }}>
      <DataTableContext.Consumer>{children}</DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTable
