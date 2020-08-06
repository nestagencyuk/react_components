import { IDataTable } from './types'
import * as React from 'react'

/**
 * Render a table cell
 */
const DataTableHeader: React.FC<IDataTable.IHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((x, i: number) => x.visible && <th key={`heading-${i}`}>{x.name}</th>)}
        <th>Action</th>
      </tr>
    </thead>
  )
}

export default DataTableHeader
