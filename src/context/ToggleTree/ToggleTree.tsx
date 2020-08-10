import { IToggleTree } from './types'
import * as React from 'react'
import { useToggleTree } from '../../hooks/useToggleTree'

/**
 * Context
 */
import { ToggleTreeContext } from '.'

/**
 * Open and close many things
 */
const ToggleTree: React.FC<IToggleTree.IProps | IToggleTree.IRenderProps> = ({ multi, children }) => {
  const [toggles, setToggled] = useToggleTree({ multi })
  const value = { toggles, setToggled }

  return (
    <ToggleTreeContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </ToggleTreeContext.Provider>
  )
}

export default ToggleTree
