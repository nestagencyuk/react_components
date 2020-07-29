import { IUseObserver } from './types'
import { useState, useCallback, useRef, useEffect } from 'react'

/**
 * Intersection Observer
 *
 * @param {Object} options
 * Options object for the intersection API
 */
const useResizeObserver = ({ unobserve = false }: IUseObserver.IProps = {}): [
  IUseObserver.IState,
  React.RefCallback<HTMLElement>
] => {
  const [entry, setEntry] = useState(null)
  const observer = useRef<ResizeObserver>()
  const ref = useRef<HTMLElement>()

  /**
   * Set the ref node
   */
  const setRef = useCallback((node) => {
    if (!node) return

    observer.current = new ResizeObserver((entries, self) => {
      entries.forEach((entry) => {
        setEntry(entry)
        if (unobserve) {
          self.unobserve(entry.target)
        }
      })
    })

    observer.current.observe(node)
    ref.current = node
  }, [])

  /**
   * Unsubscribe to observer on unmount
   */
  useEffect(() => {
    return () => observer?.current?.disconnect()
  }, [])

  return [entry, setRef]
}

export default useResizeObserver
