import * as React from 'react'
import { useState } from 'react'
import { IDataTable } from './types'
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
import { DataTable as BaseDataTable } from '../../context/DataTable'

/**
 * Components
 */
import { DataTableControls, DataTableHeader, DataTableBody, DataTableFooter } from '.'
import { GenericObject } from 'types'

/**
 * A simple table component
 */
const DataTable: React.FC<Omit<IDataTable.IProps, 'onSubmit'> & { onSubmit: (e: React.FormEvent) => void }> = ({
  className,
  loadingState = 'Idle',
  controls,
  header,
  rows,
  data,
  onSubmit
}) => {
  const [columns, setColumns] = useState(header)
  const [paginationPageLimit, setPaginationPageLimit] = useState(controls.footer.pagination?.pageLimit || 100)

  /**
   * Set pagination
   */
  const pagination = usePaginationV2({
    array: data,
    pageLimit: paginationPageLimit
  })

  return (
    <form className={cx(className, 'datatable')} onBlur={onSubmit}>
      {controls.global.visible && <DataTableControls header={columns} controls={controls.global} onChange={setColumns} />}

      <div
        className="datatable__main"
        style={{ minHeight: controls.global.minHeight || 800, maxHeight: controls.global.maxHeight || 1000 }}
      >
        {loadingState === 'Loading' && (
          <Overlay variant="Inverse">
            <Box align={{ x: 'Center', y: 'Center' }} fill>
              <Loader variant="Bounce" />
            </Box>
          </Overlay>
        )}

        <table className={cx(className, 'datatable__table')}>
          <DataTableHeader showRowControls={controls.row.visible} columns={columns} />
          <DataTableBody
            controls={controls.row}
            columns={columns}
            rows={rows}
            managedRows={pagination.currentSlice}
            tableType={controls.global.type || 'standard'}
          />
        </table>
      </div>

      {controls.footer.visible && (
        <DataTableFooter
          controls={controls.footer}
          pagination={pagination}
          rowCount={data.length}
          setPaginationPageLimit={setPaginationPageLimit}
        />
      )}
    </form>
  )
}

/**
 * Wrap the table with the DT context
 */
const ContextWrapper: React.FC<IDataTable.IProps> = ({ data, onSubmit, ...props }) => {
  return (
    <BaseDataTable data={data} onSubmit={onSubmit}>
      {({ rows, handleSubmit }) => <DataTable {...props} data={rows as GenericObject[]} onSubmit={handleSubmit} />}
    </BaseDataTable>
  )
}

export default ContextWrapper
