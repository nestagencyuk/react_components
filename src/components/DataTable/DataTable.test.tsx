import * as React from 'react'
import { render } from '@testing-library/react'
import { DataTableContext, DataTable, DataTableHeader } from '.'

const config = require('./DataTableConfig.json')

describe('----- DataTable Component -----', () => {
  const dataTableTestConfig = {
    table: {
      header: {
        buttonCustomiseTable: false,
        buttonFilterData: false,
        buttonAddLine: false,
        hidden: false,
        search: true
      }
    },
    columns: [
      {
        name: 'First Test Column',
        hidden: false
      }
    ]
  }

  describe('base', () => {
    it('Renders without crashing', () => {
      const mountComponentInContext = () =>
        render(<DataTableContext config={config}>{() => <DataTable />}</DataTableContext>)
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Correctly hides DataTableHeader', () => {
      const mountComponentInContext = () =>
        render(
          <DataTableContext
            config={{
              columns: dataTableTestConfig.columns,
              table: { header: { ...dataTableTestConfig.table.header, hidden: true } }
            }}
          >
            {() => <DataTable />}
          </DataTableContext>
        )
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
