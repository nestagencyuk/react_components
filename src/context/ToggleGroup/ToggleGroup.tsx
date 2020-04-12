import * as React from 'react'
import { useState } from 'react'

/**
 * Context
 */
import { ToggleGroupContext } from '.'

/**
 * Open and close many things
 */
const ToggleGroup = ({ multiOpen, children }: any) => {
  const [toggles, setToggles] = useState<any>({})

  /**
   * Set the open state of the current toggle
   */
  const setToggled = (id: string) => {
    setToggles((prev: any) => ({
      ...(multiOpen ? prev : {}),
      [id]: !toggles[id]
    }))
  }

  const value = { toggles, setToggled }

  return (
    <ToggleGroupContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </ToggleGroupContext.Provider>
  )
}

export default ToggleGroup
