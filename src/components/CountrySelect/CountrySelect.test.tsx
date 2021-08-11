import * as React from 'react'
import { render } from '@testing-library/react'
import { CountrySelect } from '.'

describe('----- CountrySelect Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<CountrySelect>Test</CountrySelect>)
    expect(asFragment()).toMatchSnapshot()
  })
})
