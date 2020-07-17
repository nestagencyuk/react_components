import { IDataTable } from './types'
import * as React from 'react'

/**
 * Styles
 */
import './DataTable.scss'

/**
 * Components
 */
import { Button } from '../Button'
import { Input } from '../Input'

/**
 * A datatable that displays table controls
 */
const DataTableHeader: React.FC<IDataTable.IDataTableHeaderProps> = ({ config }) => {
  const { buttonAddLine, buttonCustomiseTable, buttonFilterData, search } = config
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
            Customise Table
          </Button>
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
