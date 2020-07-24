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
import { Checkbox } from '../Checkbox'
import { RefButton, Button } from '../Button'
import { Input } from '../Input'
import { Grid, GridItem } from '../Grid'
import { Popover } from '../Popover'

/**
 * A datatable that displays table controls
 */
const DataTableHeader: React.FC = () => {
  const { config, toggleColumn, columnsState, addNewRow, searchRows, rowSearchQuery } = useContext(DataTableContext)
  const { table, columns } = config
  const { buttonAddLine, buttonCustomiseTable, buttonFilterData, search } = table.header

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
              render={columns.map((col: IDataTable.IColumn) => (
                <div key={col.name} className="datatable__drop-down-item">
                  <Checkbox
                    onChange={() => toggleColumn(col.name)}
                    value={!columnsState[col.name]}
                    className="m--r-xs"
                    id={col.name}
                  />
                  <label className="interactive" htmlFor={col.name}>
                    {col.name}
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

export default DataTableHeader
