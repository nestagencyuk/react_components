import * as React from 'react'
import { render } from '@testing-library/react'
import { Alert, AlertHeader, AlertFooter } from '.'
import { IAlert } from './types'

describe('----- Alert Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IAlert.IProps = {
    children: '',
    onClose: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Alert {...baseProps}>Alert</Alert>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders optional props', () => {
    render(
      <Alert {...baseProps} variant="Info" openState="Closed">
        Alert
      </Alert>
    )
  })

  describe('Alert footer', () => {
    it('Renders with actions', () => {
      render(
        <AlertFooter
          actions={[
            { text: 'No', variant: 'Tertiary', size: 'Small', onClick: () => alert('No') },
            { text: 'Yes', variant: 'Primary', size: 'Small', onClick: () => alert('Yes') }
          ]}
        />
      )
    })
  })

  describe('Alert header', () => {
    it('Renders with heading', () => {
      render(<AlertHeader heading="This is a test header for my alert" />)
    })
  })
})
