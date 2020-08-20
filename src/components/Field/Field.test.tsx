import * as React from 'react'
import { render } from '@testing-library/react'
import { Field } from '.'
import { IField } from './types'

describe('----- Field Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IField.IProps = {
    id: 'field',
    label: 'This is a test label',
    uiState: 'Info',
    msg: 'This is my message',
    onChange: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Field {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders a select', () => {
    render(
      <Field
        {...baseProps}
        type="Select"
        options={[
          { value: '1-9', label: '1 - 9' },
          { value: '10-19', label: '10 - 19' },
          { value: '20-29', label: '20 - 29' },
          { value: '30-39', label: '30 - 39' },
          { value: '40-49', label: '40 - 49' }
        ]}
      />
    )
  })

  it('Renders a checkbox', () => {
    render(<Field {...baseProps} type="Checkbox" />)
  })

  it('Renders a radio', () => {
    render(<Field {...baseProps} type="Radio" />)
  })

  it('Renders a textarea', () => {
    render(<Field {...baseProps} type="Textarea" />)
  })
})
