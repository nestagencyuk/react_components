import * as React from 'react'
import { render } from '@testing-library/react'
import { DataTableContext, DataTable, DataTableHeader } from '.'

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

  describe('Base', () => {
    it('Renders without crashing', () => {
      const { asFragment } = render(<DataTableContext config={dataTableTestConfig}>{() => <DataTable />}</DataTableContext>)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('Correctly hides DataTableHeader', () => {
    const mountComponentInContext = () =>
      render(
        <DataTableContext
          config={{
            table: { header: { ...dataTableTestConfig.table.header, hidden: true } },
            columns: dataTableTestConfig.columns
          }}
        >
          {() => <DataTable />}
        </DataTableContext>
      )
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })

  describe('DataTable Header', () => {
    const baseDataTableHeader = (prop: string) => (
      <DataTableContext
        config={{
          table: { header: { ...dataTableTestConfig.table.header, [prop]: true } },
          columns: dataTableTestConfig.columns
        }}
      >
        {() => <DataTableHeader />}
      </DataTableContext>
    )

    it('Correctly renders customise button', () => {
      const { queryByText } = render(baseDataTableHeader('buttonCustomiseTable'))
      expect(queryByText('Customise Table')).toBeTruthy()
    })

    it('Correctly renders filter button', () => {
      const { queryByText } = render(baseDataTableHeader('buttonFilterData'))
      expect(queryByText('Filter Data')).toBeTruthy()
    })

    it('Correctly renders search field', () => {
      const { queryByPlaceholderText } = render(baseDataTableHeader('search'))
      expect(queryByPlaceholderText('Search Data')).toBeTruthy()
    })

    it('Correctly renders add line button', () => {
      const { queryByText } = render(baseDataTableHeader('buttonAddLine'))
      expect(queryByText('Add Line')).toBeTruthy()
    })
  })
})
