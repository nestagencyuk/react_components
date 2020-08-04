import * as React from 'react'
import { useState, useEffect } from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import { IDataTable } from './types'
import { DataTableContext } from '.'
import { useManageArray } from '../../hooks/useManageArray'
import uid from 'uid'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { DataTableControls, DataTableHeader, DataTableRow, DataTableFooter } from '.'
import { Loader } from '../Loader'

const DataTable: React.FC<IDataTable.IProps> = ({ config, headings, data }) => {
  const { tableControls, rowControls, footerControls } = config
  const { array: managedArray, addItem, editItem, deleteItem } = useManageArray({
    initialArray: data.map((x) => x.reduce((acc, y) => ({ ...acc, [y.id]: y.value }), {}))
  })
  const [columnsState, setToggledColumns] = useToggleGroup({ multi: true })
  const [loading, setLoading] = useState(true)
  const [rowCount, setRowCount] = useState(0)

  /**
   * Toggle individual column visibilty
   */
  const toggleColumn = (id: string) => {
    setToggledColumns(id)
  }

  /**
   * Add new, blank row
   */
  const addNewRow = () => {
    addItem(data[0].reduce((acc, cell) => ({ ...acc, [cell.id]: null }), {}))
  }

  /**
   * Duplicate row
   */
  const duplicateRow = (row: IDataTable.IRowProps) => {
    addItem({ ...row, _uid: uid(8) })
  }

  /**
   * Listen for params
   */
  useEffect(() => {
    setRowCount(managedArray.length)
  }, [managedArray])

  /**
   * On Mount -
   * Load headings into state
   * Finish table loading
   */
  useEffect(() => {
    headings.forEach((heading: IDataTable.IHeading) => {
      !heading.visible && toggleColumn(heading.id)
    })

    setLoading(false)
  }, [])

  return (
    <DataTableContext.Provider
      value={{
        headings,
        data,
        columnsState,
        rowControls,
        rowCount,
        toggleColumn,
        addNewRow,
        duplicateRow,
        editItem,
        deleteItem
      }}
    >
      <DataTableContext.Consumer>
        {() =>
          loading ? (
            <Loader className="datatable-loader" />
          ) : (
            <div className="datatable-container">
              <div className="datatable-container__inner">
                {tableControls.visible && <DataTableControls {...tableControls} />}
                <table className="datatable m--b-md">
                  <DataTableHeader headings={headings} />
                  <tbody className="datatable-body">
                    {managedArray &&
                      managedArray.map((row, rowIndex) => <DataTableRow key={rowIndex} row={row} cells={data[0]} />)}
                  </tbody>
                </table>
                {footerControls.visible && <DataTableFooter />}
              </div>
            </div>
          )
        }
      </DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTable
