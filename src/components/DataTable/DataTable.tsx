import * as React from 'react'
import { useEffect, useState } from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import { orderColumnsByDisplayOrder } from './utils'
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
  const [columnsByDisplayOrder, setColumnOrder] = useState(config.columns.sort(orderColumnsByDisplayOrder))
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
    columns.forEach((col: IDataTable.IColumn) => {
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
          <div className="datatable-container">
            <div className="datatable-container__inner">
              {table.header && !table.header.hidden && <DataTableHeader />}
              <table className="datatable">
                <thead>
                  <tr className="datatable-body-header">
                    {columnsByDisplayOrder.map((col: IDataTable.IColumn) =>
                      columnsState[col.name] ? null : (
                        <th className="datatable-body-header__item" key={col.name}>
                          {col.name}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {columnsByDisplayOrder.map((col: IDataTable.IColumn) =>
                      columnsState[col.name] ? null : (
                        <td className="datatable-body-header__item" key={col.name}>
                          {col.name}
                        </td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTable
