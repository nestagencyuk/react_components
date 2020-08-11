import * as React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import { DataTable } from '.'
import { IDataTable } from './types'

const chance = new (require('chance'))()

const testLimit = 10
const testSKUS = Array.from(Array(testLimit).keys()).map((x) => chance.word())
const testDescriptions = Array.from(Array(testLimit).keys()).map((x) => chance.paragraph())
const testUOMs = ['mm', 'cm', 'm', 'inch', 'feet', 'yard', 'ltr', 'gallon']
const testQuantities = Array.from(Array(testLimit).keys()).map((x) => chance.integer({ min: 5, max: 10 }))
const testBatch = Array.from(Array(testLimit).keys()).map((x) => chance.word())

describe('----- DataTable Component -----', () => {
  const testConfig: IDataTable.IProps = {
    onSubmit: () => null,
    controls: {
      global: {
        visible: true,
        search: true,
        buttonFilterData: true,
        buttonCustomiseTable: true,
        buttonAddRow: true
      },
      row: {
        visible: true
      },
      footer: {
        visible: true,
        rowCount: true,
        pagination: {
          pageLimit: null
        }
      }
    },
    header: [
      {
        id: 'test_heading_1',
        name: 'Test Heading 1',
        visible: true,
        defaultWidth: 500
      },
      {
        id: 'test_heading_2',
        name: 'Test Heading 2',
        visible: false
      }
    ],
    rows: [
      [
        {
          id: 'test_cell_1',
          name: 'test_cell_1',
          value: null,
          type: 'search',
          options: [
            {
              label: '200',
              value: '200'
            }
          ]
        }
      ]
    ],
    data: [
      Array.from(Array(50).keys()).map((x) => ({
        product_sku: chance.pickone(testSKUS),
        product_description: chance.pickone(testDescriptions),
        unit_of_measure: chance.pickset(testUOMs, chance.integer({ min: 1, max: 5 })),
        quantity: chance.pickone(testQuantities),
        batch: chance.pickone(testBatch)
      }))
    ]
  }

  describe('DataTable Base', () => {
    it('Renders without crashing', () => {
      const { asFragment } = render(<DataTable {...testConfig} />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('Renders loader', () => {
      const { getByTestId } = render(<DataTable {...testConfig} loading />)
      expect(getByTestId('loader')).toBeTruthy()
    })

    it('Uses default pagination count', () => {
      render(
        <DataTable
          {...testConfig}
          controls={{ ...testConfig.controls, footer: { ...testConfig.controls.footer, pagination: { pageLimit: null } } }}
        />
      )
    })
  })

  describe('DataTable Controls', () => {
    it('Hides global controls', () => {
      const { queryByTestId } = render(
        <DataTable
          {...testConfig}
          controls={{ ...testConfig.controls, global: { ...testConfig.controls.global, visible: false } }}
        />
      )

      expect(queryByTestId('dataTableGlobalControls')).toBeFalsy()
    })

    it('Hides filter table button', () => {
      const { queryByText } = render(
        <DataTable
          {...testConfig}
          controls={{ ...testConfig.controls, global: { ...testConfig.controls.global, buttonFilterData: false } }}
        />
      )

      expect(queryByText('Filter Data')).toBeFalsy()
    })

    it('Hides customise table button', () => {
      const { queryByText } = render(
        <DataTable
          {...testConfig}
          controls={{ ...testConfig.controls, global: { ...testConfig.controls.global, buttonCustomiseTable: false } }}
        />
      )

      expect(queryByText('Customise Table')).toBeFalsy()
    })

    it('Hides search input', () => {
      const { queryByPlaceholderText } = render(
        <DataTable
          {...testConfig}
          controls={{ ...testConfig.controls, global: { ...testConfig.controls.global, search: false } }}
        />
      )

      expect(queryByPlaceholderText('Search Data')).toBeFalsy()
    })
  })

  describe('DataTable Body', () => {})
  describe('DataTable Rows', () => {})
  describe('DataTable Cells', () => {})

  describe('DataTable Footer', () => {
    it('Hides row count', () => {
      const { queryByTestId } = render(
        <DataTable
          {...testConfig}
          controls={{ ...testConfig.controls, footer: { ...testConfig.controls.footer, rowCount: false } }}
        />
      )

      expect(queryByTestId('dataTableRowCount')).toBeFalsy()
    })

    it('Renders plural rows', () => {
      const { getByText } = render(
        <DataTable
          {...testConfig}
          rows={[
            [
              {
                id: 'test_cell_1',
                name: 'test_cell_1',
                value: null,
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
                name: 'test_cell_2',
                value: null,
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
  })
})
