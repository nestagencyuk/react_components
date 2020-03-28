import { createContext } from 'react'

/**
 * Context for displaying something that opens
 */
const OpenContext = createContext({
  open: false,
  setOpen: (open: boolean) => {}
})

export default OpenContext
