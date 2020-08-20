import { createContext } from 'react'
import { IManageArray } from './types'

/**
 * Context for displaying something that opens
 */
const ManageArrayContext = createContext<IManageArray.IValue>({
  array: [],
  addItem: () => {},
  editItem: () => {},
  deleteItem: () => {}
})

export default ManageArrayContext
