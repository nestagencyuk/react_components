import * as React from 'react'
import { useState, useEffect } from 'react'
import { Form, Field } from '@nestagencyuk/react_form-factory'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import { IDataTable } from './types'
import { DataTableContext } from '.'

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
  const [columnsState, setToggledColumns] = useToggleGroup({ multi: true })
  const [rowsState, setRowsState] = useState([])
  const [blankRowState, setBlankRow] = useState([])
  const [loading, setLoading] = useState(true)
  const [rowCount, setRowCount] = useState(0)

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
    setRowsState((prev) => [...prev, blankRowState])
  }

  /**
   * Listen for params
   */
  useEffect(() => {
    setRowCount(rowsState.length)
  }, [rowsState])

  /**
   * On Mount -
   * Load headings into state
   * Load rows into state
   * Load blank row into state
   * Finish table loading
   */
  useEffect(() => {
    headings.forEach((heading: IDataTable.IHeading) => {
      !heading.visible && toggleColumn(heading.id)
    })

    data.forEach((row) => {
      setRowsState((prev) => [...prev, row])
    })

    data[0].forEach((cell) => setBlankRow((prev) => [...prev, { ...cell, value: null }]))

    setLoading(false)
  }, [])

  return (
    <DataTableContext.Provider value={{ headings, columnsState, rowControls, rowCount, toggleColumn, addNewRow }}>
      <DataTableContext.Consumer>
        {() =>
          loading ? (
            <Loader className="datatable-loader" />
          ) : (
            <div className="datatable-container">
              <div className="datatable-container__inner">
                {tableControls.visible && <DataTableControls {...tableControls} />}
                <Form onSubmit={(FormData) => console.log(JSON.stringify(FormData))}>
                  {() => (
                    <table className="datatable m--b-md">
                      <DataTableHeader headings={headings} />
                      <tbody className="datatable-body">
                        {rowsState.map((cells, rowIndex) => (
                          <Field key={`Row: ${rowIndex + 1}`} id={`Row: ${rowIndex + 1}`}>
                            {() => <DataTableRow cells={cells} />}
                          </Field>
                        ))}
                      </tbody>
                    </table>
                  )}
                </Form>
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
