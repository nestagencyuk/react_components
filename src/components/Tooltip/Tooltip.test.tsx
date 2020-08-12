import * as React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { Tooltip } from '.'
import { ITooltip } from './types'
import { RefButton } from '../Button'

describe('----- ToolTip Component -----', () => {
  const baseProps: ITooltip.IProps = {
    children: '',
    render: 'Some text'
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders without crashing', () => {
    const { asFragment } = render(<Tooltip {...baseProps}>Here be tips</Tooltip>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders with optional props', () => {
    render(
      <Tooltip {...baseProps} align="Bottom" trigger="Click">
        {(value: any) => <RefButton {...value}>A test button</RefButton>}
      </Tooltip>
    )
  })

  it('Renders function as children', () => {
    render(<Tooltip {...baseProps}>{(value: any) => <RefButton {...value}>A test button</RefButton>}</Tooltip>)
  })

  it('Triggers tooltip rendering', async () => {
    const { queryByText, queryByTestId } = render(
      <Tooltip render={<div>Test tooltip</div>} {...baseProps}>
        Test text
      </Tooltip>
    )
    const toolTipText = queryByText('Test text')
    expect(toolTipText).toBeTruthy()

    await act(async () => {
      fireEvent.focus(toolTipText)
    })

    const toolTipContainer = queryByTestId('toolTipContainer')
    expect(toolTipContainer).toBeTruthy()
  })
})
