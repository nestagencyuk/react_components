import { IToggle } from './types'
import { useState, useEffect } from 'react'

/**
 * Provide a boolean state
 */
const useToggle = ({ timeout }: IToggle.IArgs = {}): [boolean, (bool: boolean) => void] => {
  const [toggled, setToggled] = useState<boolean>(false)

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
