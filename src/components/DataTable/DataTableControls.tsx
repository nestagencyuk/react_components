import { IDataTable } from './types'
import * as React from 'react'
import { useState } from 'react'

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
const DataTableControls: React.FC<IDataTable.IControlsProps> = ({ header, controls, onChange, onEvent }) => {
  const [searchValue, setSearchValue] = useState(null)

  /**
   * Determin button alignment
   */
  const startButtons = controls.buttons.filter((x) => x.align === 'Start')
  const endButtons = controls.buttons.filter((x) => x.align === 'End')

  /**
   * Handle the customise action
   */
  const handleCustomise = (id: string) => {
    onChange((prev: IDataTable.IColumnConfig[]) =>
      prev.map((x) => ({ ...x, visible: x.id === id ? !x.visible : x.visible }))
    )
  }

  /**
   * Render the popover with the column controls
   */
  const renderControls = (button: any, i: number) => (
    <Popover
      key={`btn-${button.action}-${i}`}
      align="Bottom"
      render={
        <div style={{ width: '250px' }}>
          {header.map((x, i) => (
            <Label key={`label-${x.id}-${i}`} className="p--sm w--100" for={`label-${x.id}-${i}`} interactive>
              <Checkbox
                className="m--r-xs"
                id={`label-${x.id}-${i}`}
                value={x.visible}
                onChange={() => handleCustomise(x.id)}
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
          {button.text}
        </RefButton>
      )}
    </Popover>
  )

  return (
    <header className="datatable__controls" data-testid="datatable-global-controls">
      {startButtons.map((button, i) =>
        button.action === 'CUSTOMISE' ? (
          renderControls(button, i)
        ) : (
          <Button
            key={`btn-${button.action}-${i}`}
            variant="Secondary"
            className="m--r-md"
            size="Small"
            onClick={() => onEvent({ type: button.action })}
          >
            {button.text}
          </Button>
        )
      )}
      {controls.search && (
        <Input
          id={null}
          type="Text"
          value={searchValue}
          placeholder="Search Data"
          size="Small"
          onChange={(val) => {
            setSearchValue(val)
            onEvent({ type: 'SEARCH', payload: val })
          }}
        />
      )}
      {endButtons.map((button, i) => (
        <Button
          key={`btn-${button.action}-${i}`}
          variant="Secondary"
          className={i === 0 && 'm--l-auto'}
          size="Small"
          onClick={() => onEvent({ type: button.action })}
        >
          {button.text}
        </Button>
      ))}
    </header>
  )
}

export default DataTableControls
