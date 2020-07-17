import { IDataTable } from './types'
import * as React from 'react'
import { useContext } from 'react'
import { DataTableContext } from './DataTableContext'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import DataTableHeader from './DataTableHeader'

const DataTable: React.FC = () => {
  const { config, columnsState } = useContext(DataTableContext)
  const { table, columns } = config

  return (
    <React.Fragment>
      {table.header && !table.header.hidden && <DataTableHeader config={table.header} />}
      <table>
        <thead>
          <tr>{columns.map((col) => columnsState[col.name] || (!col.hidden && <td key={col.name}>{col.name}</td>))}</tr>
        </thead>
        <tbody>
          <tr>
            <td>Item one</td>
            <td>Item two</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default DataTable
