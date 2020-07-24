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

  return (
    <ToggleTreeContext.Provider value={{ toggles, setToggled }}>
      {typeof children === 'function' ? children({ toggles, setToggled }) : children}
    </ToggleTreeContext.Provider>
  )
}

export default ToggleTree
