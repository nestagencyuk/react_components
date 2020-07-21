import { createContext } from 'react'
import { IToggleTree } from './types'

/**
 * Context for displaying something that opens
 */
const ToggleTreeContext = createContext<IToggleTree.IValue>({
  toggles: {},
  setToggled: (id: string, depth: number = 0) => {}
})

export default ToggleTreeContext
