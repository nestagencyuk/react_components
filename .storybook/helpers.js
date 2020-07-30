import React from 'react'
import { forwardRef } from 'react'

/**
 * Forward a ref to a div
 */
const RefDiv = forwardRef((props, ref) => <div ref={ref} {...props} />)

/**
 * Forward a ref to a section
 */
const RefSection = forwardRef((props, ref) => <section ref={ref} {...props} />)

export { RefDiv, RefSection }
