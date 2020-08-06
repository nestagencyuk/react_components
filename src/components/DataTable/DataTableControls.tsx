import { IDataTable } from './types'
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
    header.forEach((x: any) => !x.visible && setToggled(x.id))
  }, [])

  /**
   * On toggle change, set the visibility of the header
   */
  useEffect(() => {
    onChange(header.map((x: any) => ({ ...x, visible: !toggles[x.id] })))
  }, [toggles])

  return (
    <header>
      <Grid gutter>
        {controls.buttonFilterData && (
          <GridItem span={3}>
            <Button
              variant="Tertiary"
              className="w--100"
              icon={{
                name: 'Branch',
                size: 'Small',
                align: 'End'
              }}
              size="Small"
            >
              Filter Data
            </Button>
          </GridItem>
        )}
        {controls.buttonCustomiseTable && (
          <GridItem span={3}>
            <Popover
              render={header.map((x: any) => (
                <div key={x.id}>
                  <label className="interactive" htmlFor={x.name}>
                    <Checkbox id={x.name} value={x.visible} className="m--r-xs" onChange={() => setToggled(x.id)} />
                    {x.name}
                  </label>
                </div>
              ))}
            >
              {(value) => (
                <RefButton
                  variant="Tertiary"
                  className="w--100"
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
          </GridItem>
        )}
        {controls.search && (
          <GridItem span={3}>
            <div>
              <Input id="Search" type="Text" value={''} placeholder="Search Data" size="Small" onChange={() => {}} />
            </div>
          </GridItem>
        )}
        {controls.buttonAddRow && (
          <GridItem span={3} className="m--l-auto">
            <Button
              variant="Tertiary"
              className="w--100"
              icon={{
                name: 'Branch',
                size: 'Small',
                align: 'End'
              }}
              size="Small"
              onClick={() => addRow(null)}
            >
              Add Line
            </Button>
          </GridItem>
        )}
      </Grid>
    </header>
  )
}

export default DataTableControls
