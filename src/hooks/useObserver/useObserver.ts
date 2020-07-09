import { IUseObserver } from './types'
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
const useObserver = ({
  root = null,
  rootMargin = '0px',
  threshold = [0, 1],
  unobserve = false
}: IUseObserver.IProps = {}): [IUseObserver.IState, React.RefCallback<HTMLElement>] => {
  const [entry, setEntry] = useState(null)
  const observer = useRef<IntersectionObserver>()
  const ref = useRef<HTMLElement>()
  const options = {
    root,
    rootMargin,
    threshold: threshold > 1 ? buildThresholdList(threshold) : threshold
  }

  const setRef = useCallback((node) => {
    if (!node) return

    observer.current = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        setEntry(entry)
        if (unobserve && entry.isIntersecting) {
          self.unobserve(entry.target)
        }
      })
    }, options)

    observer.current.observe(node)
    ref.current = node
  }, [])

  useEffect(() => {
    return () => observer?.current?.disconnect()
  }, [])

  return [entry, setRef]
}

export default useObserver
