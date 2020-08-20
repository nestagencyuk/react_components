import { IManageArray } from './types'
import * as React from 'react'
import { useManageArray } from '../../hooks/useManageArray'

/**
 * Context
 */
import { ManageArrayContext } from '.'

/**
 * Access ManageArray state
 */
const ManageArray: React.FC<IManageArray.IProps | IManageArray.IRenderProps> = ({ initialArray, children }) => {
  const { array, addItem, editItem, deleteItem } = useManageArray({ initialArray })

  /**
   * Context value
   */
  const value: IManageArray.IValue = {
    array,
    addItem,
    editItem,
    deleteItem
  }

  return (
    <ManageArrayContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </ManageArrayContext.Provider>
  )
}

export default ManageArray
