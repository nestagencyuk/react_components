import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DataTable } from '.'
import { IDataTable } from './types'

describe('----- DataTable Component -----', () => {
  const testConfig: IDataTable.IProps = {
    config: {
      tableControls: {
        visible: true
      },
      rowControls: {
        visible: true
      },
      footerControls: {
        visible: true
      }
    },
    headings: [
      {
        id: 'test_heading_1',
        name: 'Test Heading 1',
        visible: true
      }
    ],
    data: [
      [
        {
          id: 'test_cell_1',
          name: 'test_cell_1',
          type: 'search',
          value: '400',
          options: [
            {
              label: '200',
              value: '200'
            }
          ]
        }
      ]
    ]
  }

  describe('Base', () => {
    it('Renders without crashing', () => {
      const { asFragment } = render(
        <DataTable config={testConfig.config} headings={testConfig.headings} data={testConfig.data} />
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
