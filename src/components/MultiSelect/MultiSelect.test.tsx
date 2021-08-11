import * as React from 'react'
import { render, fireEvent, waitFor, act, queryByTestId } from '@testing-library/react'
import { MultiSelect } from '.'
import { IMultiSelect } from './types'

describe('----- MultiSelect Component -----', () => {
  jest.useFakeTimers()
  let value: string[] = null
  const mockFn = jest.fn((val) => {
    value = val
  })
  const baseProps: IMultiSelect.IProps = {
    id: 'MultiSelect',
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
    const mountComponentInContext = () => render(<MultiSelect {...baseProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Opens the options list', async () => {
      const { getByTestId, queryByTestId } = mountComponentInContext()
      const select = getByTestId(baseProps.id)

      await act(async () => {
        fireEvent.focus(select)
      })

      const options = queryByTestId(`${baseProps.id}-options`)
      expect(options).toBeTruthy()
    })

    it('Chooses an option and passes to onChange', async () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(baseProps.id)

      await act(async () => {
        fireEvent.focus(select)
      })

      fireEvent.click(getByText(baseProps.options[0].label))
      
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith(baseProps.options[0].value)
    })

    it('Shows the option label, not value', async () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(baseProps.id)

      await act(async () => {
        fireEvent.focus(select)
      })

      const options = getByTestId(`${baseProps.id}-options`)
      options.childNodes.forEach((x, i) => {
        expect(x.textContent).toEqual(baseProps.options[i].label)
      })
    })

    it('Closes when clicked away', async () => {
      const { getByTestId, queryByTestId } = mountComponentInContext()
      const select = getByTestId(baseProps.id)

      await act(async () => {
        fireEvent.focus(select)
      })

      expect(queryByTestId(`${baseProps.id}-options`)).toBeTruthy()

      await act(async () => {
        fireEvent.blur(select)
      })

      expect(queryByTestId(`${baseProps.id}-options`)).toBeFalsy()
    })
  })

  describe('Placeholder', () => {
    const mountComponentInContext = () => render(<MultiSelect {...baseProps} placeholder="Custom Placeholder" />)

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
    const mountComponentInContext = () => render(<MultiSelect {...baseProps} icon={{ name: 'Search' }} />)

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

  describe('Initial Value', () => {
    const initialValue = ['option-1', 'option-2']
    const mountComponentInContext = () => render(<MultiSelect {...baseProps} value={initialValue} />)

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
    const mountComponentInContext = () => render(<MultiSelect {...baseProps} optional />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Chooses null', async () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(baseProps.id)

      await act(async () => {
        fireEvent.focus(select)
      })

      fireEvent.click(getByText('-- MultiSelect --'))

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith(null)
    })
  })

  describe('Checkboxes', () => {
    const multiProps: IMultiSelect.IProps = {
      ...baseProps
    }

    const mountComponentInContext = () => render(<MultiSelect {...multiProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Opens the options list', async () => {
      const { getByTestId, queryByTestId } = mountComponentInContext()
      const select = getByTestId(multiProps.id)

      await act(async () => {
        fireEvent.focus(select)
      })

      expect(getByTestId(`${multiProps.id}-options`)).toBeTruthy()
    })

    it('Checks an option and passes to onChange', async () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const optionOne = getByText(multiProps.options[0].label)
      fireEvent.click(optionOne)

      rerender(<MultiSelect {...multiProps} value={value} />)

      expect(value).toEqual([multiProps.options[0].value])
      expect(input).toHaveProperty('value', '1 Selected')
    })

    it('Unchecks the same option', async () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const optionOne = getByText(multiProps.options[0].label)
      fireEvent.click(optionOne)
      fireEvent.click(optionOne)

      expect(value).toEqual(null)
      expect(input).toHaveProperty('value', '0 Selected')
    })

    it('Chooses multiple options', async () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const optionOne = getByText(multiProps.options[0].label)
      const optionTwo = getByText(multiProps.options[1].label)
      fireEvent.click(optionOne)
      fireEvent.click(optionTwo)

      rerender(<MultiSelect {...multiProps} value={value} />)

      expect(value).toEqual([multiProps.options[0].value, multiProps.options[1].value])
      expect(input).toHaveProperty('value', '2 Selected')
    })

    it('Chooses more than 10 options', async () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      multiProps.options.forEach((x) => {
        const option = getByText(x.label)
        fireEvent.click(option)
      })

      rerender(<MultiSelect {...multiProps} value={value} />)

      expect(value).toEqual(multiProps.options.map((x) => x.value))
      expect(input).toHaveProperty('value', '10+ Selected')
    })

    it('Clears all when button clicked', async () => {
      const { getByTestId, getByText } = mountComponentInContext()
      const select = getByTestId(multiProps.id)
      const input = getByTestId(`${multiProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const optionOne = getByText(multiProps.options[0].label)
      const optionTwo = getByText(multiProps.options[1].label)
      fireEvent.click(optionOne)
      fireEvent.click(optionTwo)

      const clearBtn = getByText('Clear selection')
      fireEvent.click(clearBtn)

      expect(input).toHaveProperty('value', '0 Selected')
    })

    it('Closes when clicked away', async () => {
      const { getByTestId, queryByTestId } = mountComponentInContext()
      const select = getByTestId(multiProps.id)

      await act(async () => {
        fireEvent.focus(select)
      })

      expect(queryByTestId(`${multiProps.id}-options`)).toBeTruthy()

      await act(async () => {
        fireEvent.blur(select)
      })

      expect(queryByTestId(`${multiProps.id}-options`)).toBeFalsy()
    })
  })

  describe('Tags', () => {
    const multiTagsProps: IMultiSelect.IProps = {
      ...baseProps,
      variant: 'Tags'
    }

    const mountComponentInContext = () => render(<MultiSelect {...multiTagsProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Chooses an option, moves option from list to tag', async () => {
      const { getByTestId, queryByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiTagsProps.id)
      const input = getByTestId(`${multiTagsProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const optionOne = queryByText(multiTagsProps.options[0].label)
      expect(optionOne.classList.contains('select__option-btn')).toBeTruthy()

      fireEvent.click(optionOne)

      rerender(<MultiSelect {...multiTagsProps} value={value} />)

      const tagOne = queryByText(multiTagsProps.options[0].label)
      expect(tagOne.classList.contains('tag')).toBeTruthy()

      expect(value).toEqual([multiTagsProps.options[0].value])
      expect(input).toHaveProperty('value', '1 Selected')
    })

    it('Chooses an option, removes option using tag', async () => {
      const { getByTestId, queryByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiTagsProps.id)
      const input = getByTestId(`${multiTagsProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const optionOne = queryByText(multiTagsProps.options[0].label)
      expect(optionOne.classList.contains('select__option-btn')).toBeTruthy()
      fireEvent.click(optionOne)

      rerender(<MultiSelect {...multiTagsProps} value={value} />)

      const tagOne = queryByText(multiTagsProps.options[0].label)
      expect(tagOne.classList.contains('tag')).toBeTruthy()

      expect(value).toEqual([multiTagsProps.options[0].value])
      expect(input).toHaveProperty('value', '1 Selected')

      fireEvent.focus(select)
      fireEvent.click(tagOne)

      rerender(<MultiSelect {...multiTagsProps} value={value} />)

      expect(value).toEqual(null)
      expect(input).toHaveProperty('value', '0 Selected')
    })
  })

  describe('Filterable', () => {
    const multiFilterableProps: IMultiSelect.IProps = {
      ...baseProps,
      placeholder: 'Type to filter...',
      filterable: true
    }

    const mountComponentInContext = () => render(<MultiSelect {...multiFilterableProps} />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Filters for a known option', async () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(multiFilterableProps.id)
      const input = getByTestId(`${multiFilterableProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const options = getByTestId(`${multiFilterableProps.id}-options`)
      fireEvent.change(input, { target: { value: 'option one' } })
      expect(options.childElementCount).toEqual(1)
      const optionOne = getByText(multiFilterableProps.options[0].label)

      fireEvent.click(optionOne)

      rerender(<MultiSelect {...multiFilterableProps} value={value} />)

      expect(value).toEqual([multiFilterableProps.options[0].value])
      expect(input).toHaveProperty('placeholder', '1 Selected')
    })

    it('Filters for an unknown option', async () => {
      const { getByTestId } = mountComponentInContext()
      const select = getByTestId(multiFilterableProps.id)
      const input = getByTestId(`${multiFilterableProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const options = getByTestId(`${multiFilterableProps.id}-options`)
      fireEvent.change(input, { target: { value: 'option twenty' } })
      expect(options.childElementCount).toEqual(0)
    })
  })

  describe('Searchable', () => {
    let lazyOptions: IMultiSelect.IProps['options'] = []
    let loading: boolean = false
    const mockAsyncFn = jest.fn((val) => {
      loading = true
      setTimeout(() => {
        lazyOptions = val ? baseProps.options.filter((x) => x.label.toLowerCase().includes(val.toLowerCase())) : []
        loading = false
      }, 1000)
    })
    const searchableProps: IMultiSelect.IProps = {
      ...baseProps,
      options: [],
      placeholder: 'Type to search...',
      filterable: true,
      icon: { name: loading ? 'Loading' : 'Search', active: loading },
      onSearch: mockAsyncFn
    }

    const mountComponentInContext = () => render(<MultiSelect {...searchableProps} />)

    beforeEach(() => {
      lazyOptions = []
    })

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Searches for a known option', async () => {
      const { getByTestId, getByText, rerender } = mountComponentInContext()
      const select = getByTestId(searchableProps.id)
      const input = getByTestId(`${searchableProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const options = getByTestId(`${searchableProps.id}-options`)

      expect(options.childElementCount).toEqual(0)
      fireEvent.change(input, { target: { value: 'option one' } })

      await waitFor(() => expect(lazyOptions.length).toBe(1), { timeout: 2000 })
      rerender(<MultiSelect {...searchableProps} options={lazyOptions} />)
      expect(options.childElementCount).toEqual(1)
      const optionOne = getByText(lazyOptions[0].label)

      fireEvent.click(optionOne)
      rerender(<MultiSelect {...searchableProps} options={lazyOptions} value={value} />)

      expect(value).toEqual(lazyOptions[0].value)
      expect(input).toHaveProperty('placeholder', lazyOptions[0].label)
    })

    it('Shows a different icon whilst searching', async () => {
      const { getByTestId, queryByTitle, rerender } = mountComponentInContext()
      const select = getByTestId(searchableProps.id)
      const input = getByTestId(`${searchableProps.id}-input`)
      expect(queryByTitle('Search')).toBeTruthy()

      await act(async () => {
        fireEvent.focus(select)
      })
      fireEvent.change(input, { target: { value: 'option one' } })

      await waitFor(() => expect(loading).toBeTruthy())
      rerender(<MultiSelect {...searchableProps} icon={{ name: loading ? 'Loading' : 'Search', active: loading }} />)
      expect(queryByTitle('Loading')).toBeTruthy()

      await waitFor(() => expect(lazyOptions.length).toBe(1), { timeout: 2000 })

      rerender(<MultiSelect {...searchableProps} icon={{ name: loading ? 'Loading' : 'Search', active: loading }} />)
      expect(queryByTitle('Search')).toBeTruthy()
    })

    it('Searches for an unknown option', async () => {
      const { getByTestId, rerender } = mountComponentInContext()
      const select = getByTestId(searchableProps.id)
      const input = getByTestId(`${searchableProps.id}-input`)

      await act(async () => {
        fireEvent.focus(select)
      })

      const options = getByTestId(`${searchableProps.id}-options`)

      expect(lazyOptions.length).toBe(0)
      fireEvent.change(input, { target: { value: 'option twenty' } })
      await waitFor(() => expect(lazyOptions.length).toBe(0), { timeout: 2100 })
      rerender(<MultiSelect {...searchableProps} options={lazyOptions} />)
      expect(options.childElementCount).toEqual(0)
    })
  })

  describe('Disabled', () => {
    const mountComponentInContext = () => render(<MultiSelect {...baseProps} disabled />)

    it('Renders without crashing', () => {
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Checks input is disabled', () => {
      const { getByTestId } = mountComponentInContext()
      const input = getByTestId(`${baseProps.id}-input`)

      expect(input).toHaveProperty('disabled', true)
    })

    it('Checks option is disabled', async () => {
      baseProps.options[0].disabled = true
      const { getByText, getByTestId } = render(<MultiSelect {...baseProps} />)
      const select = getByTestId(baseProps.id)
      await act(async () => {
        fireEvent.focus(select)
      })
      const optionOne = getByText(baseProps.options[0].label)

      expect(optionOne).toHaveProperty('disabled', true)
    })
  })
})
