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
  target = null,
  root = null,
  rootMargin = '0px',
  threshold = [0, 1],
  unobserve = false
}: IUseObserver.IProps = {}): any => {
  // const ref = useRef<HTMLElement>()
  // const observer = useRef<IntersectionObserver>()

  // const [entry, setEntry] = useState(null)
  // const options = {
  //   root,
  //   rootMargin,
  //   threshold: threshold > 1 ? buildThresholdList(threshold) : threshold
  // }

  // /**
  //  * Set the ref node
  //  */
  // const setRef = useCallback((node) => {
  //   if (!node) return

  //   observer.current = new IntersectionObserver((entries, self) => {
  //     entries.forEach((entry) => {
  //       setEntry(entry)
  //       if (unobserve && entry.isIntersecting) {
  //         self.unobserve(entry.target)
  //       }
  //     })
  //   }, options)

  //   observer.current.observe(node)
  //   ref.current = node
  // }, [])

  // /**
  //  * Unsubscribe to observer on unmount
  //  */
  // useEffect(() => {
  //   return () => observer?.current?.disconnect()
  // }, [])

  // return [entry, setRef]

  // const [target, setNode] = useState(null)
  const [entry, updateEntry] = useState({})

  const observer = useRef(
    new window.IntersectionObserver(
      ([e]) => {
        updateEntry(e)
        // if (unobserve && e.isIntersecting) {
        //   self.unobserve(e.target)
        // }
      },
      {
        root,
        rootMargin,
        threshold: threshold > 1 ? buildThresholdList(threshold) : threshold
      }
    )
  )

  useEffect(() => {
    const { current: currentObserver } = observer
    currentObserver.disconnect()

    if (target) currentObserver.observe(target)

    return () => currentObserver.disconnect()
  }, [target])

  return [entry]
}

export default useObserver
