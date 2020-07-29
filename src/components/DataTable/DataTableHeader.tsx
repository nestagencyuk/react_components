import * as React from 'react'
import { useContext, Fragment } from 'react'
import { DataTableContext } from '.'
import { IDataTable } from './types'

const DataTableHeader: React.FC<IDataTable.IHeader> = ({ headings }) => {
  const { rowControls, columnsState } = useContext(DataTableContext)

  return (
    <thead className="datatable-body-header">
      <tr>
        <Fragment>
          {headings.map((heading) => {
            return columnsState[heading.id] ? null : (
              <th
                className="datatable-body-header__item"
                key={heading.id}
                style={{
                  width: heading.defaultWidth ? heading.defaultWidth : '100px',
                  resize: heading.resizable ? 'horizontal' : 'none'
                }}
              >
                {heading.name}
              </th>
            )
          })}
          {rowControls.visible && (
            <th className="datatable-body-header__item" style={{ width: '50px' }}>
              Action
            </th>
          )}
        </Fragment>
      </tr>
    </thead>
  )
}

export default DataTableHeader
