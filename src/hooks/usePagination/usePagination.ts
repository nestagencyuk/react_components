import { IUsePagination } from './types'
import { useState, useEffect } from 'react'

/**
 * Provide a pagination state
 */
const usePagination = ({ init = 0, limit = 1 }: IUsePagination.IProps = {}): {
  items: number[]
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
} => {
  const [items, setItems] = useState([])
  const [current, setCurrent] = useState(init)

  /**
   * Listen to changes to the current page
   */
  useEffect(() => {
    const newItems = Array.from(Array(current + limit).keys()).slice(current, current + limit)
    setItems(newItems)
  }, [current])

  return { items, current, setCurrent }
}

export default usePagination
