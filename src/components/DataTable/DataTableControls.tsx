import { IDataTable } from './types'
import * as React from 'react'
import { useContext } from 'react'
import { DataTableContext } from '.'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { RefButton, Button } from '../Button'
import { Grid, GridItem } from '../Grid'
import { Checkbox } from '../Checkbox'
import { Popover } from '../Popover'
import { Input } from '../Input'

/**
 * A datatable that displays table controls
 */
const DataTableControls: React.FC<IDataTable.ITableControls> = ({
  buttonCustomiseTable = true,
  buttonFilterData = true,
  buttonAddLine = true,
  search = true
}) => {
  const { headings, toggleColumn, columnsState, addNewRow, searchRows, rowSearchQuery } = useContext(DataTableContext)

  return (
    <header className="datatable-header m--b-md" data-testid="datatable-header">
      <Grid gutter>
        {buttonFilterData && (
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
        {buttonCustomiseTable && (
          <GridItem span={3}>
            <Popover
              render={headings.map((heading: any) => (
                <div key={heading.id} className="datatable__drop-down-item">
                  <label className="interactive" htmlFor={heading.name}>
                    <Checkbox
                      onChange={() => toggleColumn(heading.id)}
                      value={!columnsState[heading.id]}
                      className="m--r-xs"
                      id={heading.name}
                    />
                    {heading.name}
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
        {search && (
          <GridItem span={3}>
            <div>
              <Input
                onChange={searchRows}
                value={rowSearchQuery}
                placeholder="Search Data"
                size="Small"
                type="Text"
                id="Search"
              />
            </div>
          </GridItem>
        )}
        {buttonAddLine && (
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
              onClick={() => addNewRow()}
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
