import { useState, useEffect } from 'react'
import { IUseWindowSize } from './types'

/**
 * Returns the current window width and height
 */
const useWindowSize = (): IUseWindowSize.IState => {
  const [windowSize, setWindowSize] = useState<IUseWindowSize.IState>({
    width: undefined,
    height: undefined
  })

  /**
   * Handler to call on window resize
   */
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
