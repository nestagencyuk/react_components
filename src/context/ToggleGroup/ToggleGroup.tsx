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

  return (
    <ToggleGroupContext.Provider value={{ toggles, setToggled }}>
      {typeof children === 'function' ? children({ toggles, setToggled }) : children}
    </ToggleGroupContext.Provider>
  )
}

export default ToggleGroup
