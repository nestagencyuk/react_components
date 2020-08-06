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
    ;(ref.current.textContent as unknown) = Number(ref.current.textContent || '0') + 1
  })

  return <span ref={ref} className="rendercounter" />
}

export default RenderCounter
