import { IUseToggle } from './types'
import { useState, useEffect } from 'react'

/**
 * Provide a boolean state
 */
const useToggle = ({ timeout }: IUseToggle.IProps = {}): [
  IUseToggle.IState,
  React.Dispatch<React.SetStateAction<IUseToggle.IState>>
] => {
  const [toggled, setToggled] = useState<IUseToggle.IState>(false)

  /**
   * Close automatically if timeout set
   */
  useEffect(() => {
    if (!toggled || !timeout) return
    setTimeout(() => setToggled(false), timeout)
  }, [toggled])

  return [toggled, setToggled]
}

export default useToggle
