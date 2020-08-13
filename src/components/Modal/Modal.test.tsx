import * as React from 'react'
import { render } from '@testing-library/react'
import { Modal } from '.'
import { IModal } from './types'

describe('----- Modal Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IModal.IProps = {
    children: '',
    onClose: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Modal {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders with optional props', () => {
    render(<Modal {...baseProps} state="Closed" />)
  })

  it('Renders with children', () => {
    const { getByText } = render(<Modal {...baseProps} children="Some test content" />)

    expect(getByText('Some test content')).toBeTruthy()
  })

  it('Renders footer with actions', () => {
    render(
      <Modal
        {...baseProps}
        footer={{
          actions: [
            { text: 'Close', variant: 'Tertiary', size: 'Small' },
            { text: 'OK', variant: 'Primary', size: 'Small' }
          ]
        }}
        children="Some test content"
      />
    )
  })

  it('Renders header with headings', () => {
    render(<Modal {...baseProps} header={{ heading: 'Heading', subheading: 'Subheading' }} children="Some test content" />)
  })
})
