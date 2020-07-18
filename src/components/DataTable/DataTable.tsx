import * as React from 'react'
import { useContext, Fragment } from 'react'
import { DataTableContext } from './DataTableContext'
import { IDataTable } from './types'

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
    <Fragment>
      {table.header && !table.header.hidden && <DataTableHeader />}
      <table>
        <thead>
          <tr>
            {columns.map((col: IDataTable.IDataTableColumn) =>
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
  )
}

export default DataTable
