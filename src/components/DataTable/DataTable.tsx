import * as React from 'react'
import { useState, useEffect } from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import { IDataTable } from './types'
import { DataTableContext } from '.'
import { useManageArray } from '../../hooks/useManageArray'
import { usePaginationV2 } from '../../hooks/usePaginationV2'
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
  /**
   * Load table data into
   */
  const { array: managedArray, addItem, editItem: editRow, deleteItem: deleteRow, resetItems } = useManageArray({
    initialArray: data.map((x) => x.reduce((acc, y) => ({ ...acc, [y.id]: y.value }), {}))
  })
  const [columnsState, setToggledColumns] = useToggleGroup({ multi: true })
  const [loading, setLoading] = useState(true)
  const [rowCount, setRowCount] = useState(0)

  /**
   * Set pagination
   */
  const { currentData, currentPage, lastPage, nextPage, prevPage, jumpToPage } = usePaginationV2({
    dataToPaginate: managedArray,
    itemsPerPage: footerControls.paginatedRowsPerPage
  })

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
        lastPage
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
                    {currentData &&
                      currentData.map((row, rowIndex) => <DataTableRow key={rowIndex} row={row} cells={data[0]} />)}
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
