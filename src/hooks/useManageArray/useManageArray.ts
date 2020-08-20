import * as clone from 'rfdc'
import { v4 as uid } from 'uuid'
import { useState, useEffect } from 'react'
import { IUseManageArray } from './types'
import { IGenericObject } from '../../types'

/**
 * Manage items in an array
 *
 * @param {Object} options
 * An options config
 */
const useManageArray = ({ initialArray = null }: IUseManageArray.IProps = {}): {
  array: IUseManageArray.IState
  addItem: (value: string | IGenericObject) => void
  editItem: (value: string | (IGenericObject & { _uid: string })) => void
  deleteItem: (uid: string) => void
  resetItems: (value: Array<string | IGenericObject>) => void
} => {
  const [array, setArray] = useState<IUseManageArray.IState>(
    initialArray ? initialArray.map((item) => (typeof item === 'string' ? item : { ...item, _uid: uid() })) : null
  )

  /**
   * Add an item
   */
  const addItem = (value: string | IGenericObject) => {
    let newValue: IGenericObject & { _uid: string } = null

    if (typeof value === 'object') {
      newValue = { ...value, _uid: uid() }
    }

    setArray((prev) => [
      ...(prev || []).filter((item) =>
        typeof value === 'string' || typeof item === 'string' ? item !== value : item._uid !== newValue._uid
      ),
      newValue || value
    ])
  }

  /**
   * Edit an item
   */
  const editItem = (value: string | (IGenericObject & { _uid: string }), i: number = null) => {
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
  const deleteItem = (value: string) => {
    setArray((prev) => [...prev.filter((x) => (typeof x === 'string' ? x !== value : x._uid !== value))])
  }

  /**
   * Reset all items
   */
  const resetItems = (value: Array<string | IGenericObject>) => {
    setArray(value)
  }

  /**
   * Update if necessary
   */
  useEffect(() => {
    if (!initialArray || initialArray.length === array.length) return
    setArray(initialArray.map((x) => (typeof x === 'string' ? x : { ...x, _uid: uid() })))
  }, [initialArray])

  return { array, addItem, editItem, deleteItem, resetItems }
}

export default useManageArray
