import { createContext } from 'react'

/**
 * Context for displaying something that opens
 */
const PaginateContext = createContext<any>({
  items: [],
  current: 0,
  setCurrent: (current: number) => {}
})

export default PaginateContext
