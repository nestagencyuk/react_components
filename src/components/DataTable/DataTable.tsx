import { IGenericObject } from '../../types'
import { IDataTable } from './types'
import * as React from 'react'
import { v4 as uid } from 'uuid'
import { useState, useEffect, useMemo } from 'react'
import { usePaginationV2 } from '../../hooks/usePaginationV2'
import { useManageArray } from '../../hooks/useManageArray'
import cx from 'classnames'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { Box } from '../Box'
import { Overlay } from '../Overlay'
import { Loader } from '../Loader'
import { DataTableControls, DataTableHeader, DataTableRow, DataTableFooter } from '.'

/**
 * A data table component
 */
const DataTable: React.FC<IDataTable.IProps> = ({
  className,
  type = 'standard',
  loadingState = 'Idle',
  controls,
  header,
  rows,
  data,
  onEvent = () => {}
}) => {
  const [columns, setColumns] = useState<IDataTable.IColumnConfig[]>(header)
  const [paginationPageLimit, setPaginationPageLimit] = useState(controls.footer.pagination?.pageLimit || 100)
  const pagination = usePaginationV2({ initialArray: data, pageLimit: paginationPageLimit })

  /**
   * Listen for changes to the column config and send these up
   */
  useEffect(() => {
    if (!columns) return
    onEvent({ type: 'COLUMN_CHANGE', payload: columns })
  }, [columns])

  return (
    <form
      className={cx(className, 'datatable')}
      onKeyDown={(e) => e.key === 'Enter' && onEvent({ type: 'SUBMIT', payload: data })}
    >
      {controls.global.visible && (
        <DataTableControls header={columns} controls={controls.global} onChange={setColumns} onEvent={onEvent} />
      )}

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
          <tbody>
            {pagination.currentSlice.map((row, i) => (
              <DataTableRow
                key={`row-${row._uid ? row._uid : uid()}`}
                columns={columns}
                cells={rows[i] || rows[0]}
                data={row}
                controls={controls.row}
                tableType={type}
                onEvent={onEvent}
              />
            ))}
          </tbody>
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
 * Wrap the table with the data manager
 */
const ContextWrapper: React.FC<IDataTable.IProps> = ({ onEvent = () => {}, ...props }) => {
  const { array, addItem, editItem, deleteItem } = useManageArray({ initialArray: props.data })

  /**
   * Create a blank row
   */
  const blankRow = useMemo(() => Object.keys(props.data[0]).reduce((acc, x: string) => ({ ...acc, [x]: null }), {}), [array])

  /**
   * Dispatch events (create the final data obj)
   */
  const _dispatch = ({ type, payload }: any) => {
    onEvent({ type, payload })

    switch (type) {
      case 'ADD_ROW':
        addItem(blankRow)
        break
      case 'COPY_ROW':
        addItem(payload.data)
        break
      case 'DELETE_ROW':
        if (array.length === 1) return
        deleteItem(payload.data._uid)
        break
      case 'ROW_BLUR':
        editItem(payload.data)
        break
      default:
        break
    }
  }

  return props.type === 'standard' ? (
    <DataTable data={props.data} {...props} />
  ) : (
    <DataTable {...props} data={array as IGenericObject[]} onEvent={_dispatch} />
  )
}

export default ContextWrapper
