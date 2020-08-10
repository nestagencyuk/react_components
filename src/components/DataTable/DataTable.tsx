import { IDataTable } from './types'
import * as React from 'react'
import { useState } from 'react'
import { usePaginationV2 } from '../../hooks/usePaginationV2'
import cx from 'classnames'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Context
 */
import { Box } from '../Box'
import { Overlay } from '../Overlay'
import { Loader } from '../Loader'
import { Button } from '../Button'
import { DataTable as BaseDataTable } from '../../context/DataTable'

/**
 * Components
 */
import { DataTableControls, DataTableHeader, DataTableBody, DataTableFooter } from '.'

/**
 * A simple table component
 */
const DataTable: React.FC<IDataTable.IProps> = ({ className, loading, controls, header, rows, data, onSubmit }) => {
  const [columns, setColumns] = useState(header)

  /**
   * Set pagination
   */
  const pagination = usePaginationV2({
    array: data,
    pageLimit: controls.footer?.pagination?.pageLimit
  })

  return (
    <form className={cx(className, 'datatable')} onSubmit={onSubmit}>
      <DataTableControls header={columns} controls={controls.global} onChange={setColumns} />

      <div
        className="datatable__main"
        style={{ minHeight: controls.global.minHeight || 800, maxHeight: controls.global.maxHeight || 1000 }}
      >
        {loading && (
          <Overlay variant="Inverse">
            <Box align={{ x: 'Center', y: 'Center' }} fill>
              <Loader variant="Bounce" />
            </Box>
          </Overlay>
        )}

        <table className={cx(className, 'datatable__table')}>
          <DataTableHeader controls={controls.row} columns={columns} />
          <DataTableBody controls={controls.row} columns={columns} rows={rows} managedRows={pagination.currentSlice} />
        </table>
      </div>

      <DataTableFooter controls={controls.footer} pagination={pagination} rowCount={data.length} />
      <Button type="submit">Submit</Button>
    </form>
  )
}

/**
 * Wrap the table with the DT context
 */
const ContextWrapper: React.FC<IDataTable.IProps> = ({ data, onSubmit, ...props }) => {
  return (
    <BaseDataTable data={data} onSubmit={onSubmit}>
      {({ rows, handleSubmit }) => <DataTable {...props} data={rows} onSubmit={handleSubmit} />}
    </BaseDataTable>
  )
}

export default ContextWrapper
