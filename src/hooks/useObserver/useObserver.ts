import { useState, useCallback, useRef, useEffect } from 'react'

/**
 * Build a threshold list
 *
 * @param {Number} steps
 */
const buildThresholdList = (steps: number) => {
  let thresholds: number[] = []

  for (let i = 1.0; i <= steps; i++) {
    const ratio = i / steps
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
const useObserver = ({ root = null, rootMargin = '0px', threshold = 0, thresholdList = null }: any = {}) => {
  const [entry, setEntry] = useState(null)
  const observer = useRef<any>()

  const options = {
    root,
    rootMargin,
    threshold: thresholdList ? buildThresholdList(thresholdList) : threshold
  }

  const ref = useCallback((node) => {
    if (!node) return
    (ref as any).current = node

    observer.current = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        setEntry(entry)
      })
    }, options)
    observer.current.observe(node)
  }, [])

  useEffect(() => {
    return () => observer.current.disconnect()
  }, [])

  return [entry, ref]
}

export default useObserver
