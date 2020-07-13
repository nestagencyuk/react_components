import { useRef, useEffect, useCallback, useState } from 'react'

/**
 * Use request animation frame
 *
 * @param {Object} init
 */
const useRaf = <S>(init: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const frame = useRef(0)
  const [state, setState] = useState(init)

  /**
   * Set the current frame value
   */
  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
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
