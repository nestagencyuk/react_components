import * as React from 'react'
import { useEffect } from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import { IDataTable } from './types'

/**
 * Initialise context
 */
export const DataTableContext = React.createContext<any>({
  config: {}
})

const DataTable: React.FC<IDataTable.IDataTableContextProps> = ({ children, config }) => {
  const [columnsState, setToggledColumns] = useToggleGroup({ multi: true })

  /**
   * Toggle individual column visibilty
   */
  const toggleColumn = (id: string) => {
    setToggledColumns(id)
  }

  /**
   * Sets any necessary initial state based on config passed in
   */
  const setInitialState = () => {
    config.columns.forEach((col: IDataTable.IDataTableColumn) => {
      col.hidden && toggleColumn(col.name)
    })
  }

  useEffect(() => {
    setInitialState()
  }, [])

  return (
    <DataTableContext.Provider value={{ config, toggleColumn, columnsState }}>
      <DataTableContext.Consumer>{children}</DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTable
