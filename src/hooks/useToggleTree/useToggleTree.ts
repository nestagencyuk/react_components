import { IUseToggleTree } from './types'
import { useState } from 'react'

/**
 * Open and close many things
 */
const useToggleTree = ({ multi }: IUseToggleTree.IProps = {}): [IUseToggleTree.IState, React.Dispatch<React.SetStateAction<string>>] => {
  const [toggles, setToggles] = useState<IUseToggleTree.IState>({})

  /**
   * Set the open state of the current toggle
   */
  const setToggled = (id: string, depth: number = 0) => {
    setToggles((prev) => {
      const obj = {
        ...prev,
        [id]: { open: !prev[id]?.open, depth }
      }

      if (multi) return obj

      for (const x in obj) {
        if (x === id) continue
        const isLevel = obj[x]?.depth === obj[id]?.depth
        const isChild = obj[x]?.depth > obj[id]?.depth;
        (isLevel || isChild) && (obj[x] = { open: false, depth })
      }

      return obj
    })
  }

  return [toggles, setToggled]
}

export default useToggleTree
