import * as React from 'react'
import { useRaf } from '.'

/**
 * Example of lerp scroll (separate file as doesn't work in MDX for some reason)
 */
const Example = () => {
  const [frame] = useRaf(0)
  return (
    <div style={{ height: '1000px' }}>
      {`${frame}`}
    </div>
  )
}

export { Example }
