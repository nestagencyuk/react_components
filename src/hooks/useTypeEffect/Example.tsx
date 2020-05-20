import * as React from 'react'
import { useTypeEffect } from '.'

/**
 * Example of lerp scroll (separate file as doesn't work in MDX for some reason)
 */
const Example = () => {
  const [frame] = useTypeEffect(false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 50)
  return (
    <div style={{ height: '1000px' }}>
      {`${frame}`}
      <span>|</span>
    </div>
  )
}

export { Example }
