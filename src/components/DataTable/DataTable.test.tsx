import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { DataTable } from '.'
import { IDataTable } from './types'

describe('----- DataTable Component -----', () => {
  jest.useFakeTimers()
  const testConfig: IDataTable.IProps = {
    type: 'form',
    controls: {
      global: {
        visible: true,
        search: true,
        buttons: [
          { align: 'Start', text: 'Filter Data', action: 'FILTER' },
          { align: 'Start', text: 'Customise Table', action: 'CUSTOMISE' },
          { align: 'End', text: 'Add Row', action: 'ADD_ROW' }
        ]
      },
      row: {
        visible: true,
        sendOnBlur: true,
        sendToEndpoint: '/my-test-endpoint',
        buttons: [
          { text: 'Copy', action: 'COPY_ROW' },
          { text: 'Lock', action: 'LOCK_ROW' },
          { text: 'Delete', action: 'DELETE_ROW' },
          { text: 'Load', action: 'LOAD_PAGE', href: '/' }
        ]
      },
      footer: {
        visible: true,
        rowCount: true,
        pagination: {
          pageLimit: 10
        }
      }
    },
    header: [
      {
        id: 'product_sku',
        name: 'Test Heading 1',
        visible: true,
        defaultWidth: 500
      },
      {
        id: 'product_description',
        name: 'Test Heading 2',
        visible: false
      },
      {
        id: 'unit_of_measure',
        name: 'Test Heading 3',
        visible: true
      },
      {
        id: 'quantity',
        name: 'Test Heading 4',
        visible: true
      },
      {
        id: 'batch',
        name: 'Test Heading 5',
        visible: true
      }
    ],
    rows: [
      [
        {
          id: 'product_sku',
          type: 'search',
          filterable: true,
          ignoreTab: true,
          options: [{ label: 'option1', value: 'value1' }]
        },
        {
          id: 'product_description',
          type: 'string'
        },
        {
          id: 'unit_of_measure',
          type: 'select',
          multi: true,
          options: [{ label: 'option1', value: 'value1' }]
        },
        { id: 'quantity', type: 'number', minValue: 5, maxValue: 10 },
        { id: 'batch', type: 'text', maxLength: 5 }
      ]
    ],
    data: Array.from(Array(2).keys()).map((x) => ({
      product_sku: 'sku sku',
      product_description: 'description description',
      unit_of_measure: 3,
      quantity: 11,
      batch: '123'
    })),
    onEvent: jest.fn()
  }

  describe('DataTable Base', () => {
    it('Renders without crashing', () => {
      const { asFragment } = render(<DataTable {...testConfig} />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('Renders loader', () => {
      const { getByTestId } = render(<DataTable {...testConfig} loadingState="Loading" />)
      expect(getByTestId('loader')).toBeTruthy()
    })

    it('Uses default pagination count', () => {
      render(
        <DataTable
          {...testConfig}
          controls={{
            ...testConfig.controls,
            footer: { ...testConfig.controls.footer, pagination: { pageLimit: 5 } }
          }}
        />
      )
    })
  })

  describe('DataTable Controls', () => {
    it('Toggles column', async () => {
      const { queryByText, queryAllByText } = render(<DataTable {...testConfig} />)
      const customiseTableBtn = queryByText('Customise Table')
      const columnToToggle = testConfig.header[0].name

      await act(async () => {
        fireEvent.click(customiseTableBtn)
      })

      const allElements = queryAllByText(columnToToggle)
      const toggleColumnBtn = allElements[1]

      expect(allElements.length).toBe(2)
      expect(toggleColumnBtn).toBeTruthy()

      fireEvent.click(toggleColumnBtn)

      const allElementsUpdated = queryAllByText(columnToToggle)
      expect(allElementsUpdated.length).toBe(1)
    })

    it('Search input fires onChange event', async () => {
      const { queryByPlaceholderText } = render(<DataTable {...testConfig} />)
      const searchInput = queryByPlaceholderText('Search Data')

      fireEvent.change(searchInput, {
        target: {
          value: 'a'
        }
      })
    })

    it('Adds row to table', async () => {
      const { queryAllByTestId, queryByText } = render(<DataTable {...testConfig} />)
      const addRowBtn = queryByText('Add Row')
      const allRows = queryAllByTestId('datatable-row')

      fireEvent.click(addRowBtn)

      const updatedRows = queryAllByTestId('datatable-row')
      expect(updatedRows.length).toBe(allRows.length + 1)
    })
  })

  describe('DataTable Body', () => {})

  describe('DataTable Rows', () => {
    it('Copies row', async () => {
      const { queryAllByTestId, queryByText } = render(<DataTable {...testConfig} />)
      const rowPopoverBtn = queryAllByTestId('datatable-row-popover-btn')[0]
      const allRows = queryAllByTestId('datatable-row')

      await act(async () => {
        fireEvent.click(rowPopoverBtn)
      })

      const copyRowBtn = queryByText('Copy')
      expect(copyRowBtn).toBeTruthy()

      fireEvent.click(copyRowBtn)

      const updatedRows = queryAllByTestId('datatable-row')
      expect(updatedRows.length).toBe(allRows.length + 1)
    })

    it('Locks & unlocks row', async () => {
      const { queryAllByTestId, queryByText } = render(<DataTable {...testConfig} />)
      const rowPopoverBtn = queryAllByTestId('datatable-row-popover-btn')[0]

      await act(async () => {
        fireEvent.click(rowPopoverBtn)
      })

      const lockRowBtn = queryByText('Lock')
      expect(lockRowBtn).toBeTruthy()

      fireEvent.click(lockRowBtn)

      expect(lockRowBtn.innerHTML).toEqual('Unlock')

      fireEvent.click(lockRowBtn)

      expect(lockRowBtn.innerHTML).toEqual('Lock')
    })

    it('Deletes row', async () => {
      const { queryAllByTestId, queryByText } = render(<DataTable {...testConfig} />)
      const rowPopoverBtn = queryAllByTestId('datatable-row-popover-btn')[0]

      await act(async () => {
        fireEvent.click(rowPopoverBtn)
      })

      const deleteRowBtn = queryByText('Delete')
      expect(deleteRowBtn).toBeTruthy()

      fireEvent.click(deleteRowBtn)

      const updatedRows = queryAllByTestId('datatable-row')
      expect(updatedRows.length).toBe(1)
    })

    it('Submits row', () => {
      const { queryAllByTestId } = render(<DataTable {...testConfig} />)
      const singleRow = queryAllByTestId('datatable-row')[0]

      fireEvent.blur(singleRow)
    })
  })

  describe('DataTable Cells', () => {})

  describe('DataTable Footer', () => {
    it('Hides row count', () => {
      const { queryByTestId } = render(
        <DataTable
          {...testConfig}
          controls={{ ...testConfig.controls, footer: { ...testConfig.controls.footer, rowCount: false } }}
        />
      )

      expect(queryByTestId('datatable-rowcount')).toBeFalsy()
    })

    it('Renders plural rows', () => {
      const { getByText } = render(
        <DataTable
          {...testConfig}
          rows={[
            [
              {
                id: 'test_cell_1',
                type: 'search',
                options: [
                  {
                    label: '200',
                    value: '200'
                  }
                ]
              },
              {
                id: 'test_cell_2',
                type: 'search',
                options: [
                  {
                    label: '200',
                    value: '200'
                  }
                ]
              }
            ]
          ]}
          data={[
            {
              test_cell_1: null,
              test_cell_2: null
            },
            {
              test_cell_1: null,
              test_cell_2: null
            }
          ]}
        />
      )

      expect(getByText('2 Rows')).toBeTruthy()
    })

    it('Paginates on input', () => {
      const { queryByTestId } = render(<DataTable {...testConfig} />)
      const paginationInput = queryByTestId('page-number')

      fireEvent.change(paginationInput, { target: { value: 2 } })
      fireEvent.change(paginationInput, { target: { value: NaN } })
    })

    it('Disables pagination controls correctly', () => {
      const { queryByText } = render(
        <DataTable
          {...testConfig}
          controls={{ ...testConfig.controls, footer: { ...testConfig.controls.footer, rowCount: 1 } }}
        />
      )

      const paginationPrevBtn = queryByText('Prev')
      expect(paginationPrevBtn.closest('button').disabled).toBeTruthy()

      const paginationNextBtn = queryByText('Next')
      expect(paginationNextBtn.closest('button').disabled).toBeTruthy()
    })
  })
})
