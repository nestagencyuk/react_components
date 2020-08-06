import { IDataTable } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Render a table cell
 */
const DataTableHeader: React.FC<IDataTable.IHeaderProps> = ({ controls, columns }) => {
  return (
    <thead>
      <tr className="datatable__header">
        {columns.map(
          (column: any, i: number) =>
            column.visible && (
              <th
                key={`heading-${i}`}
                className={cx('datatable__cell', { 'datatable__cell--resizable': column.resizable })}
                style={{ width: column.defaultWidth ? column.defaultWidth : 'auto' }}
              >
                {column.name}
              </th>
            )
        )}
        {controls.visible && (
          <th className="datatable__cell" style={{ width: '1rem', textAlign: 'center' }}>
            Action
          </th>
        )}
      </tr>
    </thead>
  )
}

export default DataTableHeader
