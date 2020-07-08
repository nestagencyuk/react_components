import { IToggleGroup } from './types'
import { useState } from 'react'

/**
 * Open and close many things
 */
const useToggleGroup = ({ multi }: IToggleGroup.IProps = {}): [IToggleGroup.IState, React.Dispatch<React.SetStateAction<string>>] => {
  const [toggles, setToggles] = useState<IToggleGroup.IState>({})

  /**
   * Set the open state of the current toggle
   */
  const setToggled = (id: string) => {
    setToggles((prev) => ({
      ...(multi ? prev : {}),
      [id]: !toggles[id]
    }))
  }

  return [toggles, setToggled]
}

export default useToggleGroup
