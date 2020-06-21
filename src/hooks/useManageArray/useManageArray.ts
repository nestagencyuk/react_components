import { useState } from 'react'

/**
 * Manage items in an array
 *
 * @param {Object} options
 * An options config
 */
const useManageArray = ({ key }: any = {}): { array: string[], addItem: (value: string) => void, deleteItem: (value: string) => void, resetItems: (value: string[]) => void } => {
  const [array, setArray] = useState<string[]>(null)

  /**
   * Add an item
   */
  const addItem = (value: string) => {
    setArray((prev) => ([
      ...(prev || []).filter((x) => x !== value),
      value
    ]))
  }

  /**
   * Delete an item
   */
  const deleteItem = (value: string) => {
    setArray((prev) => ([
      ...(prev || []).filter((x) => x !== value)
    ]))
  }

  /**
   * Reset all items
   */
  const resetItems = (value: string[]) => {
    setArray(value)
  }

  return { array, addItem, deleteItem, resetItems }
}

export default useManageArray
