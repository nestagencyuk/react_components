import * as React from 'react'
import { DataTableContext } from '.'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import { useState, useEffect } from 'react'
import { orderColumnsByDisplayOrder } from './utils'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { DataTableHeader, DataTableFooter, DataTableCell } from '.'
import { Loader } from '../Loader'

const DataTableTest = ({ controls, config }) => {
  const { header, data } = config
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
  const setInitialState = () => {}

  /**
   * On Mount
   */
  useEffect(() => {
    setInitialState()
  }, [])

  return (
    <DataTableContext.Provider value={{ config, columnsState, toggleColumn }}>
      <DataTableContext.Consumer>
        {() => (
          <div className="datatable-container">
            <div className="datatable-container__inner">
              {controls && !controls.hidden && <DataTableHeader {...controls} />}
              <table className="datatable m--b-md">
                <thead className="datatable-body-header">
                  <tr>
                    {header.map((heading) => {
                      return columnsState[heading.id] ? null : (
                        <th className="datatable-body-header__item" key={heading.id}>
                          {heading.name}
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="datatable-body__row">
                      {row.map((cell, cellIndex) => {
                        return columnsState[cell.id] ? null : (
                          <td className="datatable-body__cell" key={cell.id}>
                            {cell.value}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </DataTableContext.Consumer>
    </DataTableContext.Provider>
  )
}

export default DataTableTest
