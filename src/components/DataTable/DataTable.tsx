import * as React from 'react'
import { useState, useEffect } from 'react'
import { useToggleGroup, useManageArray, usePaginationV2 } from '../../hooks'
import { IDataTable } from './types'
import { DataTableContext } from '.'
import uid from 'uid'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { DataTableControls, DataTableHeader, DataTableRow, DataTableFooter } from '.'
import { Loader } from '../../components/Loader'

const DataTable: React.FC<IDataTable.IProps> = ({ config, headings, data }) => {
  /**
   * Gather specific config from global config
   */
  const { tableControls, rowControls, footerControls } = config

  /**
   * Load table data into
   */
  const { array: managedArray, addItem, editItem: editRow, deleteItem: deleteRow, resetItems } = useManageArray({
    initialArray: data.map((x) => x.reduce((acc, y) => ({ ...acc, [y.id]: y.value }), {}))
  })

  /**
   * Set pagination
   */
  const { currentData, currentPage, maxPage, nextPage, prevPage, jumpToPage } = usePaginationV2({
    dataToPaginate: managedArray,
    itemsPerPage: footerControls.paginatedRowsPerPage
  })

  /**
   * Toggle visible/hidden columns
   */
  const [columnsState, setToggledColumns] = useToggleGroup({ multi: true })

  /**
   * Table loading state
   */
  const [loading, setLoading] = useState(true)

  /**
   * Track row count
   */
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
        // Table Control actions
        addNewRow,
        toggleColumn,

        // Row actions
        duplicateRow,
        deleteRow,
        editRow,

        // Footer actions
        resetItems,
        nextPage,
        prevPage,
        jumpToPage,

        // Header Config
        headings,

        // Rows & Cells config
        rowControls,
        columnsState,
        data,

        // Footer config
        footerControls,
        rowCount,
        currentPage,
        maxPage
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
                      currentData.map((row, rowIndex) => (
                        <DataTableRow key={rowIndex} row={row} cells={data[rowIndex] || data[0]} />
                      ))}
                  </tbody>
                </table>
                {footerControls.visible && <DataTableFooter {...footerControls} />}
              </div>
            </div>
          )
        }
      </DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTable
