import * as React from 'react'
import { render } from '@testing-library/react'
import { DataTableContext, DataTable, DataTableHeader } from '.'

describe('----- DataTable Component -----', () => {
  const config = {
    table: {
      header: {
        hidden: false,
        buttonCustomiseTable: false,
        buttonFilterData: false,
        buttonAddLine: false,
        search: false
      },
      footer: {
        hidden: false
      }
    }
  }

  describe('Base', () => {
    it('Renders without crashing', () => {
      const { asFragment } = render(<DataTableContext config={config}>{() => <DataTable />}</DataTableContext>)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('DataTable Header', () => {
    it('Correctly shows filter button', () => {
      const { queryByText } = render(<DataTableHeader config={{ ...config.table.header, buttonFilterData: true }} />)
      expect(queryByText('Filter Data')).toBeTruthy()
    })

    it('Correctly shows customise button', () => {
      const { queryByText } = render(<DataTableHeader config={{ ...config.table.header, buttonCustomiseTable: true }} />)
      expect(queryByText('Customise Table')).toBeTruthy()
    })

    it('Correctly shows customise button', () => {
      const { queryByPlaceholderText } = render(<DataTableHeader config={{ ...config.table.header, search: true }} />)
      expect(queryByPlaceholderText('Search Data')).toBeTruthy()
    })

    it('Correctly shows add line button', () => {
      const { queryByText } = render(<DataTableHeader config={{ ...config.table.header, buttonAddLine: true }} />)
      expect(queryByText('Add Line')).toBeTruthy()
    })
  })
})
