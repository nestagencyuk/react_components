import { IDataTable } from './types'
import { v4 as uid } from 'uuid'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'

/**
 * Context
 */
import { DataTableContext } from '../../context/DataTable'

/**
 * Components
 */
import { Label } from '../Label'
import { Popover } from '../Popover'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { Button, RefButton } from '../Button'

/**
 * Data table row
 */
const DataTableControls: React.FC<IDataTable.IControlsProps> = ({ header, controls, onChange }) => {
  const [toggles, setToggled] = useToggleGroup({ multi: true })
  const { addRow } = useContext(DataTableContext)

  /**
   * On toggle change, set the visibility of the header
   */
  useEffect(() => {
    header.forEach((x: any) => !x.visible && setToggled(`label-${x.id}`))
  }, [])

  /**
   * On toggle change, set the visibility of the header
   */
  useEffect(() => {
    onChange(header.map((x: any) => ({ ...x, visible: !toggles[`label-${x.id}`] })))
  }, [toggles])

  return (
    <header className="datatable__controls" data-testid="datatable-global-controls">
      {controls.buttonFilterData && (
        <Button
          variant="Secondary"
          className="m--r-md"
          icon={{
            name: 'Filter',
            align: 'End'
          }}
          size="Small"
        >
          Filter Data
        </Button>
      )}
      {controls.buttonCustomiseTable && (
        <Popover
          align="Bottom"
          render={
            <div style={{ width: '250px' }}>
              {header.map((x: any, i: number) => (
                <Label key={`label-${x.id}`} className="p--sm w--100" for={`label-${x.id}-${i}`} interactive>
                  <Checkbox
                    className="m--r-xs"
                    id={`label-${x.id}-${i}`}
                    value={x.visible}
                    onChange={() => setToggled(`label-${x.id}`)}
                  />
                  {x.name}
                </Label>
              ))}
            </div>
          }
        >
          {({ ref, onFocus, onBlur }) => (
            <RefButton
              ref={ref}
              variant="Secondary"
              className="m--r-md"
              icon={{
                name: 'Table-columns',
                align: 'End'
              }}
              size="Small"
              onClick={onFocus}
              onBlur={onBlur}
            >
              Customise Table
            </RefButton>
          )}
        </Popover>
      )}
      {controls.search && (
        <Input id={null} type="Text" value={''} placeholder="Search Data" size="Small" onChange={() => {}} />
      )}
      {controls.buttonAddRow && (
        <Button
          className="m--l-auto"
          icon={{
            name: 'Plus',
            align: 'End'
          }}
          size="Small"
          onClick={() => addRow(null)}
        >
          Add Row
        </Button>
      )}
    </header>
  )
}

export default DataTableControls
