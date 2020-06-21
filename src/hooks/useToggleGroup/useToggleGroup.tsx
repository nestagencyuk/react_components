import { IToggleGroup } from './types'
import { useState } from 'react'

/**
 * Open and close many things
 */
const ToggleGroup = ({ multi }: IToggleGroup.IProps = {}): [{[key: string]: any}, (id: string) => void] => {
  const [toggles, setToggles] = useState<{[key: string]: any}>({})

  /**
   * Set the open state of the current toggle
   */
  const setToggled = (id: string) => {
    setToggles((prev: any) => ({
      ...(multi ? prev : {}),
      [id]: !toggles[id]
    }))
  }

  return [toggles, setToggled]
}

export default ToggleGroup
