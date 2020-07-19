import { IDataTable } from './types'
import * as React from 'react'
import { useContext, useState } from 'react'
import { DataTableContext } from '.'

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
const DataTableHeader: React.FC = () => {
  const { config, toggleColumn, columnsState } = useContext(DataTableContext)
  const { table, columns } = config
  const { buttonAddLine, buttonCustomiseTable, buttonFilterData, search } = table.header
  const [showCustomiseMenu, toggleCustomiseMenu] = useState(false)

  return (
    <header className="datatable-header">
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
        <span className="datatable-header__item">
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
              {columns.map((col: IDataTable.IColumn) => (
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
            </DataTableDropDown>
          )}
        </span>
      )}
      {search && <Input onChange={() => alert('search')} placeholder="Search Data" size="Small" type="Text" id="Search" />}
      {buttonAddLine && (
        <Button
          variant="Tertiary"
          className="m--l-auto"
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
    </header>
  )
}

export default DataTableHeader
