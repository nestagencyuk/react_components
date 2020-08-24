import { IDataTable } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Action } from '../Action'

/**
 * Render the table header
 */
const DataTableHeader: React.FC<IDataTable.IHeaderProps> = ({ showRowControls, columns, onEvent }) => (
  <thead>
    <tr className="datatable__header">
      {columns.map(
        (column: IDataTable.IColumnConfig, i: number) =>
          column.visible && (
            <th
              key={`heading-${i}`}
              className={cx('datatable__cell', { 'datatable__cell--resizable': column.resizable })}
              style={{ width: column.defaultWidth ? column.defaultWidth : 'auto' }}
            >
              {column.name}
              {column.sortable && (
                <Action
                  className="datatable__cell-btn"
                  variant="Tertiary"
                  icon={{ name: 'Caret' }}
                  size="Small"
                  onClick={() => onEvent({ type: 'SORT', payload: { id: column.id } })}
                >
                  Sort
                </Action>
              )}
            </th>
          )
      )}
      {showRowControls && (
        <th className="datatable__cell" style={{ width: '1rem', textAlign: 'center' }}>
          Action
        </th>
      )}
    </tr>
  </thead>
)

export default DataTableHeader
