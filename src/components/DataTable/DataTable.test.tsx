import * as React from 'react'
import { render } from '@testing-library/react'
import { DataTableContext, DataTable, DataTableHeader } from '.'

const config = require('./DataTableConfig.json')

describe('----- DataTable Component -----', () => {
  const dataTableHeaderTestConfig = {
    buttonCustomiseTable: false,
    buttonFilterData: false,
    buttonAddLine: false,
    hidden: false,
    search: true
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
          <DataTableContext config={{ table: { header: { ...dataTableHeaderTestConfig, hidden: true } } }}>
            {() => <DataTable />}
          </DataTableContext>
        )
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('DataTableHeader', () => {
    it('Correctly hides DataTableHeader buttons', () => {
      const mountComponentInContext = () => render(<DataTableHeader config={dataTableHeaderTestConfig} />)
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
