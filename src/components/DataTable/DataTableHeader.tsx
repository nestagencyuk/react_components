import { IDataTable } from './types'
import * as React from 'react'
import { useContext, useState } from 'react'
import { DataTableContext } from './DataTableContext'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { Checkbox } from '../Checkbox'
import { DataTableDropDown } from '.'
import { Button } from '../Button'
import { Input } from '../Input'

/**
 * A datatable that displays table controls
 */
const DataTableHeader: React.FC<IDataTable.IDataTableHeaderProps> = () => {
  const { config, toggleColumn, columnsState } = useContext(DataTableContext)
  const { table, columns } = config
  const { buttonAddLine, buttonCustomiseTable, buttonFilterData, search } = table.header
  const [showCustomiseMenu, toggleCustomiseMenu] = useState(false)

  return (
    <div className="datatable__header">
      <div>
        {buttonFilterData && (
          <Button
            className="m--r-sm"
            variant="Tertiary"
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
        {buttonCustomiseTable && (
          <span className="datatable__header-item">
            <Button
              onClick={() => toggleCustomiseMenu(!showCustomiseMenu)}
              className="m--r-sm"
              variant="Tertiary"
              icon={{
                name: 'Branch',
                size: 'Small',
                align: 'End'
              }}
              size="Small"
            >
              Customise Table
            </Button>
            {showCustomiseMenu && (
              <DataTableDropDown>
                {columns.map((col) => (
                  <div className="datatable__drop-down-item">
                    <Checkbox
                      value={columnsState[col.name] ? !columnsState[col.name] : !col.hidden}
                      onChange={() => toggleColumn(col.name)}
                      className="m--r-xs"
                      id={col.name}
                    />
                    <label className="interactive" htmlFor={col.name}>
                      {col.name}
                    </label>
                  </div>
                ))}
              </DataTableDropDown>
            )}
          </span>
        )}
        {search && <Input onChange={() => alert('search')} placeholder="Search Data" size="Small" type="Text" id="Search" />}
      </div>
      {buttonAddLine && (
        <Button
          variant="Tertiary"
          icon={{
            name: 'Branch',
            size: 'Small',
            align: 'End'
          }}
          size="Small"
        >
          Add Line
        </Button>
      )}
    </div>
  )
}

export default DataTableHeader
