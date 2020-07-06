import { createContext } from 'react'

/**
 * Context for displaying something that opens
 */
const ToggleGroupContext = createContext({
  toggles: {},
  setToggled: (id: string) => {}
})

export default ToggleGroupContext
