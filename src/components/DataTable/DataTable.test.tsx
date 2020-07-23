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
        name: 'First Test Column',
        hidden: false,
        displayOrder: 2,
        sortable: true,
        defaultSort: 'desc',
        resizableWidth: true,
        defaultWidth: 100,
        minWidth: 100,
        maxWidth: 300
      },
      {
        name: 'Second Test Column',
        hidden: false,
        displayOrder: 1,
        sortable: true,
        defaultSort: 'desc',
        resizableWidth: true,
        defaultWidth: 100,
        minWidth: 100,
        maxWidth: 300
      },
      {
        name: 'Third Test Column',
        hidden: true,
        displayOrder: 3,
        sortable: true,
        defaultSort: 'desc',
        resizableWidth: true,
        defaultWidth: 100,
        minWidth: 100,
        maxWidth: 300
      }
    ],
    rows: [
      {
        sendToEndpoint: '/some/api',
        sendOnBlur: false,
        cells: [
          {
            type: 'search',
            name: 'Test Cell 1',
            id: null,
            value: null,
            placeholder: null,
            multiple: false,
            required: true,
            readOnly: false,
            ignoreTab: false,
            tabIndex: null,
            includeInObject: true,
            sendOnBlur: false,
            sendOnChange: false,
            sendOnWait: true,
            sendOnTrigger: true,
            sendMethod: 'GET',
            sendToEndpoint: '/products?sku=',
            responseValue: 'product_id',
            responseDisplay: 'sku',
            triggerUpdate: ['description', 'uom'],
            belongsTo: 'First Test Column',
            searchable: true,
            options: [
              {
                label: '100',
                value: '100'
              },
              {
                label: '200',
                value: '200'
              }
            ]
          },
          {
            type: 'string',
            name: 'Test Cell 2',
            includeInObject: false,
            sendOnTrigger: true,
            sendMethod: 'GET',
            sendToEndpoint: '/products/',
            responseDisplay: 'description',
            searchable: true,
            belongsTo: 'Second Test Column'
          },
          {
            type: 'text',
            name: 'Test Cell 3',
            id: null,
            value: null,
            placeholder: null,
            required: true,
            minLength: null,
            maxLength: null,
            pattern: null,
            readOnly: false,
            ignoreTab: false,
            tabIndex: null,
            includeInObject: true,
            sendOnBlur: false,
            sendOnWait: false,
            sendOnTrigger: true,
            sendMethod: null,
            sendToEndpoint: null,
            responseValue: null,
            triggerInputs: null,
            searchable: true,
            belongsTo: 'Third Test Column'
          },
          {
            type: 'number',
            name: 'Test Cell 4',
            id: null,
            value: null,
            placeholder: null,
            required: true,
            minValue: null,
            maxValue: null,
            step: null,
            readOnly: false,
            ignoreTab: false,
            tabIndex: null,
            includeInObject: true,
            sendOnBlur: false,
            sendOnWait: false,
            sendOnTrigger: true,
            sendMethod: null,
            sendToEndpoint: null,
            responseValue: null,
            triggerInputs: null,
            belongsTo: 'Fourth Test Column',
            searchable: true
          },
          {
            type: 'text',
            name: 'Test Cell 5',
            id: null,
            value: null,
            placeholder: null,
            required: true,
            minLength: null,
            maxLength: null,
            pattern: null,
            readOnly: false,
            ignoreTab: false,
            tabIndex: null,
            includeInObject: true,
            sendOnBlur: false,
            sendOnWait: false,
            sendOnTrigger: true,
            sendMethod: null,
            sendToEndpoint: null,
            responseValue: null,
            triggerInputs: null,
            searchable: true,
            belongsTo: 'Fifth Test Column'
          },
          {
            type: 'select',
            name: 'Test Cell 6',
            includeInObject: true,
            belongsTo: 'Sixth Test Column',
            options: [
              {
                label: 'test',
                value: 'test'
              }
            ]
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
