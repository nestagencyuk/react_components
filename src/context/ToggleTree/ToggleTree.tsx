import { IToggleTree } from './types'
import * as React from 'react'
import { useToggleTree } from '../../hooks/useToggleTree'

/**
 * Context
 */
import { ToggleTreeContext } from '.'

/**
 * Open and close many things in a tree
 */
const ToggleTree: React.FC<IToggleTree.IProps | IToggleTree.IRenderProps> = ({ multi, children }) => {
  const [toggles, setToggled] = useToggleTree({ multi })

  /**
   * Context value
   */
  const value: IToggleTree.IValue = {
    toggles,
    setToggled
  }

  return (
    <ToggleTreeContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </ToggleTreeContext.Provider>
  )
}

export default ToggleTree
