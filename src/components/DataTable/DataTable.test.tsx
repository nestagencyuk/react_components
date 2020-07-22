import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DataTable } from '.'

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
        name: 'Second Test Column',
        hidden: false,
        displayOrder: 2
      },
      {
        name: 'First Test Column',
        hidden: false,
        displayOrder: 1
      }
    ]
  }

  describe('Base', () => {
    it('Renders without crashing', () => {
      const { asFragment } = render(<DataTable config={dataTableTestConfig} />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('Hides DataTableHeader', () => {
    const { queryByTestId } = render(
      <DataTable
        config={{
          table: { header: { ...dataTableTestConfig.table.header, hidden: true } },
          columns: dataTableTestConfig.columns
        }}
      />
    )
    expect(queryByTestId('datatable-header')).toBeFalsy()
  })

  describe('DataTable Header', () => {
    const baseDataTableHeader = (prop: string) => (
      <DataTable
        config={{
          table: { header: { ...dataTableTestConfig.table.header, [prop]: true } },
          columns: dataTableTestConfig.columns
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
      const [toggleColumnButton] = allElements

      expect(allElements.length).toBe(3)
      expect(toggleColumnButton).toBeTruthy()

      fireEvent.click(toggleColumnButton)

      // Get updated state of columns and checkboxes
      const allElementsUpdated = queryAllByText('First Test Column')
      const [toggleColumnButtonUpdated, columnToToggleUpdated] = allElementsUpdated

      expect(columnToToggleUpdated).toBeFalsy()
      expect(allElementsUpdated.length).toBe(1)
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
