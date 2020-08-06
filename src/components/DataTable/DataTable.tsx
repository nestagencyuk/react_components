import { IDataTable } from './types'
import * as React from 'react'
import { useMemo, useState } from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'
import cx from 'classnames'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Context
 */
import { DataTable as BaseDataTable } from '../../context/DataTable'

/**
 * Components
 */
import { DataTableControls, DataTableHeader, DataTableBody } from '.'

/**
 * A simple table component
 */
const DataTable: React.FC<IDataTable.IProps> = ({ className, controls, header, rows, data, onSubmit }) => {
  const [columns, setColumns] = useState(header)

  return (
    <BaseDataTable data={data} onSubmit={onSubmit}>
      {({ rows: managedRows, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <DataTableControls header={columns} controls={controls.global} onChange={setColumns} />

          <table className={cx(className, 'datatable')}>
            <DataTableHeader columns={columns} />
            <DataTableBody controls={controls.row} columns={columns} rows={rows} managedRows={managedRows} />
          </table>

          <button type="submit">Submit</button>
        </form>
      )}
    </BaseDataTable>
  )
}

export default DataTable
