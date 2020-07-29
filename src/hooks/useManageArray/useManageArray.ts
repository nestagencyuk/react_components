import * as clone from 'rfdc'
import uid from 'uid'
import { useState, useEffect } from 'react'
import { IUseManageArray } from './types'

/**
 * Manage items in an array
 *
 * @param {Object} options
 * An options config
 */
const useManageArray = ({ initialArray = null }: IUseManageArray.IProps = {}): {
  array: IUseManageArray.IState
  addItem: (value: string | { [key: string]: any }) => void
  editItem: (value: string | { [key: string]: any }) => void
  deleteItem: (value: string | { [key: string]: any }) => void
  resetItems: (value: string[] | Array<{ [key: string]: any }>) => void
} => {
  const [array, setArray] = useState<IUseManageArray.IState>(initialArray)

  /**
   * Add an item
   */
  const addItem = (value: string | { [key: string]: any }) => {
    if (typeof value === 'object') {
      value._uid = uid(8)
    }

    setArray((prev) => [
      ...(prev || []).filter((x) =>
        typeof value === 'string' || typeof x === 'string' ? x !== value : x._uid !== value._uid
      ),
      value
    ])
  }

  /**
   * Edit an item
   */
  const editItem = (value: string | { [key: string]: any }, i: number = null) => {
    setArray((prev) => {
      const item = prev.find((x) =>
        typeof value === 'string' || typeof x === 'string' ? x === value : x._uid === value._uid
      )
      const index = i === null ? prev.indexOf(item) : i
      const newArray = clone()(prev)
      newArray[index] = value
      return newArray
    })
  }

  /**
   * Delete an item
   */
  const deleteItem = (value: string | { [key: string]: any }) => {
    setArray((prev) => [
      ...prev.filter((x) => (typeof value === 'string' || typeof x === 'string' ? x !== value : x._uid !== value._uid))
    ])
  }

  /**
   * Reset all items
   */
  const resetItems = (value: string[] | Array<{ [key: string]: any }>) => {
    setArray(value)
  }

  /**
   * On component mount, check if an initial array is passed, then assign each object a UID
   */
  useEffect(() => {
    if (initialArray) {
      setArray(initialArray.map((x) => (typeof x === 'string' ? x : { ...x, _uid: uid(8) })))
    }
  }, [])

  return { array, addItem, editItem, deleteItem, resetItems }
}

export default useManageArray
