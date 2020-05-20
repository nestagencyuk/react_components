import * as React from 'react'
import { useObserver } from '.'

/**
 * Example of using the intersection API
 */
const Example = () => {
  const [entry, ref] = useObserver({
    root: null,
    rootMargin: '100px',
    threshold: 1
  })
  return (
    <div ref={ref} style={{ backgroundColor: entry?.intersectionRatio === 1 ? 'red' : 'blue', height: '500px', marginBottom: '1000px' }}>
      If I am fully visible, I will be red! Scroll down to see the change.
    </div>
  )
}

export { Example }
