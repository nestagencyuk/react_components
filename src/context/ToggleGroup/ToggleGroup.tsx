import { IToggleGroup } from './types'
import * as React from 'react'
import { useToggleGroup } from '../../hooks/useToggleGroup'

/**
 * Context
 */
import { ToggleGroupContext } from '.'

/**
 * Open and close many things
 */
const ToggleGroup: React.FC<IToggleGroup.IProps | IToggleGroup.IRenderProps> = ({ multi, children }) => {
  const [toggles, setToggled] = useToggleGroup({ multi })
  const value = { toggles, setToggled }

  return (
    <ToggleGroupContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </ToggleGroupContext.Provider>
  )
}

export default ToggleGroup
