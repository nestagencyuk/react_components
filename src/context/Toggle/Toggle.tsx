import * as React from 'react'
import { useState, useEffect } from 'react'

/**
 * Context
 */
import { ToggleContext } from '.'

/**
 * Provide a boolean state
 */
const Toggle = ({ timeout, children }: any) => {
  const [toggled, setToggled] = useState(false)
  const value = { toggled, setToggled }

  /**
   * Close automatically if timeout set
   */
  useEffect(() => {
    if (!toggled || !timeout) return
    setTimeout(() => setToggled(false), timeout)
  }, [toggled])

  return (
    <ToggleContext.Provider value={value}>
      {typeof children === 'function'
        ? children(value)
        : children}
    </ToggleContext.Provider>
  )
}

export default Toggle
