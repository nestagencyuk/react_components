import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Select } from '.'

describe('Select Component', () => {
  let value: string[] = null
  const mockFn = jest.fn((val) => { value = val })
  const baseProps = {
    id: 'Select',
    options: [
      { label: 'Option One', value: "option-1" },
      { label: 'Option Two', value: "option-2" },
      { label: 'Option Three', value: "option-3" },
      { label: 'Option Four', value: "option-4" },
      { label: 'Option Five', value: "option-5" },
      { label: 'Option Six', value: "option-6" },
      { label: 'Option Seven', value: "option-7" },
      { label: 'Option Eight', value: "option-8" },
      { label: 'Option Nine', value: "option-9" },
      { label: 'Option Ten', value: "option-10" },
      { label: 'Option Eleven', value: "option-11" },
    ]
  }

  beforeEach(() => {
    jest.clearAllMocks()
    value = null
  })

  describe('Base', () => {
    const mountComponentInContext = () => render(
      <Select {...baseProps} onChange={mockFn} />
    )

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })
    
    it('Opens the options list', () => {
      const { getByTestId, } = mountComponentInContext()
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

  describe('Initial value', () => {
    const mountComponentInContext = () => render(
      <Select {...baseProps} value="option-1" onChange={mockFn} />
    )

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
    const mountComponentInContext = () => render(
      <Select {...baseProps} value={["option-1", "option-2"]} multi onChange={mockFn} />
    )

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
    const mountComponentInContext = () => render(
      <Select {...baseProps} optional onChange={mockFn} />
    )

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
    const mountComponentInContext = () => render(
      <Select {...baseProps} multi onChange={mockFn} />
    )

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

    it('Checks an option and passes to onChange', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const input = getByTestId(`${baseProps.id}-input`)
      const optionOne = getByText(baseProps.options[0].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      rerender(<Select {...baseProps} value={value} multi onChange={mockFn} />)
      
      expect(value).toEqual(['option-1'])
      expect(input).toHaveProperty('value', '1 Selected')
    })

    it('Unchecks the same option', () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const input = getByTestId(`${baseProps.id}-input`)
      const optionOne = getByText(baseProps.options[0].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      fireEvent.click(optionOne)

      expect(value).toEqual(null)
      expect(input).toHaveProperty('value', '0 Selected')
    })

    it('Chooses multiple options', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const input = getByTestId(`${baseProps.id}-input`)
      const optionOne = getByText(baseProps.options[0].label)
      const optionTwo = getByText(baseProps.options[1].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      fireEvent.click(optionTwo)
      rerender(<Select {...baseProps} value={value} multi onChange={mockFn} />)
      
      expect(value).toEqual([baseProps.options[0].value, baseProps.options[1].value])
      expect(input).toHaveProperty('value', '2 Selected')
    })

    it('Chooses more than 10 options', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)

      baseProps.options.forEach((x) => {
        const option = getByText(x.label)
        fireEvent.click(option)
      })

      rerender(<Select {...baseProps} value={value} multi onChange={mockFn} />)
      
      expect(value).toEqual(baseProps.options.map((x) => x.value))
      expect(input).toHaveProperty('value', '10+ Selected')
    })

    it('Clears all when button clicked', () => {
      const { getByTestId, getByText, getByTitle } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const input = getByTestId(`${baseProps.id}-input`)
      const optionOne = getByText(baseProps.options[0].label)
      const optionTwo = getByText(baseProps.options[1].label)
      
      fireEvent.focus(select)
      fireEvent.click(optionOne)
      fireEvent.click(optionTwo)

      const clearBtn = getByTitle('Clear')
      fireEvent.click(clearBtn)
      
      expect(input).toHaveProperty('value', '0 Selected')
    })

    it('Closes when clicked away', () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const options = getByTestId(`${baseProps.id}-options`)

      fireEvent.blur(select)
      expect(options.style.display).toEqual('none')
    })
  })

  describe('Searchable', () => {
    const mountComponentInContext = () => render(
      <Select {...baseProps} optional searchable onChange={mockFn} />
    )

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })
    
    it('Searches for a known option', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)
      const options = getByTestId(`${baseProps.id}-options`)
      
      fireEvent.change(input, { target: { value: 'one' } })
      expect(options.childElementCount).toEqual(2)
      
      fireEvent.change(input, { target: { value: 'OPTION ONE' } })
      expect(options.childElementCount).toEqual(2)
      
      fireEvent.change(input, { target: { value: 'option t' } })
      expect(options.childElementCount).toEqual(4)
      
      fireEvent.change(input, { target: { value: 'option one' } })
      const optionOne = getByText(baseProps.options[0].label)

      fireEvent.click(optionOne)
      rerender(<Select {...baseProps} value={value} optional searchable onChange={mockFn} />)

      expect(value).toEqual('option-1')
      expect(input).toHaveProperty('placeholder', 'Option One')
    })
    
    it('Searches for an unknown option', () => {
      const { getByTestId } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)
      const options = getByTestId(`${baseProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option twenty' } })

      expect(options.childElementCount).toBe(1)
    })
    
    it('Removes a search', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)
      const optionNull = getByText('-- Select --')
      const optionOne = getByText(baseProps.options[0].label)
      
      fireEvent.change(input, { target: { value: 'option one' } })
      fireEvent.click(optionOne)
      fireEvent.change(input, { target: { value: 'option twenty' } })
      fireEvent.click(optionNull)
      rerender(<Select {...baseProps} value={value} multi onChange={mockFn} />)

      expect(value).toEqual(null)
      expect(input).toHaveProperty('placeholder', 'Type to search...')
    })
  })

  describe('Multi Searchable', () => {
    const mountComponentInContext = () => render(
      <Select {...baseProps} multi searchable onChange={mockFn} />
    )

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })
    
    it('Searches for a known option', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)
      const options = getByTestId(`${baseProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option one' } })
      expect(options.childElementCount).toEqual(1)
      const optionOne = getByText(baseProps.options[0].label)

      fireEvent.click(optionOne)
      rerender(<Select {...baseProps} value={value} optional searchable onChange={mockFn} />)

      expect(value).toEqual(['option-1'])
      expect(input).toHaveProperty('placeholder', 'Type to search...')
    })
    
    it('Searches for an unknown option', () => {
      const { getByTestId } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)
      const options = getByTestId(`${baseProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option twenty' } })
      expect(options.childElementCount).toEqual(0)
    })
  })

  describe('Disabled', () => {
    const mountComponentInContext = () => render(
      <Select {...baseProps} disabled onChange={mockFn} />
    )

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })
    
    it('Checks input is disabled', () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)
      
      expect(input).toHaveProperty('disabled', true)
    })
  })
})
