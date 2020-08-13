import * as React from 'react'
import { render } from '@testing-library/react'
import { Footer } from '.'

describe('----- Footer Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Footer></Footer>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders with sub info', () => {
    const { getByText } = render(
      <Footer
        subInfo="Some test info"
        actions={[
          { text: 'No', variant: 'Tertiary', size: 'Small', onClick: () => alert('No') },
          { text: 'Yes', variant: 'Primary', size: 'Small', onClick: () => alert('Yes') }
        ]}
      />
    )
    expect(getByText('Some test info')).toBeTruthy()
  })
})
