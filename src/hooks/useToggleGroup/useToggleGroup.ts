import { IUseToggleGroup } from './types'
import { useState } from 'react'

/**
 * Open and close many things
 */
const useToggleGroup = ({ multi }: IUseToggleGroup.IProps = {}): [IUseToggleGroup.IState, React.Dispatch<React.SetStateAction<string>>] => {
  const [toggles, setToggles] = useState<IUseToggleGroup.IState>({})

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
