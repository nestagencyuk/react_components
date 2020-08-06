import * as React from 'react'
import { render } from '@testing-library/react'
import { DataTable } from '.'
import { IDataTable } from './types'
import uid from 'uid'

describe('----- DataTable Component -----', () => {
  it('Renders without crashing', () => {
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
          <DataTable config={testConfig.config} header={testConfig.header} data={testConfig.data} />
        )

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
