import { useRef, useEffect, useCallback, useState } from 'react'

/**
 * Use request animation frame
 *
 * @param {Object} initialState
 */
const useRaf = <S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const frame = useRef(0)
  const [state, setState] = useState(initialState)

  /**
   * Set the current frame value
   */
  const setRafState = useCallback((value: S | ((prev: S) => S)) => {
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      setState(value)
    })
  }, [])

  /**
   * Unsubsribe to any changes on unmount to prevent memory leaks
   */
  useEffect(() => {
    return () => cancelAnimationFrame(frame.current)
  }, [])

  return [state, setRafState]
}

export default useRaf
