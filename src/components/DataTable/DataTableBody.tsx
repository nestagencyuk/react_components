import { IDataTable } from './types'
import * as React from 'react'

/**
 * Components
 */
import { DataTableRow } from '.'

/**
 * Render a table cell
 */
const DataTableBody: React.FC<IDataTable.IBodyProps> = ({ controls, columns, rows, managedRows }) => {
  return (
    <tbody>
      {managedRows.map((x: any, i: number) => (
        <DataTableRow key={`row-${x._uid}`} controls={controls} columns={columns} cells={rows[i] || rows[0]} data={x} />
      ))}
    </tbody>
  )
}

export default DataTableBody
