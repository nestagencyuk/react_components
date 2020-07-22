import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DataTable } from '.'
import { IDataTable } from './types'

describe('----- DataTable Component -----', () => {
  const dataTableTestConfig: IDataTable.IConfig = {
    table: {
      header: {
        buttonCustomiseTable: false,
        buttonFilterData: false,
        buttonAddLine: false,
        hidden: false,
        search: true
      },
      footer: {
        hidden: false,
        rowCount: true
      }
    },
    columns: [
      {
        name: 'Second Test Column',
        hidden: false,
        displayOrder: 2
      },
      {
        name: 'First Test Column',
        hidden: false,
        displayOrder: 1
      },
      {
        name: 'Third Test Column',
        hidden: true,
        displayOrder: 3
      }
    ],
    rows: [
      {
        sendToEndpoint: '/some/api',
        sendOnBlur: false,
        cells: [
          {
            name: 'Test cell',
            belongsTo: 'First Test Column'
          }
        ]
      }
    ]
  }

  describe('Base', () => {
    it('Renders without crashing', () => {
      const { asFragment } = render(<DataTable config={dataTableTestConfig} />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('Hides DataTableHeader and DataTableFooter', () => {
    const { queryByTestId } = render(
      <DataTable
        config={{
          table: {
            header: { ...dataTableTestConfig.table.header, hidden: true },
            footer: { ...dataTableTestConfig.table.footer, hidden: true }
          },
          columns: dataTableTestConfig.columns,
          rows: dataTableTestConfig.rows
        }}
      />
    )
    expect(queryByTestId('datatable-header')).toBeFalsy()
    expect(queryByTestId('datatable-footer')).toBeFalsy()
  })

  describe('DataTable Header', () => {
    const baseDataTableHeader = (prop: string) => (
      <DataTable
        config={{
          table: { header: { ...dataTableTestConfig.table.header, [prop]: true }, footer: dataTableTestConfig.table.footer },
          columns: dataTableTestConfig.columns,
          rows: dataTableTestConfig.rows
        }}
      />
    )

    it('Renders customise button', () => {
      const { queryByText } = render(baseDataTableHeader('buttonCustomiseTable'))
      expect(queryByText('Customise Table')).toBeTruthy()
    })

    it('Renders filter button', () => {
      const { queryByText } = render(baseDataTableHeader('buttonFilterData'))
      expect(queryByText('Filter Data')).toBeTruthy()
    })

    it('Renders search field', () => {
      const { queryByPlaceholderText } = render(baseDataTableHeader('search'))
      expect(queryByPlaceholderText('Search Data')).toBeTruthy()
    })

    it('Renders add line button', () => {
      const { queryByText } = render(baseDataTableHeader('buttonAddLine'))
      expect(queryByText('Add Line')).toBeTruthy()
    })

    it('Opens dropdown and hides column', () => {
      const { queryByText, queryAllByText } = render(baseDataTableHeader('buttonCustomiseTable'))
      const customiseTableButton = queryByText('Customise Table')

      // Open dropdown
      fireEvent.click(customiseTableButton)

      // Get columns and checkboxes with related names
      const allElements = queryAllByText('First Test Column')
      const toggleColumnButton = allElements[1]

      expect(allElements.length).toBe(2)
      expect(toggleColumnButton).toBeTruthy()

      // Toggle column
      fireEvent.click(toggleColumnButton)

      // Get updated state of columns and checkboxes
      const allElementsUpdated = queryAllByText('First Test Column')

      expect(allElementsUpdated.length).toEqual(1)
    })

    it('Adds new row', () => {
      const { queryByText } = render(baseDataTableHeader('buttonAddLine'))
      const addNewRowButton = queryByText('Add Line')

      fireEvent.click(addNewRowButton)

      expect(queryByText('2 Lines')).toBeTruthy()
    })
  })

  describe('Datatable Body', () => {
    it('Renders columns by displayOrder', () => {
      const { queryAllByTestId } = render(<DataTable config={dataTableTestConfig} />)
      const firstColumnToRender = dataTableTestConfig.columns[1]
      const firstColumnRendered = queryAllByTestId('datatable-column')[0]

      expect(firstColumnRendered.innerHTML).toEqual(firstColumnToRender.name)
    })
  })
})
