import * as React from 'react'
import { render } from '@testing-library/react'
import { DataTable } from '.'
import { IDataTable } from './types'

describe('----- DataTable Component -----', () => {
  const testConfig: IDataTable.IProps = {
    controls: {
      global: {
        visible: true
      },
      row: {
        visible: true
      },
      footer: {
        visible: true
      }
    },
    header: [
      {
        id: 'test_heading_1',
        name: 'Test Heading 1',
        visible: true
      }
    ],
    rows: [
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
        }
      ]
    ],
    data: [{ test_cell_1: null }]
  }

  describe('Base', () => {
    it('Renders without crashing', () => {
      const { asFragment } = render(
        <DataTable
          controls={testConfig.controls}
          header={testConfig.header}
          rows={testConfig.rows}
          data={testConfig.data}
          onSubmit={jest.fn}
        />
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
