import * as React from 'react'
import { Form, Field } from '@nestagencyuk/react_form-factory'
import { useContext, useState } from 'react'
import { DataTableContext } from '.'
import { IDataTable } from './types'

/**
 * Components
 */
import { DataTableCell } from '.'
import { Popover } from '../Popover'
import { RefAction } from '../Action'
import { Button } from '../Button'

const DataTableRow: React.FC<IDataTable.IRowProps> = ({ cells, row }) => {
  const { rowControls, columnsState, duplicateRow, editRow, deleteRow } = useContext(DataTableContext)
  const { sendOnBlur, sendToEndpoint, buttonDuplicateRow, buttonRemoveRow, buttonLoadPage, buttonLockRow } = rowControls
  const [isLocked, setLocked] = useState(false)

  const handleOnBlur = () => {
    if (sendOnBlur && sendToEndpoint) {
      console.log(`Sent to ${sendToEndpoint}`)
    }
  }

  return (
    <Form onSubmit={(formData) => editRow(formData)} savedData={row}>
      {({ handleSubmit }) => (
        <tr className="datatable-body__row" onBlur={handleSubmit}>
          {cells.map((cell: IDataTable.ICell) => {
            return columnsState[cell.id] ? null : (
              <Field key={cell.id} id={cell.id}>
                {({ value, onChange }) => (
                  <DataTableCell
                    key={cell.id}
                    {...cell}
                    disabled={cell.disabled || isLocked}
                    value={value}
                    onChange={onChange}
                  />
                )}
              </Field>
            )
          })}
          {rowControls.visible && (
            <td className="datatable-body__cell">
              <Popover
                render={
                  <div>
                    {buttonDuplicateRow && (
                      <Button className="d--block w--100 m--b-xs" variant="Tertiary" onClick={() => duplicateRow(row)}>
                        Duplicate row
                      </Button>
                    )}
                    {buttonRemoveRow && (
                      <Button className="d--block w--100 m--b-xs" variant="Tertiary" onClick={() => deleteRow(row)}>
                        Remove row
                      </Button>
                    )}
                    {buttonLockRow && (
                      <Button className="d--block w--100 m--b-xs" variant="Tertiary" onClick={() => setLocked(!isLocked)}>
                        {`${isLocked ? 'Unlock' : 'Lock'} row`}
                      </Button>
                    )}
                    {buttonLoadPage && (
                      <Button className="d--block w--100 m--b-xs" variant="Tertiary" onClick={() => alert('Load page')}>
                        Load page
                      </Button>
                    )}
                  </div>
                }
              >
                {(value) => (
                  <RefAction icon={{ name: 'Branch' }} variant="Tertiary" {...value}>
                    Row actions
                  </RefAction>
                )}
              </Popover>
            </td>
          )}
        </tr>
      )}
    </Form>
  )
}

export default DataTableRow
