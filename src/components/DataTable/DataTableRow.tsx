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

/**
 * Table row
 */
const DataTableRow: React.FC<IDataTable.IRowProps> = ({ controls, columns, cells, data }) => {
  const { addRow, editRow, deleteRow } = useContext(DataTableContext)
  const [, onFocus, onBlur] = useFocus()
  const [row, setRow] = useState(cells)

  /**
   * Lock a row
   */
  const lockRow = () => {
    setRow((prev: any) => prev.map((x: any) => ({ ...x, locked: !x.locked })))
  }

  /**
   * Render the popover with the row controls
   */
  const renderControls = () => {
    return (
      <Popover
        align="Right"
        render={
          <div style={{ width: '100px' }}>
            {controls.buttonCopyRow && (
              <Button className="w--100 m--b-sm" variant="Secondary" size="Small" onClick={() => addRow(data)}>
                Copy
              </Button>
            )}
            {controls.buttonLockRow && (
              <Button className="w--100 m--b-sm" variant="Secondary" size="Small" onClick={lockRow}>
                Lock
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
        {(value) => (
          <RefAction variant="Secondary" icon={{ name: 'Caret' }} {...value}>
            ...
          </RefAction>
        )}
      </Popover>
    )
  }

  return (
    <FormV2 data={data} onSubmit={(data: any) => editRow(data)}>
      {({ handleSubmit }) => (
        <tr className="datatable__row" onFocus={onFocus} onBlur={(e) => onBlur(e, handleSubmit)}>
          {Object.keys(data)
            .filter((x) => x !== '_uid')
            .map(
              (key, i) =>
                columns.find((x: any) => x.id === key)?.visible && (
                  <DataTableCell key={`cell-${key}-${i}`} id={key} config={row[i]} />
                )
            )}
          {controls.visible && <td className="datatable__cell text--center">{renderControls()}</td>}
        </tr>
      )}
    </FormV2>
  )
}

export default DataTableRow
