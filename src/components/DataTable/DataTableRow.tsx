import * as React from 'react'
import { Form, Field } from '@nestagencyuk/react_form-factory'
import { useContext } from 'react'
import { DataTableContext } from '.'
import { IDataTable } from './types'

/**
 * Components
 */
import { DataTableCell } from '.'
import { Popover } from '../Popover'
import { RefAction } from '../Action'
import { Button } from '../Button'

const DataTableRow: React.FC<IDataTable.IRow> = ({ cells }) => {
  const { rowControls, columnsState, duplicateRow, removeRow } = useContext(DataTableContext)
  const { sendOnBlur, sendToEndpoint, buttonDuplicateRow, buttonRemoveRow, buttonLoadPage, buttonLockRow } = rowControls

  const handleOnBlur = () => {
    if (sendOnBlur && sendToEndpoint) {
      console.log(`Sent to ${sendToEndpoint}`)
    }
  }

  return (
    <Form
      onSubmit={(formData) => console.log(formData)}
      savedData={
        cells.some((x: IDataTable.ICell) => x.value)
          ? cells.reduce(
              (acc: IDataTable.ICell, cell: IDataTable.ICell) => ({ ...acc, [cell.id]: cell.value }),
              {} as IDataTable.ICell
            )
          : null
      }
    >
      {({ handleSubmit }) => (
        <tr className="datatable-body__row" onBlur={handleSubmit}>
          {cells.map((cell: IDataTable.ICell) => {
            return columnsState[cell.id] ? null : (
              <Field key={cell.id} id={cell.id}>
                {({ value, onChange }) => <DataTableCell key={cell.id} {...cell} value={value} onChange={onChange} />}
              </Field>
            )
          })}
          {rowControls.visible && (
            <td className="datatable-body__cell">
              <Popover
                render={
                  <div>
                    {buttonDuplicateRow && (
                      <Button className="d--block w--100 m--b-xs" variant="Tertiary" onClick={() => alert('Duplicate row')}>
                        Duplicate row
                      </Button>
                    )}
                    {buttonRemoveRow && (
                      <Button className="d--block w--100 m--b-xs" variant="Tertiary" onClick={() => alert('Remove row')}>
                        Remove row
                      </Button>
                    )}
                    {buttonLockRow && (
                      <Button className="d--block w--100 m--b-xs" variant="Tertiary" onClick={() => alert('Lock row')}>
                        Lock row
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
