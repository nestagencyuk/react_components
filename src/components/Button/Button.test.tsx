import * as React from 'react'
import { render } from '@testing-library/react'
import { Button, ButtonGroup } from '.'

describe('----- Button Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Button>Test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('ButtonGroup', () => {
    it('Renders with props', () => {
      render(
        <ButtonGroup className="test__class">
          <Button className="test__button">Test Button</Button>
        </ButtonGroup>
      )
    })
  })
})
