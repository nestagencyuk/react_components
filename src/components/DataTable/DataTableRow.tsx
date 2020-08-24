import { IDataTable } from './types'
import * as React from 'react'
import * as cx from 'classnames'
import { useState } from 'react'
import { useFocus } from '../../hooks/useFocus'
import { FormV2 } from '@nestagencyuk/react_form-factory'

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
const DataTableRow: React.FC<IDataTable.IRowProps> = ({ controls, columns, cells, data, tableType, onEvent }) => {
  const [row, setRow] = useState<Array<IDataTable.ICellProps['config']>>(cells)
  const [, onFocus, onBlurCB] = useFocus()

  /**
   * Handle row lock
   */
  const handleLock = () => {
    setRow((prev) => prev.map((obj) => ({ ...obj, locked: !obj.locked })))
  }

  /**
   * Render the popover with the row controls
   */
  const renderControls = () => (
    <Popover
      align="Right"
      render={
        <div className="p--sm" style={{ width: '100px' }} tabIndex={-1}>
          {controls.buttons.map((button, i) => (
            <Button
              key={`btn-${button.action}`}
              className={cx('w--100', { 'm--b-sm': controls.buttons.length - 1 !== i })}
              variant="Secondary"
              size="Small"
              onClick={() =>
                button.action === 'LOCK_ROW' ? handleLock() : onEvent({ type: button.action, payload: { data } })
              }
            >
              {button.action === 'LOCK_ROW' ? (row[0].locked ? 'Unlock' : button.text) : button.text}
            </Button>
          ))}
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

  /**
   * Render this row's cells
   */
  const renderCells = () => {
    const noUID = Object.keys(data).filter((key) => key !== '_uid')

    return noUID.map((key, i) => {
      const isCellVisible = columns.find((x) => x.id === key)?.visible

      return (
        isCellVisible && (
          <DataTableCell key={`cell-${key}-${i}`} id={key} config={row[i]} tableType={tableType} onEvent={onEvent} />
        )
      )
    })
  }

  return (
    <FormV2
      data={data}
      onSubmit={(data) =>
        onEvent({
          type: 'ROW_BLUR',
          payload: { sendOnBlur: controls.sendOnBlur, sendToEndpoint: controls.sendToEndpoint, data }
        })
      }
    >
      {({ handleSubmit }) => (
        <tr
          className="datatable__row"
          data-testid="datatable-row"
          onFocus={onFocus}
          onBlur={(e) => onBlurCB(e, handleSubmit)}
        >
          {renderCells()}
          {controls.visible && <td className="datatable__cell text--center">{renderControls()}</td>}
        </tr>
      )}
    </FormV2>
  )
}

export default DataTableRow
