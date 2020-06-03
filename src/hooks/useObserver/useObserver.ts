import { useState, useCallback, useRef, useEffect } from 'react'

/**
 * Build a threshold list
 *
 * @param {Number} steps
 */
const buildThresholdList = (steps: number | number[]) => {
  let thresholds: number[] = []

  for (let i = 1.0; i <= steps; i++) {
    const ratio = i / (Array.isArray(steps) ? steps[0] : steps)
    thresholds = [...thresholds, ratio]
  }

  thresholds = [...thresholds, 0.01]
  return thresholds
}

/**
 * Intersection Observer
 *
 * @param {Object} options
 * Options object for the intersection API
 */
const useObserver = ({ root = null, rootMargin = '0px', threshold = [0, 1] }: IntersectionObserverInit = {}) => {
  const [entry, setEntry] = useState(null)
  const observer = useRef<IntersectionObserver>()
  const ref = useRef<HTMLElement>()

  const setRef = useCallback((node) => {
    if (!node) return

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setEntry(entry))
      },
      {
        root,
        rootMargin,
        threshold: threshold > 1 ? buildThresholdList(threshold) : threshold
      }
    )

    observer.current.observe(node)
    ref.current = node
  }, [])

  useEffect(() => {
    return () => observer?.current?.disconnect()
  }, [])

  return [entry, setRef]
}

export default useObserver
