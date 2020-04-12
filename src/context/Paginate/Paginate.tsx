import * as React from 'react'
import { useState, useEffect } from 'react'

/**
 * Context
 */
import { PaginateContext } from '.'

/**
 * Provide a boolean state
 */
const Paginate = ({ limit = 1, children }: any) => {
  const [items, setItems] = useState([])
  const [current, setCurrent] = useState(0)
  const value = { items, current, setCurrent }

  /**
   * Listen to changes to the current page
   */
  useEffect(() => {
    const newItems = Array.from(Array(current + limit).keys()).slice(current, current + limit)
    setItems(newItems)
  }, [current])

  return (
    <PaginateContext.Provider value={value}>
      {typeof children === 'function'
        ? children(value)
        : children}
    </PaginateContext.Provider>
  )
}

export default Paginate
