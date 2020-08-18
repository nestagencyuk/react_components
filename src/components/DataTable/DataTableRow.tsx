import { IDataTable } from './types'
import * as React from 'react'
import { useContext, useState } from 'react'
import { useFocus } from '../../hooks/useFocus'
import { FormV2 } from '@nestagencyuk/react_form-factory'

/**
 * Context
 */
import { DataTableContext } from '../../context/DataTable'

/**
 * Components
 */
import { Popover } from '../Popover'
import { RefAction } from '../Action'
import { Button } from '../Button'
import { DataTableCell } from '.'
import { GenericObject } from 'types'

/**
 * Table row
 */
const DataTableRow: React.FC<IDataTable.IRowProps> = ({ controls, columns, cells, data, tableType }) => {
  const [row, setRow] = useState<Array<IDataTable.ICellProps['config']>>(cells)
  const { addRow, editRow, deleteRow } = useContext(DataTableContext)
  const [, onFocus, onBlur] = useFocus()

  /**
   * Lock a row
   */
  const lockRow = () => {
    setRow((prev) => prev.map((obj) => ({ ...obj, locked: !obj.locked })))
  }

  /**
   * Render the popover with the row controls
   */
  const renderControls = () => {
    return (
      <Popover
        align="Right"
        render={
          <div className="p--sm" style={{ width: '100px' }} tabIndex={-1}>
            {controls.buttonCopyRow && (
              <Button className="w--100 m--b-sm" variant="Secondary" size="Small" onClick={() => addRow(data)}>
                Copy
              </Button>
            )}
            {controls.buttonLockRow && (
              <Button className="w--100 m--b-sm" variant="Secondary" size="Small" onClick={lockRow}>
                {row[0]?.locked ? 'Unlock' : 'Lock'}
              </Button>
            )}
            {controls.buttonDeleteRow && (
              <Button className="w--100" variant="Secondary" size="Small" onClick={() => deleteRow(data._uid)}>
                Delete
              </Button>
            )}
          </div>
        }
      >
        {({ ref, onFocus, onBlur }) => (
          <RefAction
            id="datatable-row-popover-btn"
            ref={ref}
            variant="Tertiary"
            icon={{ name: 'Ellipsis', size: 'Large' }}
            onClick={onFocus}
            onBlur={onBlur}
          >
            ...
          </RefAction>
        )}
      </Popover>
    )
  }

  return (
    <FormV2 data={data} onSubmit={(data: GenericObject & { _uid: string }) => editRow(data)}>
      {({ handleSubmit }) => (
        <tr className="datatable__row" onFocus={onFocus} onBlur={(e) => onBlur(e, handleSubmit)} data-testid="datatable-row">
          {Object.keys(data)
            .filter((key) => key !== '_uid')
            .map(
              (key, i) =>
                columns.find((x: any) => x.id === key)?.visible && (
                  <DataTableCell tableType={tableType} key={`cell-${key}-${i}`} id={key} config={row[i]} />
                )
            )}
          {controls.visible && <td className="datatable__cell text--center">{renderControls()}</td>}
        </tr>
      )}
    </FormV2>
  )
}

export default DataTableRow
