import * as React from 'react'
import { render } from '@testing-library/react'
import { Table } from '.'

describe('----- Table Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Table>Test</Table>)
    expect(asFragment()).toMatchSnapshot()
  })
})
