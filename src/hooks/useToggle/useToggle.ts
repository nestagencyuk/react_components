import { IToggle } from './types'
import { useState, useEffect } from 'react'

/**
 * Provide a boolean state
 */
const useToggle = ({ timeout }: IToggle.IProps = {}): [IToggle.IState, React.Dispatch<React.SetStateAction<IToggle.IState>>] => {
  const [toggled, setToggled] = useState<IToggle.IState>(false)

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
