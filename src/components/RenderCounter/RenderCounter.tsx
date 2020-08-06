import * as React from 'react'
import { useRef, useEffect } from 'react'

/**
 * Styles
 */
import './RenderCounter.scss'

/**
 * A component for testing a render count
 */
const RenderCounter: React.FC<{}> = () => {
  const ref = useRef<HTMLSpanElement>()

  /**
   * On mount
   */
  useEffect(() => {
    if (!ref.current) return
    ref.current.textContent = ((parseInt(ref.current.textContent) || 0) + 1).toString()
  })

  return <span ref={ref} className="rendercounter" />
}

export default RenderCounter
