import * as React from 'react'
import { useEffect, Fragment } from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import { DataTableContext } from '.'
import { IDataTable } from './types'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import DataTableHeader from './DataTableHeader'

const DataTable: React.FC<IDataTable.IProps> = ({ config }) => {
  const [columnsState, setToggledColumns] = useToggleGroup({ multi: true })
  const { table, columns } = config

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
    config.columns.forEach((col: IDataTable.IColumn) => {
      col.hidden && toggleColumn(col.name)
    })
  }

  useEffect(() => {
    setInitialState()
  }, [])

  return (
    <DataTableContext.Provider value={{ config, toggleColumn, columnsState }}>
      <DataTableContext.Consumer>
        {() => (
          <Fragment>
            {table.header && !table.header.hidden && <DataTableHeader />}
            <table>
              <thead>
                <tr>
                  {columns.map((col: IDataTable.IColumn) =>
                    columnsState[col.name] ? null : <td key={col.name}>{col.name}</td>
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item one</td>
                  <td>Item two</td>
                </tr>
              </tbody>
            </table>
          </Fragment>
        )}
      </DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTable
