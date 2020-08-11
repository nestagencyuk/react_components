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
import { Grid, GridItem } from '../Grid'
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
    <header className="datatable__controls" data-testid="dataTableGlobalControls">
      <Grid gutter>
        <GridItem span={3}>
          {controls.buttonFilterData && (
            <Button
              className="w--100"
              variant="Secondary"
              icon={{
                name: 'Branch',
                size: 'Small',
                align: 'End'
              }}
              size="Small"
            >
              Filter Data
            </Button>
          )}
        </GridItem>
        <GridItem span={3}>
          {controls.buttonCustomiseTable && (
            <Popover
              render={header.map((x: any, i: number) => (
                <label key={`label-${x.id}`} className="label interactive p--sm w--100" htmlFor={`label-${x.id}-${i}`}>
                  <Checkbox
                    className="m--r-xs"
                    id={`label-${x.id}-${i}`}
                    value={x.visible}
                    onChange={() => setToggled(`label-${x.id}`)}
                  />
                  {x.name}
                </label>
              ))}
            >
              {(value) => (
                <RefButton
                  className="w--100"
                  variant="Secondary"
                  icon={{
                    name: 'Branch',
                    size: 'Small',
                    align: 'End'
                  }}
                  size="Small"
                  {...value}
                >
                  Customise Table
                </RefButton>
              )}
            </Popover>
          )}
        </GridItem>
        <GridItem span={4}>
          {controls.search && (
            <Input
              className="w--100"
              id={null}
              type="Text"
              value={''}
              placeholder="Search Data"
              size="Small"
              onChange={() => {}}
            />
          )}
        </GridItem>
        <GridItem className="m--l-auto" span={2}>
          {controls.buttonAddRow && (
            <Button
              icon={{
                name: 'Branch',
                size: 'Small',
                align: 'End'
              }}
              size="Small"
              onClick={() => addRow(null)}
            >
              Add Row
            </Button>
          )}
        </GridItem>
      </Grid>
    </header>
  )
}

export default DataTableControls
