import { createContext } from 'react'
import { IToggleGroup } from './types'

/**
 * Context for displaying something that opens
 */
const ToggleGroupContext = createContext<IToggleGroup.IValue>({
  toggles: {},
  setToggled: () => {}
})

export default ToggleGroupContext
