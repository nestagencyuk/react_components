import { createContext } from 'react'

/**
 * Context for displaying something that opens
 */
const ToggleGroupContext = createContext<any>({
  toggles: {},
  setToggled: (id: string) => {}
})

export default ToggleGroupContext
