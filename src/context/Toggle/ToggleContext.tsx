import { createContext } from 'react'

/**
 * Context for displaying something that opens
 */
const ToggleContext = createContext({
  toggled: false,
  setToggled: (toggled: boolean) => {}
})

export default ToggleContext
