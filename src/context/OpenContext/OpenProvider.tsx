import * as React from 'react'
import { useState } from 'react'

/**
 * Context
 */
import { OpenContext } from '.'

const OpenProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <OpenContext.Provider value={{ open, setOpen }}>{children}</OpenContext.Provider>
  )
}

export default OpenProvider
