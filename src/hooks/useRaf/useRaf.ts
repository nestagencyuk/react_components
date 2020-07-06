import { useRef, useEffect, useCallback, useState, Dispatch, SetStateAction } from 'react'

/**
 * Use request animation frame
 *
 * @param {Object} initialState
 */
const useRaf = <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] => {
  const frame = useRef(0)
  const [state, setState] = useState(initialState)

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      setState(value)
    })
  }, [])

  useEffect(() => {
    return () => cancelAnimationFrame(frame.current)
  }, [])

  return [state, setRafState]
}

export default useRaf
