import { IGenericObject } from '../../types'
import { IDataTable } from './types'
import * as React from 'react'
import { v4 as uid } from 'uuid'
import { useState, useEffect } from 'react'
import { usePaginationV2 } from '../../hooks/usePaginationV2'
import cx from 'classnames'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Context
 */
import { DataTable as DataTableContext } from '../../context/DataTable'

/**
 * Components
 */
import { Box } from '../Box'
import { Overlay } from '../Overlay'
import { Loader } from '../Loader'
import { DataTableControls, DataTableHeader, DataTableRow, DataTableFooter } from '.'

/**
 * A simple table component
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

  console.log(loadingState)

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
 * Wrap the table with the DT context
 */
const ContextWrapper: React.FC<IDataTable.IProps> = ({ onEvent = () => {}, ...props }) =>
  props.type === 'standard' ? (
    <DataTable data={props.data} {...props} />
  ) : (
    <DataTableContext data={props.data}>
      {({ data, addRow, editRow, deleteRow }) => {
        const _dispatch = ({ type, payload }: any) => {
          onEvent({ type, payload })
          switch (type) {
            case 'ADD_ROW':
              addRow(null)
              break
            case 'COPY_ROW':
              addRow(payload.data)
              break
            case 'DELETE_ROW':
              deleteRow(payload.data._uid)
              break
            case 'ROW_BLUR':
              editRow(payload.data)
              break
            default:
              break
          }
        }
        return <DataTable {...props} data={data as IGenericObject[]} onEvent={_dispatch} />
      }}
    </DataTableContext>
  )

export default ContextWrapper
