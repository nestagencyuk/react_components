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
  const { config } = useContext(DataTableContext)
  const { table } = config
  const { header, footer } = table

  return (
    <React.Fragment>
      {header && !header.hidden && <DataTableHeader config={header} />}
      <table>
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
