import * as React from 'react'
import { useEffect, useState, Fragment } from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import { orderColumnsByDisplayOrder } from './utils'
import { DataTableContext } from '.'
import { IDataTable } from './types'
import { Form, Field } from '@nestagencyuk/react_form-factory'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { DataTableHeader, DataTableFooter, DataTableCell } from '.'
import { Loader } from '../Loader'

const DataTable: React.FC<IDataTable.IProps> = ({ config }) => {
  const [columnsState, setToggledColumns] = useToggleGroup({ multi: true })
  const [columnsByDisplayOrder, setColumnOrder] = useState([])
  const [rowsState, setRowsState] = useState([])
  const [rowCountState, setRowCount] = useState(0)
  const [rowSearchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const { table, columns, rows } = config
  const [tableState, setTableState] = useState({})

  /**
   * Add row to table state
   */
  const addRowToTableState = (rowData: any) => {
    setTableState((prev) => ({ ...prev, ...rowData }))
  }
  console.log(tableState)

  /**
   * Search through rows
   */
  const searchRows = (query: string) => {
    setRowsState(
      rows.filter((row) =>
        row.cells.some((cell: IDataTable.ICell) =>
          cell.searchable ? cell.value.toLowerCase().includes(query.toLowerCase()) : false
        )
      )
    )
    setSearchQuery(query)
  }

  /**
   * Toggle individual column visibilty
   */
  const toggleColumn = (id: string) => {
    setToggledColumns(id)
  }

  /**
   * Add new row
   */
  const addNewRow = () => {
    const newRow = rowsState[0]
    setRowsState((prev) => [...prev, newRow])
  }

  /**
   * Sets any necessary initial state based on config passed in
   */
  const setInitialState = () => {
    // Load column config into state
    columns.forEach((col: IDataTable.IColumn) => {
      col.hidden && toggleColumn(col.name)
      setColumnOrder((prev) => [...prev, col].sort(orderColumnsByDisplayOrder))
    })

    // Load rows config into state
    rows.forEach((row) => {
      setRowsState((prev) => [...prev, row])
    })

    // Allow table to render
    setLoading(false)
  }

  /**
   * Listen for params
   */
  useEffect(() => {
    setRowCount(rowsState.length)
  }, [rowsState])

  /**
   * On Mount
   */
  useEffect(() => {
    setInitialState()
  }, [])

  return (
    <DataTableContext.Provider
      value={{
        config,
        rowsState,
        rowCountState,
        columnsState,
        addNewRow,
        toggleColumn,
        searchRows,
        rowSearchQuery
      }}
    >
      <DataTableContext.Consumer>
        {() =>
          loading ? (
            <Loader className="datatable-loader" />
          ) : (
            <div className="datatable-container">
              <div className="datatable-container__inner">
                {table.header && !table.header.hidden && <DataTableHeader />}
                <Form onSubmit={(formData) => console.log(JSON.stringify(formData))}>
                  {({ valid, handleSubmit }) => (
                    <Fragment>
                      <table className="datatable m--b-md">
                        <thead>
                          <tr className="datatable-body-header">
                            {columnsByDisplayOrder.map((col: IDataTable.IColumn) =>
                              columnsState[col.name] ? null : (
                                <th data-testid="datatable-column" className="datatable-body-header__item" key={col.name}>
                                  {col.name}
                                </th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody className="datatable-body">
                          {rowsState.map((row, index) => (
                            <Field id={`Row: ${index + 1}`}>
                              {({ value, onChange }) => (
                                <Form onSubmit={(formData) => addRowToTableState({ [`${index + 1}`]: formData })}>
                                  {({ valid, handleSubmit }) => (
                                    <Fragment>
                                      <tr
                                        onBlur={handleSubmit}
                                        className="datatable-body__row"
                                        key={`${row.sendToEndPoint}-${index}`}
                                      >
                                        {row.cells.map((cell: IDataTable.ICell) => {
                                          return columnsState[cell.belongsTo] ? null : (
                                            <Field id={cell.name}>
                                              {({ value, onChange }) => (
                                                <DataTableCell key={cell.name} {...cell} value={value} onChange={onChange} />
                                              )}
                                            </Field>
                                          )
                                        })}
                                      </tr>
                                      <button onClick={handleSubmit}>test</button>
                                    </Fragment>
                                  )}
                                </Form>
                              )}
                            </Field>
                          ))}
                        </tbody>
                      </table>
                    </Fragment>
                  )}
                </Form>
                {table.footer && !table.footer.hidden && <DataTableFooter />}
              </div>
            </div>
          )
        }
      </DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTable
