import * as React from 'react'
import { render } from '@testing-library/react'
import { PageHeader } from '.'

describe('PageHeader Component', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<PageHeader>Test</PageHeader>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders fixed variant without crashing', () => {
    const { asFragment } = render(<PageHeader variant="Fixed">Test</PageHeader>)

    expect(asFragment()).toMatchSnapshot()
  })
})
