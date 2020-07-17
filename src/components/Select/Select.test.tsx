import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Select } from '.'
import { ISelect } from './types'

describe('----- Select Component -----', () => {
  let value: string[] = null
  const mockFn = jest.fn((val) => {
    value = val
  })
  const baseProps: ISelect.IProps = {
    id: 'Select',
    options: [
      { label: 'Option One', value: 'option-1' },
      { label: 'Option Two', value: 'option-2' },
      { label: 'Option Three', value: 'option-3' },
      { label: 'Option Four', value: 'option-4' },
      { label: 'Option Five', value: 'option-5' },
      { label: 'Option Six', value: 'option-6' },
      { label: 'Option Seven', value: 'option-7' },
      { label: 'Option Eight', value: 'option-8' },
      { label: 'Option Nine', value: 'option-9' },
      { label: 'Option Ten', value: 'option-10' },
      { label: 'Option Eleven', value: 'option-11' }
    ],
    onChange: mockFn
  }

  beforeEach(() => {
    jest.clearAllMocks()
    value = null
  })

  describe('Base', () => {
    const mountComponentInContext = () => render(<Select {...baseProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Opens the options list', () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const options = getByTestId(`${baseProps.id}-options`)

      fireEvent.focus(select)
      expect(options.style.display).toEqual('block')
    })

    it('Chooses an option and passes to onChange', () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const optionOne = getByText(baseProps.options[0].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith(baseProps.options[0].value)
    })

    it('Shows the option label, not value', () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      fireEvent.focus(select)
      const options = getByTestId(`${baseProps.id}-options`)
      options.childNodes.forEach((x, i) => {
        expect(x.textContent).toEqual(baseProps.options[i].label)
      })
    })

    it('Closes when clicked away', () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const options = getByTestId(`${baseProps.id}-options`)

      fireEvent.blur(select)
      expect(options.style.display).toEqual('none')
    })
  })

  describe('Placeholder', () => {
    const mountComponentInContext = () => render(<Select {...baseProps} placeholder="Custom Placeholder" />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Shows custom placeholder', () => {
      const { queryByPlaceholderText } = mountComponentInContext()
      const select = queryByPlaceholderText('Custom Placeholder')
      expect(select).toBeTruthy()
    })
  })

  describe('Initial value', () => {
    const mountComponentInContext = () => render(<Select {...baseProps} value="option-1" />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Has initial value', () => {
      mountComponentInContext()
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('option-1')
    })
  })

  describe('Initial value Multi', () => {
    const mountComponentInContext = () => render(<Select {...baseProps} value={['option-1', 'option-2']} multi />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Has initial value', () => {
      mountComponentInContext()
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith(['option-1', 'option-2'])
    })
  })

  describe('Optional', () => {
    const mountComponentInContext = () => render(<Select {...baseProps} optional />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Chooses null', () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const optionNull = getByText('-- Select --')

      fireEvent.focus(select)
      fireEvent.click(optionNull)
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith(null)
    })
  })

  describe('Multi', () => {
    const multiProps: ISelect.IProps = {
      ...baseProps,
      multi: true
    }

    const mountComponentInContext = () => render(<Select {...multiProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Opens the options list', () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const options = getByTestId(`${multiProps.id}-options`)

      fireEvent.focus(select)
      expect(options.style.display).toEqual('block')
    })

    it('Checks an option and passes to onChange', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)
      const optionOne = getByText(multiProps.options[0].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      rerender(<Select {...multiProps} value={value} />)

      expect(value).toEqual(['option-1'])
      expect(input).toHaveProperty('value', '1 Selected')
    })

    it('Unchecks the same option', () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)
      const optionOne = getByText(multiProps.options[0].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      fireEvent.click(optionOne)

      expect(value).toEqual(null)
      expect(input).toHaveProperty('value', '0 Selected')
    })

    it('Chooses multiple options', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)
      const optionOne = getByText(multiProps.options[0].label)
      const optionTwo = getByText(multiProps.options[1].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      fireEvent.click(optionTwo)
      rerender(<Select {...multiProps} value={value} />)

      expect(value).toEqual([multiProps.options[0].value, multiProps.options[1].value])
      expect(input).toHaveProperty('value', '2 Selected')
    })

    it('Chooses more than 10 options', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${multiProps.id}-input`)

      multiProps.options.forEach((x) => {
        const option = getByText(x.label)
        fireEvent.click(option)
      })

      rerender(<Select {...multiProps} value={value} />)

      expect(value).toEqual(multiProps.options.map((x) => x.value))
      expect(input).toHaveProperty('value', '10+ Selected')
    })

    it('Clears all when button clicked', () => {
      const { getByTestId, getByText, getByTitle } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)
      const optionOne = getByText(multiProps.options[0].label)
      const optionTwo = getByText(multiProps.options[1].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      fireEvent.click(optionTwo)

      const clearBtn = getByTitle('Clear')
      fireEvent.click(clearBtn)

      expect(input).toHaveProperty('value', '0 Selected')
    })

    it('Closes when clicked away', () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const options = getByTestId(`${multiProps.id}-options`)

      fireEvent.blur(select)
      expect(options.style.display).toEqual('none')
    })
  })

  describe('Searchable', () => {
    const searchableProps: ISelect.IProps = {
      ...baseProps,
      placeholder: 'Type to search...',
      searchable: true,
      optional: true
    }

    const mountComponentInContext = () => render(<Select {...searchableProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Searches for a known option', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${searchableProps.id}-input`)
      const options = getByTestId(`${searchableProps.id}-options`)

      fireEvent.change(input, { target: { value: 'one' } })
      expect(options.childElementCount).toEqual(2)

      fireEvent.change(input, { target: { value: 'OPTION ONE' } })
      expect(options.childElementCount).toEqual(2)

      fireEvent.change(input, { target: { value: 'option t' } })
      expect(options.childElementCount).toEqual(4)

      fireEvent.change(input, { target: { value: 'option one' } })
      const optionOne = getByText(searchableProps.options[0].label)

      fireEvent.click(optionOne)
      rerender(<Select {...searchableProps} value={value} />)

      expect(value).toEqual('option-1')
      expect(input).toHaveProperty('placeholder', 'Option One')
    })

    it('Searches for an unknown option', () => {
      const { getByTestId } = mountComponentInContext()
      const input = getByTestId(`${searchableProps.id}-input`)
      const options = getByTestId(`${searchableProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option twenty' } })

      expect(options.childElementCount).toBe(1)
    })

    it('Removes a search', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${searchableProps.id}-input`)
      const optionNull = getByText('-- Select --')
      const optionOne = getByText(searchableProps.options[0].label)

      fireEvent.change(input, { target: { value: 'option one' } })
      fireEvent.click(optionOne)
      fireEvent.change(input, { target: { value: 'option twenty' } })
      fireEvent.click(optionNull)
      rerender(<Select {...searchableProps} value={value} />)

      expect(value).toEqual(null)
      expect(input).toHaveProperty('placeholder', searchableProps.placeholder)
    })
  })

  describe('Multi Searchable', () => {
    const multiSearchableProps: ISelect.IProps = {
      ...baseProps,
      placeholder: 'Type to search...',
      multi: true,
      searchable: true
    }

    const mountComponentInContext = () => render(<Select {...multiSearchableProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Searches for a known option', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${multiSearchableProps.id}-input`)
      const options = getByTestId(`${multiSearchableProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option one' } })
      expect(options.childElementCount).toEqual(1)
      const optionOne = getByText(multiSearchableProps.options[0].label)

      fireEvent.click(optionOne)
      rerender(<Select {...multiSearchableProps} value={value} />)

      expect(value).toEqual(['option-1'])
      expect(input).toHaveProperty('placeholder', '1 Selected')
    })

    it('Searches for an unknown option', () => {
      const { getByTestId } = mountComponentInContext()
      const input = getByTestId(`${multiSearchableProps.id}-input`)
      const options = getByTestId(`${multiSearchableProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option twenty' } })
      expect(options.childElementCount).toEqual(0)
    })
  })

  describe('Disabled', () => {
    const mountComponentInContext = () => render(<Select {...baseProps} disabled />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Checks input is disabled', () => {
      const { getByTestId } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)

      expect(input).toHaveProperty('disabled', true)
    })
  })
})
