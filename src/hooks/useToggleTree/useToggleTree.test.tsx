import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useToggleTree } from '.'

describe('----- useToggleTree hook -----', () => {
  const Example = ({ multi = false }) => {
    const [toggles, setToggled] = useToggleTree({ multi })
    return (
      <ul>
        <li>
          <span>Depth: 0</span>
          <button onClick={() => setToggled('one')}>Toggle One</button>
          {toggles.one?.open && <span>One</span>}
        </li>
        <li>
          <span>Depth: 0</span>
          <button onClick={() => setToggled('two')}>Toggle Two</button>
          {toggles.two?.open && (
            <ul>
              <li>
                <span>Depth: 1</span>
                <button onClick={() => setToggled('three', 1)}>Toggle Three</button>
                {toggles.three?.open && (
                  <ul>
                    <li>
                      <span>Depth: 2</span>
                      <button onClick={() => setToggled('four', 2)}>Toggle Four</button>
                      {toggles.four?.open && <span>Four</span>}
                    </li>
                    <li>
                      <span>Depth: 2</span>
                      <button onClick={() => setToggled('five', 2)}>Toggle Five</button>
                      {toggles.five?.open && <span>Five</span>}
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <span>Depth: 1</span>
                <button onClick={() => setToggled('six', 1)}>Toggle Six</button>
                {toggles.six?.open && <span>Six</span>}
              </li>
            </ul>
          )}
        </li>
      </ul>
    )
  }

  describe('Base', () => {
    it('Renders without crashing', () => {
      const mountComponentInContext = () => render(<Example />)
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Toggles first level', () => {
      const { getByText, queryByText } = render(<Example />)
      expect(queryByText('One')).toBeFalsy()

      // Open
      fireEvent.click(getByText('Toggle One'))
      expect(queryByText('One')).toBeTruthy()

      // Close
      fireEvent.click(getByText('Toggle One'))
      expect(queryByText('One')).toBeFalsy()
    })

    it('Allows only one open on first level', () => {
      const { getByText, queryByText } = render(<Example />)
      expect(queryByText('One')).toBeFalsy()

      // Open
      fireEvent.click(getByText('Toggle One'))
      expect(queryByText('One')).toBeTruthy()

      // Close
      fireEvent.click(getByText('Toggle Two'))
      expect(queryByText('One')).toBeFalsy()
    })

    it('Toggles second level', () => {
      const { getByText, queryAllByText } = render(<Example />)

      // Open
      fireEvent.click(getByText('Toggle Two'))
      expect(queryAllByText('Depth: 1').length).toEqual(2)

      // Open second level
      fireEvent.click(getByText('Toggle Three'))
      expect(queryAllByText('Depth: 1').length).toEqual(2)
      expect(queryAllByText('Depth: 2').length).toEqual(2)

      // Close all
      fireEvent.click(getByText('Toggle Three'))
      expect(queryAllByText('Depth: 2').length).toEqual(0)
    })

    it('Allows only one open on second level, keeps parent level open', () => {
      const { getByText, queryByText, queryAllByText } = render(<Example />)

      // Open
      fireEvent.click(getByText('Toggle Two'))
      expect(queryAllByText('Depth: 2').length).toEqual(0)

      // Open second level
      fireEvent.click(getByText('Toggle Three'))
      expect(queryAllByText('Depth: 2').length).toEqual(2)
      expect(queryByText('Six')).toBeFalsy()

      fireEvent.click(getByText('Toggle Six'))
      expect(queryAllByText('Depth: 2').length).toEqual(0)
      expect(queryByText('Six')).toBeTruthy()

      // Close all
      fireEvent.click(getByText('Toggle One'))
      expect(queryAllByText('Depth: 0').length).toEqual(2)
      expect(queryAllByText('Depth: 1').length).toEqual(0)
    })

    it('Allows only one open on third level, keeps parent level open', () => {
      const { getByText, queryByText, queryAllByText } = render(<Example />)

      // Open
      fireEvent.click(getByText('Toggle Two'))
      expect(queryAllByText('Depth: 1').length).toEqual(2)

      // Open second level
      fireEvent.click(getByText('Toggle Three'))
      expect(queryAllByText('Depth: 2').length).toEqual(2)
      expect(queryByText('Four')).toBeFalsy()

      fireEvent.click(getByText('Toggle Four'))
      expect(queryByText('Four')).toBeTruthy()
      expect(queryByText('Five')).toBeFalsy()

      fireEvent.click(getByText('Toggle Five'))
      expect(queryByText('Four')).toBeFalsy()
      expect(queryByText('Five')).toBeTruthy()

      // Close all
      fireEvent.click(getByText('Toggle Two'))
      expect(queryAllByText('Depth: 0').length).toEqual(2)
      expect(queryAllByText('Depth: 1').length).toEqual(0)
    })
  })

  describe('Multi', () => {
    it('Renders without crashing', () => {
      const mountComponentInContext = () => render(<Example multi />)
      const { asFragment } = mountComponentInContext()
      expect(asFragment()).toMatchSnapshot()
    })

    it('Toggles first level', () => {
      const { getByText, queryByText } = render(<Example multi />)
      expect(queryByText('One')).toBeFalsy()

      // Open
      fireEvent.click(getByText('Toggle One'))
      expect(queryByText('One')).toBeTruthy()

      // Close
      fireEvent.click(getByText('Toggle One'))
      expect(queryByText('One')).toBeFalsy()
    })

    it('Allows both open on first level', () => {
      const { getByText, queryByText, queryAllByText } = render(<Example multi />)
      expect(queryByText('One')).toBeFalsy()

      // Open
      fireEvent.click(getByText('Toggle One'))
      expect(queryByText('One')).toBeTruthy()

      // Open another
      fireEvent.click(getByText('Toggle Two'))
      expect(queryByText('One')).toBeTruthy()
      expect(queryAllByText('Depth: 1').length).toEqual(2)
    })

    it('Toggles second level', () => {
      const { getByText, queryAllByText } = render(<Example multi />)

      // Open
      fireEvent.click(getByText('Toggle Two'))
      expect(queryAllByText('Depth: 1').length).toEqual(2)

      // Open second level
      fireEvent.click(getByText('Toggle Three'))
      expect(queryAllByText('Depth: 1').length).toEqual(2)
      expect(queryAllByText('Depth: 2').length).toEqual(2)

      // Close all
      fireEvent.click(getByText('Toggle Three'))
      expect(queryAllByText('Depth: 2').length).toEqual(0)
    })

    it('Allows multiple open on second level, keeps parent level open', () => {
      const { getByText, queryByText, queryAllByText } = render(<Example multi />)

      // Open
      fireEvent.click(getByText('Toggle Two'))
      expect(queryAllByText('Depth: 2').length).toEqual(0)

      // Open second level
      fireEvent.click(getByText('Toggle Three'))
      expect(queryAllByText('Depth: 2').length).toEqual(2)
      expect(queryByText('Six')).toBeFalsy()

      fireEvent.click(getByText('Toggle Six'))
      expect(queryAllByText('Depth: 2').length).toEqual(2)
      expect(queryByText('Six')).toBeTruthy()

      // Close all
      fireEvent.click(getByText('Toggle One'))
      expect(queryAllByText('Depth: 0').length).toEqual(2)
      expect(queryAllByText('Depth: 1').length).toEqual(2)
    })

    it('Allows multiple open on third level, keeps parent level open', () => {
      const { getByText, queryByText, queryAllByText } = render(<Example multi />)

      // Open
      fireEvent.click(getByText('Toggle Two'))
      expect(queryAllByText('Depth: 1').length).toEqual(2)

      // Open second level
      fireEvent.click(getByText('Toggle Three'))
      expect(queryAllByText('Depth: 2').length).toEqual(2)
      expect(queryByText('Four')).toBeFalsy()

      fireEvent.click(getByText('Toggle Four'))
      expect(queryByText('Four')).toBeTruthy()
      expect(queryByText('Five')).toBeFalsy()

      fireEvent.click(getByText('Toggle Five'))
      expect(queryByText('Four')).toBeTruthy()
      expect(queryByText('Five')).toBeTruthy()

      // Close all
      fireEvent.click(getByText('Toggle Two'))
      expect(queryAllByText('Depth: 0').length).toEqual(2)
      expect(queryAllByText('Depth: 1').length).toEqual(0)
    })
  })
})
