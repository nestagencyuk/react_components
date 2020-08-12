import * as React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import { Select } from '.'
import { ISelect } from './types'

describe('----- Select Component -----', () => {
  jest.useFakeTimers()
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

    it('Chooses an option and passes to onChange', async () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(baseProps.id)
      const optionOne = getByText(baseProps.options[0].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)

      act(() => jest.runAllTimers())
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

      fireEvent.focus(select)
      fireEvent.blur(select)

      act(() => jest.runAllTimers())
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
      const placeholder = queryByPlaceholderText('Custom Placeholder')
      expect(placeholder).toBeTruthy()
    })
  })

  describe('Icon', () => {
    const mountComponentInContext = () => render(<Select {...baseProps} icon={{ name: 'Search' }} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Shows custom icon', () => {
      const { queryByTitle } = mountComponentInContext()
      const icon = queryByTitle('Search')
      expect(icon).toBeTruthy()
    })
  })

  describe('Initial value', () => {
    const initialValue = 'option-1'
    const mountComponentInContext = () => render(<Select {...baseProps} value={initialValue} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Has initial string value', () => {
      const { queryAllByPlaceholderText } = mountComponentInContext()
      expect(queryAllByPlaceholderText('Option One')).toBeTruthy()
    })
  })

  describe('Initial Value Multi', () => {
    const initialValue = ['option-1', 'option-2']
    const mountComponentInContext = () => render(<Select {...baseProps} value={initialValue} multi />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Has initial array value', () => {
      const { queryAllByPlaceholderText } = mountComponentInContext()
      expect(queryAllByPlaceholderText('2 Selected')).toBeTruthy()
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

      act(() => jest.runAllTimers())
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

      expect(value).toEqual([multiProps.options[0].value])
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

      act(() => jest.runAllTimers())
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
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)
      const optionOne = getByText(multiProps.options[0].label)
      const optionTwo = getByText(multiProps.options[1].label)

      fireEvent.focus(select)
      fireEvent.click(optionOne)
      fireEvent.click(optionTwo)

      const clearBtn = getByText('Clear')
      fireEvent.click(clearBtn)

      act(() => jest.runAllTimers())
      expect(input).toHaveProperty('value', '0 Selected')
    })

    it('Closes when clicked away', () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const options = getByTestId(`${multiProps.id}-options`)

      fireEvent.blur(select)

      act(() => jest.runAllTimers())
      expect(options.style.display).toEqual('none')
    })
  })

  describe('Multi Tags', () => {
    const multiTagsProps: ISelect.IProps = {
      ...baseProps,
      multi: true,
      multiVariant: 'Tags'
    }

    const mountComponentInContext = () => render(<Select {...multiTagsProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Chooses an option, moves option from list to tag', () => {
      const { getByTestId, queryByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiTagsProps.id)
      const input = getByTestId(`${multiTagsProps.id}-input`)
      const optionOne = queryByText(multiTagsProps.options[0].label)

      expect(optionOne.classList.contains('select__option-btn')).toBeTruthy()

      fireEvent.focus(select)
      fireEvent.click(optionOne)

      rerender(<Select {...multiTagsProps} value={value} />)

      const tagOne = queryByText(multiTagsProps.options[0].label)
      expect(tagOne.classList.contains('tag')).toBeTruthy()

      expect(value).toEqual([multiTagsProps.options[0].value])
      expect(input).toHaveProperty('value', '1 Selected')
    })

    it('Chooses an option, removes option using tag', () => {
      const { getByTestId, queryByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiTagsProps.id)
      const input = getByTestId(`${multiTagsProps.id}-input`)
      const optionOne = queryByText(multiTagsProps.options[0].label)

      expect(optionOne.classList.contains('select__option-btn')).toBeTruthy()

      fireEvent.focus(select)
      fireEvent.click(optionOne)

      rerender(<Select {...multiTagsProps} value={value} />)

      const tagOne = queryByText(multiTagsProps.options[0].label)
      expect(tagOne.classList.contains('tag')).toBeTruthy()

      expect(value).toEqual([multiTagsProps.options[0].value])
      expect(input).toHaveProperty('value', '1 Selected')

      fireEvent.focus(select)
      fireEvent.click(tagOne)

      rerender(<Select {...multiTagsProps} value={value} />)

      expect(value).toEqual(null)
      expect(input).toHaveProperty('value', '0 Selected')
    })
  })

  describe('Filterable', () => {
    const filterableProps: ISelect.IProps = {
      ...baseProps,
      placeholder: 'Type to filter...',
      filterable: true,
      optional: true
    }

    const mountComponentInContext = () => render(<Select {...filterableProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Filters for a known option', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${filterableProps.id}-input`)
      const options = getByTestId(`${filterableProps.id}-options`)

      fireEvent.change(input, { target: { value: 'one' } })
      expect(options.childElementCount).toEqual(2)

      fireEvent.change(input, { target: { value: 'OPTION ONE' } })
      expect(options.childElementCount).toEqual(2)

      fireEvent.change(input, { target: { value: 'option t' } })
      expect(options.childElementCount).toEqual(4)

      fireEvent.change(input, { target: { value: 'option one' } })
      const optionOne = getByText(filterableProps.options[0].label)

      fireEvent.click(optionOne)

      rerender(<Select {...filterableProps} value={value} />)

      expect(value).toEqual(filterableProps.options[0].value)
      expect(input).toHaveProperty('placeholder', filterableProps.options[0].label)
    })

    it('Filters for an unknown option', () => {
      const { getByTestId } = mountComponentInContext()
      const input = getByTestId(`${filterableProps.id}-input`)
      const options = getByTestId(`${filterableProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option twenty' } })
      expect(options.childElementCount).toBe(1)
    })

    it('Removes a filter', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${filterableProps.id}-input`)
      const optionNull = getByText('-- Select --')
      const optionOne = getByText(filterableProps.options[0].label)

      fireEvent.change(input, { target: { value: 'option one' } })
      fireEvent.click(optionOne)
      fireEvent.change(input, { target: { value: 'option twenty' } })
      fireEvent.click(optionNull)

      rerender(<Select {...filterableProps} value={value} />)

      expect(value).toEqual(null)
      expect(input).toHaveProperty('placeholder', filterableProps.placeholder)
    })
  })

  describe('Multi Filterable', () => {
    const multiFilterableProps: ISelect.IProps = {
      ...baseProps,
      placeholder: 'Type to filter...',
      multi: true,
      filterable: true
    }

    const mountComponentInContext = () => render(<Select {...multiFilterableProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Filters for a known option', () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${multiFilterableProps.id}-input`)
      const options = getByTestId(`${multiFilterableProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option one' } })
      expect(options.childElementCount).toEqual(1)
      const optionOne = getByText(multiFilterableProps.options[0].label)

      fireEvent.click(optionOne)

      rerender(<Select {...multiFilterableProps} value={value} />)

      expect(value).toEqual([multiFilterableProps.options[0].value])
      expect(input).toHaveProperty('placeholder', '1 Selected')
    })

    it('Filters for an unknown option', () => {
      const { getByTestId } = mountComponentInContext()
      const input = getByTestId(`${multiFilterableProps.id}-input`)
      const options = getByTestId(`${multiFilterableProps.id}-options`)

      fireEvent.change(input, { target: { value: 'option twenty' } })
      expect(options.childElementCount).toEqual(0)
    })
  })

  describe('Searchable', () => {
    let lazyOptions: ISelect.IProps['options'] = []
    let loading: boolean = false
    const mockAsyncFn = jest.fn((val) => {
      loading = true
      setTimeout(() => {
        lazyOptions = val ? baseProps.options.filter((x) => x.label.toLowerCase().includes(val.toLowerCase())) : []
        loading = false
      }, 1000)
    })
    const searchableProps: ISelect.IProps = {
      ...baseProps,
      options: [],
      placeholder: 'Type to search...',
      filterable: true,
      icon: { name: loading ? 'Loading' : 'Search', active: loading },
      onSearch: mockAsyncFn
    }

    const mountComponentInContext = () => render(<Select {...searchableProps} />)

    beforeEach(() => {
      lazyOptions = []
    })

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Searches for a known option', async () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const input = getByTestId(`${searchableProps.id}-input`)
      const options = getByTestId(`${searchableProps.id}-options`)

      expect(options.childElementCount).toEqual(0)
      fireEvent.change(input, { target: { value: 'option one' } })

      await waitFor(() => expect(lazyOptions.length).toBe(1), { timeout: 2000 })
      rerender(<Select {...searchableProps} options={lazyOptions} />)
      expect(options.childElementCount).toEqual(1)
      const optionOne = getByText(lazyOptions[0].label)

      fireEvent.click(optionOne)
      rerender(<Select {...searchableProps} options={lazyOptions} value={value} />)

      expect(value).toEqual(lazyOptions[0].value)
      expect(input).toHaveProperty('placeholder', lazyOptions[0].label)
    })

    it('Shows a different icon whilst searching', async () => {
      const { getByTestId, queryByTitle, rerender } = mountComponentInContext()
      const input = getByTestId(`${searchableProps.id}-input`)
      expect(queryByTitle('Search')).toBeTruthy()

      fireEvent.change(input, { target: { value: 'option one' } })

      await waitFor(() => expect(loading).toBeTruthy())
      rerender(<Select {...searchableProps} icon={{ name: loading ? 'Loading' : 'Search', active: loading }} />)
      expect(queryByTitle('Loading')).toBeTruthy()

      await waitFor(() => expect(lazyOptions.length).toBe(1), { timeout: 2000 })

      rerender(<Select {...searchableProps} icon={{ name: loading ? 'Loading' : 'Search', active: loading }} />)
      expect(queryByTitle('Search')).toBeTruthy()
    })

    it('Searches for an unknown option', async () => {
      const { getByTestId, rerender } = mountComponentInContext()
      const input = getByTestId(`${searchableProps.id}-input`)
      const options = getByTestId(`${searchableProps.id}-options`)

      expect(lazyOptions.length).toBe(0)
      fireEvent.change(input, { target: { value: 'option twenty' } })
      await waitFor(() => expect(lazyOptions.length).toBe(0), { timeout: 2100 })
      rerender(<Select {...searchableProps} options={lazyOptions} />)
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

    it('Checks option is disabled', () => {
      baseProps.options[0].disabled = true
      const { getByText } = render(<Select {...baseProps} />)
      const optionOne = getByText(baseProps.options[0].label)

      expect(optionOne).toHaveProperty('disabled', true)
    })
  })
})
